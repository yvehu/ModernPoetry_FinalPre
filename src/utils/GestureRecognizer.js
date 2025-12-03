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
    this.debugMode = true; // 启用调试模式，帮助排查问题
    this.lastGestureTime = Date.now(); // 最后手势活动时间
    this.idleThreshold = 3000; // 3秒无手势后视为空闲
  }

  async initialize(videoElement) {
    try {
      console.log('[GestureRecognizer] 开始初始化 MediaPipe Hands...');
      
      // 使用正确的 MediaPipe 配置
      // 针对 GitHub Pages 和本地环境优化资源加载
      // 检测是否在生产环境（GitHub Pages）
      const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
      
      this.hands = new Hands({
        locateFile: (file) => {
          // MediaPipe 文件路径处理
          // 使用多个 CDN 源以提高可靠性
          const baseUrl = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1675469240';
          
          // 处理文件路径
          let filePath = file;
          // 移除开头的斜杠
          if (filePath.startsWith('/')) {
            filePath = filePath.substring(1);
          }
          
          // 构建完整 URL（使用绝对路径，不受 base 路径影响）
          const fullUrl = `${baseUrl}/${filePath}`;
          
          if (this.debugMode || isProduction) {
            console.log('[GestureRecognizer] 📦 加载 MediaPipe 文件:', file, '->', fullUrl, isProduction ? '(生产环境)' : '(开发环境)');
          }
          
          return fullUrl;
        }
      });
      
      // 添加错误处理（MediaPipe 可能不支持 setErrorHandler，所以用 try-catch）
      // 注意：MediaPipe Hands 可能没有 setErrorHandler 方法

      this.hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.3, // 降低阈值，更容易检测到手部
        minTrackingConfidence: 0.3   // 降低阈值，提高跟踪稳定性
      });

      // 添加结果计数器，用于调试
      this.frameCount = 0;
      this.detectionCount = 0;
      
      this.hands.onResults((results) => {
        this.frameCount++;
        const handCount = results.multiHandLandmarks ? results.multiHandLandmarks.length : 0;
        
        // 调试：每100帧输出一次统计信息
        if (this.debugMode && this.frameCount % 100 === 0) {
          const detectionRate = (this.detectionCount / this.frameCount * 100).toFixed(1);
          console.log(`[MediaPipe] 统计: 总帧数=${this.frameCount}, 检测到=${this.detectionCount}, 检测率=${detectionRate}%`);
        }
        
        if (handCount > 0) {
          this.detectionCount++;
          // 只在检测到手部时输出（降低频率）
          if (this.debugMode && this.frameCount % 30 === 0) {
            console.log(`[MediaPipe] ✅ 检测到 ${handCount} 只手`);
          }
        }
        
        this.processResults(results);
      });

      console.log('[GestureRecognizer] MediaPipe Hands 配置完成');
    } catch (error) {
      console.error('[GestureRecognizer] MediaPipe Hands 创建失败:', error);
      throw error;
    }

    // 确保视频元素已加载
    // 在生产环境（GitHub Pages）可能需要更多时间
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    
    if (videoElement.readyState < 2) {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn('[GestureRecognizer] 视频元数据加载超时，继续初始化');
          resolve();
        }, isProduction ? 5000 : 3000);
        
        videoElement.addEventListener('loadedmetadata', () => {
          clearTimeout(timeout);
          resolve();
        }, { once: true });
      });
    }

    // 创建 Camera 实例
    this.camera = new Camera(videoElement, {
      onFrame: async () => {
        try {
          // 确保视频元素有有效的视频流和 MediaPipe 已初始化
          if (videoElement.readyState >= 2 && videoElement.videoWidth > 0 && this.hands) {
            try {
              await this.hands.send({ image: videoElement });
            } catch (sendError) {
              // MediaPipe 发送错误，可能是资源加载问题
              // 静默处理，不阻止页面运行
              if (this.debugMode && Math.random() < 0.01) {
                console.warn('[MediaPipe] 发送图像失败（可能资源未加载）:', sendError.message);
              }
            }
          }
        } catch (error) {
          // 静默处理所有错误，确保不影响页面
          if (this.debugMode && Math.random() < 0.01) {
            console.warn('[MediaPipe] 帧处理错误:', error.message);
          }
        }
      },
      width: 640,
      height: 480
    });

    try {
      await this.camera.start();
      console.log('[GestureRecognizer] 摄像头启动成功');
      console.log('[GestureRecognizer] 视频尺寸:', videoElement.videoWidth, 'x', videoElement.videoHeight);
    } catch (error) {
      console.error('[GestureRecognizer] 摄像头启动失败:', error);
      throw error;
    }
  }

  processResults(results) {
    // 确保 results 对象存在
    if (!results) {
      if (this.debugMode && Math.random() < 0.01) {
        console.warn('[Gesture] processResults 收到空结果');
      }
      return;
    }
    
    const handCount = results.multiHandLandmarks ? results.multiHandLandmarks.length : 0;
    
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

      // 通知更新（两只手的情况）
      if (this.onGestureUpdate && !isNaN(this.scale) && isFinite(this.scale)) {
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
        // 初始化时，设置 scale 为 1.0
        this.scale = 1.0;
      }
      
      // 计算相对于基准的变化比例
      const baseDistance = Math.max(0.05, this.lastHandDistance); // 防止除零
      const distanceRatio = avgPalmDistance / baseDistance;
      
      // 更新基准（更慢的适应速度，保持基准稳定，让手势变化更明显）
      // 只有当手势明显变化时才更新基准
      const distanceChange = Math.abs(avgPalmDistance - this.lastHandDistance);
      if (distanceChange > this.lastHandDistance * 0.1) {
        // 手势变化超过10%时才更新基准
        this.lastHandDistance = this.lastHandDistance * 0.98 + avgPalmDistance * 0.02;
      }
      
      // 改进的缩放计算：基于距离比例，范围 0.5 到 2.0
      // 当手指张开时，distanceRatio 增大；合拢时减小
      // 使用更敏感的映射：1.0 对应基准距离，1.3 对应 1.6倍缩放，0.7 对应 0.6倍缩放
      const scaleRange = 2.0; // 增大缩放范围，让效果更明显
      const rawScale = Math.max(0.5, Math.min(2.0, 1.0 + (distanceRatio - 1.0) * scaleRange));
      
      // 使用更快的平滑，让响应更灵敏
      const fastSmoothingFactor = 0.5; // 进一步提高响应速度到0.5，几乎实时响应
      this.scale = this.scale * (1 - fastSmoothingFactor) + rawScale * fastSmoothingFactor;
      
      // 确保 scale 在合理范围内
      this.scale = Math.max(0.5, Math.min(2.0, this.scale));

      // 调试信息（提高频率，确保能看到变化）
      if (this.debugMode) {
        if (!this.debugFrameCount) this.debugFrameCount = 0;
        this.debugFrameCount++;
        // 每5帧输出一次
        if (this.debugFrameCount % 5 === 0) {
          console.log('[Gesture] ✋ 单手控制:', {
            avgPalmDistance: avgPalmDistance.toFixed(3),
            baseDistance: baseDistance.toFixed(3),
            distanceRatio: distanceRatio.toFixed(3),
            rawScale: rawScale.toFixed(3),
            currentScale: this.scale.toFixed(3),
            scaleChange: Math.abs(this.scale - 1.0).toFixed(3),
            callbackExists: !!this.onGestureUpdate
          });
        }
      }

      // 更新最后手势时间
      this.lastGestureTime = Date.now();

      // 确保回调函数存在且 scale 是有效值
      if (this.onGestureUpdate && !isNaN(this.scale) && isFinite(this.scale)) {
        this.onGestureUpdate({
          scale: this.scale,
          handsDetected: true,
          handDistance: avgPalmDistance
        });
      } else if (this.debugMode && Math.random() < 0.01) {
        console.warn('[Gesture] 无效的 scale 值或回调函数不存在:', this.scale);
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

