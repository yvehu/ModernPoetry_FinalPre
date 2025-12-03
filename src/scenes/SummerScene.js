import * as THREE from 'three';

export const summerConfig = {
  backgroundColor: new THREE.Color(0x2a2a3a), // 深蓝灰色背景
  particleOptions: {
    count: 12000, // 增加粒子数量以占满屏幕
    size: 0.025,
    opacity: 0.95,
    
    positionGenerator: (i, count) => {
      // 满屏幕：上半部分天空，下半部分湖面（面向屏幕）
      const isSky = i < count * 0.5;
      
      if (isSky) {
        // 天空：粉蓝色粒子，充满上半部分，占满整个屏幕宽度
        return {
          x: (Math.random() - 0.5) * 20, // 扩大x范围，占满屏幕宽度
          y: Math.random() * 8 + 1, // 上半部分：y从1到9，占满上半屏幕
          z: (Math.random() - 0.5) * 0.1 // z值很小，面向屏幕
        };
      } else {
        // 湖面：橙色黄色粒子，充满下半部分，占满整个屏幕宽度
        return {
          x: (Math.random() - 0.5) * 20, // 扩大x范围，占满屏幕宽度
          y: Math.random() * 8 - 7, // 下半部分：y从-7到-1，占满下半屏幕
          z: (Math.random() - 0.5) * 0.1 // z值很小，面向屏幕
        };
      }
    },

    colorGenerator: (i, count) => {
      const isSky = i < count * 0.5;
      
      if (isSky) {
        // 天空：粉蓝色晚霞，更强调粉蓝色
        const variation = Math.random();
        const yPos = i < count * 0.5 ? (i / (count * 0.5)) : 0;
        
        // 根据高度添加渐变：上方更蓝，下方更粉
        if (variation < 0.4) {
          // 粉蓝色（主要颜色）
          return new THREE.Color(0.7, 0.6, 1); // 粉蓝色
        } else if (variation < 0.7) {
          // 淡粉色
          return new THREE.Color(1, 0.7, 0.9); // 粉色
        } else {
          // 淡蓝色
          return new THREE.Color(0.6, 0.7, 1); // 蓝色
        }
      } else {
        // 湖面：橙色黄色渐变，更多变化
        const variation = Math.random();
        const yPos = (i - count * 0.5) / (count * 0.5);
        
        // 根据位置添加渐变：上方更橙，下方更黄
        if (variation < 0.3) {
          // 深橙色
          return new THREE.Color(1, 0.5, 0);
        } else if (variation < 0.6) {
          // 橙色
          return new THREE.Color(1, 0.6, 0.1);
        } else if (variation < 0.8) {
          // 橙黄色
          return new THREE.Color(1, 0.7, 0.2);
        } else {
          // 金黄色
          return new THREE.Color(1, 0.8, 0.3);
        }
      }
    },

    velocityGenerator: (i, count) => {
      const isSky = i < count * 0.5;
      
      if (isSky) {
        // 天空：非常缓慢流动，几乎静止
        return new THREE.Vector3(
          (Math.random() - 0.5) * 0.003,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.001
        );
      } else {
        // 湖面：非常轻微的波动，几乎静止
        return new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          Math.sin(i * 0.1) * 0.0005,
          (Math.random() - 0.5) * 0.001
        );
      }
    },

    updateFunction: (pos, vel, i, deltaTime, scale) => {
      const count = 12000;
      const isSky = i < count * 0.5;
      
      if (isSky) {
        // 天空：保持在上半部分，占满屏幕
        if (pos.y < 1) {
          pos.y = 1 + Math.random() * 8;
        }
        if (pos.y > 9) {
          pos.y = 1 + Math.random() * 8;
        }
        
        // 左右边界循环，占满屏幕宽度
        if (pos.x > 10) pos.x = -10;
        if (pos.x < -10) pos.x = 10;
        
        // 保持z值很小
        if (Math.abs(pos.z) > 0.1) {
          pos.z *= 0.9;
        }
      } else {
        // 湖面：保持在下半部分，占满屏幕
        if (pos.y > -1) {
          pos.y = -7 + Math.random() * 6;
        }
        if (pos.y < -9) {
          pos.y = -7 + Math.random() * 6;
        }
        
        // 左右边界循环，占满屏幕宽度
        if (pos.x > 10) pos.x = -10;
        if (pos.x < -10) pos.x = 10;
        
        // 保持z值很小
        if (Math.abs(pos.z) > 0.1) {
          pos.z *= 0.9;
        }
      }
    }
  }
};
