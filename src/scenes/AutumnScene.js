import * as THREE from 'three';

// 生成一片大树叶的形状（参考🍂）
function generateLargeLeaf(i, totalParticles) {
  // 树叶形状：椭圆形，有主脉、侧脉和叶柄
  const leafLength = 4; // 叶子长度（垂直方向）
  const leafWidth = 2.5; // 叶子宽度（水平方向）
  const stemLength = 0.8; // 叶柄长度
  
  // 将粒子分布在叶子上
  const normalizedPos = i / totalParticles;
  
  // 判断是叶柄还是叶片
  const stemRatio = stemLength / (leafLength + stemLength); // 叶柄占总长度的比例
  const isStem = normalizedPos < stemRatio;
  
  if (isStem) {
    // 叶柄部分：细长的茎，在底部
    const stemPos = normalizedPos / stemRatio; // 0 到 1
    const stemY = -leafLength / 2 - stemLength + stemPos * stemLength;
    
    // 叶柄很细，宽度很小
    const stemWidth = 0.08;
    const angle = (i % 8) / 8 * Math.PI * 2;
    const radius = Math.random() * stemWidth;
    
    return {
      x: Math.cos(angle) * radius,
      y: stemY + (Math.random() - 0.5) * 0.05,
      z: (Math.random() - 0.5) * 0.03 // z值很小，面向屏幕
    };
  } else {
    // 叶片部分：椭圆形，有主脉和侧脉
    const leafPos = (normalizedPos - stemRatio) / (1 - stemRatio); // 0 到 1
    const mainVeinY = (leafPos - 0.5) * leafLength;
    
    // 叶子宽度随位置变化（椭圆形）
    const widthFactor = Math.sqrt(1 - Math.pow((leafPos - 0.5) * 2, 2));
    const maxWidth = leafWidth * widthFactor;
    
    // 在宽度范围内分布粒子
    const widthPos = (i % 20) / 20; // 每20个粒子形成一个横截面
    const x = (widthPos - 0.5) * maxWidth;
    
    // 添加主脉效果（中心更密集）
    const veinOffset = Math.abs(x) < 0.3 ? 0 : (Math.random() - 0.5) * 0.15;
    
    // 添加侧脉效果（从主脉向两侧延伸）
    const sideVein = Math.sin(mainVeinY * 1.5) * 0.08;
    
    return {
      x: x + veinOffset + sideVein,
      y: mainVeinY + (Math.random() - 0.5) * 0.1,
      z: (Math.random() - 0.5) * 0.05 // z值很小，面向屏幕
    };
  }
}

export const autumnConfig = {
  backgroundColor: new THREE.Color(0x2a2a3a), // 深蓝灰色背景
  particleOptions: {
    count: 6000,
    size: 0.04,
    opacity: 0.9,
    
    positionGenerator: (i, count) => {
      return generateLargeLeaf(i, count);
    },

    colorGenerator: (i, count) => {
      // 棕色系：从深棕色到红棕色，参考🍂
      const variation = Math.random();
      const normalizedPos = i / count;
      
      // 根据位置添加渐变：中心更红，边缘更棕
      const centerFactor = 1 - Math.abs(normalizedPos - 0.5) * 2;
      
      if (variation < 0.4) {
        // 深棕色
        return new THREE.Color(
          0.5 + variation * 0.2,
          0.3 + variation * 0.15,
          0.1 + variation * 0.1
        );
      } else if (variation < 0.7) {
        // 红棕色
        return new THREE.Color(
          0.6 + centerFactor * 0.2,
          0.35 + variation * 0.15,
          0.15 + variation * 0.1
        );
      } else {
        // 褐色
        return new THREE.Color(
          0.55 + variation * 0.15,
          0.4 + variation * 0.1,
          0.2 + variation * 0.1
        );
      }
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
