import { Hands } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

export class GestureRecognizer {
  constructor(onGestureUpdate) {
    this.onGestureUpdate = onGestureUpdate;
    this.hands = null;
    this.camera = null;
    this.lastHandDistance = null;
    this.scale = 1.0;
    this.smoothingFactor = 0.1; // 用于平滑手势变化
    this.debugMode = false; // 调试模式
    this.lastGestureTime = Date.now(); // 最后手势活动时间
    this.idleThreshold = 3000; // 3秒无手势后视为空闲
  }

  async initialize(videoElement) {
    this.hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });

    this.hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    this.hands.onResults((results) => {
      this.processResults(results);
    });

    this.camera = new Camera(videoElement, {
      onFrame: async () => {
        await this.hands.send({ image: videoElement });
      },
      width: 640,
      height: 480
    });

    await this.camera.start();
  }

  processResults(results) {
    
    if (results.multiHandLandmarks && results.multiHandLandmarks.length === 2) {
      // 检测到两只手
      const hand1 = results.multiHandLandmarks[0];
      const hand2 = results.multiHandLandmarks[1];

      // 计算两只手中心点之间的距离
      const hand1Center = this.getHandCenter(hand1);
      const hand2Center = this.getHandCenter(hand2);

      const distance = Math.sqrt(
        Math.pow(hand1Center.x - hand2Center.x, 2) +
        Math.pow(hand1Center.y - hand2Center.y, 2) +
        Math.pow(hand1Center.z - hand2Center.z, 2)
      );

      // 计算缩放因子（基于距离变化）
      if (this.lastHandDistance !== null) {
        const distanceChange = distance - this.lastHandDistance;
        // 归一化到 0.5 到 2.0 的范围
        const normalizedDistance = Math.max(0.3, Math.min(1.5, distance / 0.5));
        
        // 平滑处理
        this.scale = this.scale * (1 - this.smoothingFactor) + normalizedDistance * this.smoothingFactor;
      } else {
        this.scale = 1.0;
      }

      this.lastHandDistance = distance;

      // 更新最后手势时间
      this.lastGestureTime = Date.now();

      // 通知更新
      if (this.onGestureUpdate) {
        this.onGestureUpdate({
          scale: this.scale,
          handsDetected: true,
          handDistance: distance
        });
      }
    } else if (results.multiHandLandmarks && results.multiHandLandmarks.length === 1) {
      // 只有一只手，检测手指张合
      const hand = results.multiHandLandmarks[0];
      
      // MediaPipe手部关键点索引
      // 0: 手腕, 4: 拇指尖, 5: 拇指IP, 8: 食指尖, 9: 食指MCP
      // 12: 中指尖, 13: 中指MCP, 16: 无名指尖, 20: 小指尖
      const wrist = hand[0];
      const indexTip = hand[8];
      const indexMCP = hand[9]; // 食指掌指关节
      const middleTip = hand[12];
      const middleMCP = hand[13]; // 中指掌指关节
      const ringTip = hand[16];
      const pinkyTip = hand[20];
      
      // 方法1: 检测手指是否伸直（指尖到手腕的距离）
      const fingerDistances = [
        this.distance3D(indexTip, wrist),
        this.distance3D(middleTip, wrist),
        this.distance3D(ringTip, wrist),
        this.distance3D(pinkyTip, wrist)
      ];
      const avgFingerDistance = fingerDistances.reduce((a, b) => a + b, 0) / fingerDistances.length;
      
      // 方法2: 检测手指之间的张开程度（食指和中指之间的距离）
      const indexMiddleDistance = this.distance3D(indexTip, middleTip);
      
      // 方法3: 检测手指到手掌中心的距离（更稳定）
      const palmCenter = this.getHandCenter(hand);
      const palmDistances = [
        this.distance3D(indexTip, palmCenter),
        this.distance3D(middleTip, palmCenter),
        this.distance3D(ringTip, palmCenter),
        this.distance3D(pinkyTip, palmCenter)
      ];
      const avgPalmDistance = palmDistances.reduce((a, b) => a + b, 0) / palmDistances.length;
      
      // 动态归一化：使用当前值和历史值来适应不同人的手大小
      if (this.lastHandDistance === null) {
        this.lastHandDistance = avgPalmDistance;
      }
      
      // 计算相对于基准的变化比例
      const baseDistance = Math.max(0.05, this.lastHandDistance); // 防止除零
      const distanceRatio = avgPalmDistance / baseDistance;
      
      // 更新基准（缓慢适应）
      this.lastHandDistance = this.lastHandDistance * 0.99 + avgPalmDistance * 0.01;
      
      // 计算缩放：基于距离比例，范围 0.3 到 2.5
      // 当手指张开时，distanceRatio 增大；合拢时减小
      const rawScale = Math.max(0.3, Math.min(2.5, 0.5 + (distanceRatio - 0.8) * 2));
      
      // 使用更快的平滑，让响应更灵敏
      const fastSmoothingFactor = 0.4; // 进一步提高响应速度
      this.scale = this.scale * (1 - fastSmoothingFactor) + rawScale * fastSmoothingFactor;

      // 调试信息（可选，在控制台查看）
      if (this.debugMode) {
        console.log('单手控制:', {
          avgFingerDistance: avgFingerDistance.toFixed(3),
          avgPalmDistance: avgPalmDistance.toFixed(3),
          distanceRatio: distanceRatio.toFixed(3),
          rawScale: rawScale.toFixed(3),
          currentScale: this.scale.toFixed(3)
        });
      }

      // 更新最后手势时间
      this.lastGestureTime = Date.now();

      if (this.onGestureUpdate) {
        this.onGestureUpdate({
          scale: this.scale,
          handsDetected: true,
          handDistance: avgPalmDistance
        });
      }
    } else {
      // 没有检测到手，检查是否长时间无手势
      const currentTime = Date.now();
      const timeSinceLastGesture = currentTime - this.lastGestureTime;
      
      // 如果长时间无手势，通知需要重置
      if (timeSinceLastGesture > this.idleThreshold) {
        if (this.onGestureUpdate) {
          this.onGestureUpdate({
            scale: 1.0,
            handsDetected: false,
            handDistance: 0,
            shouldReset: true // 标记需要重置到原始形态
          });
        }
      } else {
        // 重置缩放
        this.scale = 1.0;
        if (this.onGestureUpdate) {
          this.onGestureUpdate({
            scale: 1.0,
            handsDetected: false,
            handDistance: 0,
            shouldReset: false
          });
        }
      }
    }
  }

  getHandCenter(hand) {
    const wrist = hand[0];
    const middleMCP = hand[9];
    return {
      x: (wrist.x + middleMCP.x) / 2,
      y: (wrist.y + middleMCP.y) / 2,
      z: (wrist.z + middleMCP.z) / 2
    };
  }

  distance3D(point1, point2) {
    return Math.sqrt(
      Math.pow(point1.x - point2.x, 2) +
      Math.pow(point1.y - point2.y, 2) +
      Math.pow(point1.z - point2.z, 2)
    );
  }

  stop() {
    if (this.camera) {
      this.camera.stop();
    }
  }
}

