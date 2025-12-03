import * as THREE from 'three';

// 生成一朵大樱花的形状（参考🌸）
function generateLargeCherryBlossom(i, totalParticles) {
  // 一朵大樱花，5个圆形花瓣
  const petalsCount = 5;
  const particlesPerPetal = Math.floor(totalParticles / petalsCount);
  const petalIndex = Math.floor(i / particlesPerPetal);
  const particleInPetal = i % particlesPerPetal;
  
  // 花瓣角度
  const petalAngle = (petalIndex / petalsCount) * Math.PI * 2;
  
  // 花瓣中心位置（距离中心一定距离）
  const petalCenterDist = 1.2;
  const petalCenterX = Math.cos(petalAngle) * petalCenterDist;
  const petalCenterY = Math.sin(petalAngle) * petalCenterDist;
  
  // 在每个花瓣上生成圆形分布的粒子
  const angleInPetal = (particleInPetal / particlesPerPetal) * Math.PI * 2;
  const radiusInPetal = Math.random() * 0.8; // 花瓣半径
  
  const x = petalCenterX + Math.cos(angleInPetal) * radiusInPetal;
  const y = petalCenterY + Math.sin(angleInPetal) * radiusInPetal;
  
  // 中心花蕊区域
  const centerDist = Math.sqrt(x * x + y * y);
  if (centerDist < 0.3) {
    // 花蕊：更密集的粒子
    const centerAngle = Math.random() * Math.PI * 2;
    const centerRadius = Math.random() * 0.2;
    return {
      x: Math.cos(centerAngle) * centerRadius,
      y: Math.sin(centerAngle) * centerRadius,
      z: (Math.random() - 0.5) * 0.05 // z值很小，面向屏幕
    };
  }
  
  return {
    x: x,
    y: y,
    z: (Math.random() - 0.5) * 0.05 // z值很小，面向屏幕
  };
}

export const springConfig = {
  backgroundColor: new THREE.Color(0x1a1a2e), // 深蓝灰色背景
  particleOptions: {
    count: 5000,
    size: 0.04,
    opacity: 0.9,
    color: new THREE.Color(1, 0.7, 0.8), // 粉色

    positionGenerator: (i, count) => {
      return generateLargeCherryBlossom(i, count);
    },

    colorGenerator: (i, count) => {
      // 粉色变化
      const variation = Math.random();
      return new THREE.Color(
        1,
        0.6 + variation * 0.3,
        0.7 + variation * 0.2
      );
    },

    velocityGenerator: (i, count) => {
      // 初始速度为零，完全静止
      return new THREE.Vector3(0, 0, 0);
    },

    updateFunction: (pos, vel, i, deltaTime, scale) => {
      // 没有手势时，保持完全静止
      // 保持z值很小
      if (Math.abs(pos.z) > 0.1) {
        pos.z *= 0.9;
      }
    }
  }
};
