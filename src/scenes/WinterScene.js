import * as THREE from 'three';

// 生成一片复杂的雪花形状（参考❄️）
function generateLargeSnowflake(i, totalParticles) {
  // 六角雪花：6个主分支，每个分支有多层侧分支
  const mainBranches = 6;
  const particlesPerBranch = Math.floor(totalParticles / mainBranches);
  const branchIndex = Math.floor(i / particlesPerBranch);
  const particleInBranch = i % particlesPerBranch;
  
  // 主分支角度
  const branchAngle = (branchIndex / mainBranches) * Math.PI * 2;
  
  // 主分支长度（更长）
  const branchLength = 0.1 + (particleInBranch / particlesPerBranch) * 4.0;
  
  // 主分支位置
  const mainX = Math.cos(branchAngle) * branchLength;
  const mainY = Math.sin(branchAngle) * branchLength;
  
  // 在主分支上添加粒子（形成粗线条）
  const offsetAlongBranch = (particleInBranch % 10) / 10;
  const offsetPerp = ((particleInBranch % 10) - 4.5) * 0.04;
  
  const perpAngle = branchAngle + Math.PI / 2;
  const offsetX = Math.cos(perpAngle) * offsetPerp;
  const offsetY = Math.sin(perpAngle) * offsetPerp;
  
  // 第一层侧分支（靠近中心，较短）
  let side1X = 0, side1Y = 0;
  if (particleInBranch > 5 && particleInBranch < particlesPerBranch * 0.3) {
    const side1Index = (particleInBranch - 5) % 2;
    const side1Length = 0.4 + side1Index * 0.2;
    const side1Angle = branchAngle + (side1Index === 0 ? 1 : -1) * Math.PI / 4;
    side1X = Math.cos(side1Angle) * side1Length;
    side1Y = Math.sin(side1Angle) * side1Length;
    
    // 在第一层侧分支上添加小分支
    const subBranchIndex = (particleInBranch - 5) % 3;
    if (subBranchIndex === 2) {
      const subAngle = side1Angle + (side1Index === 0 ? 1 : -1) * Math.PI / 6;
      side1X += Math.cos(subAngle) * 0.25;
      side1Y += Math.sin(subAngle) * 0.25;
    }
  }
  
  // 第二层侧分支（中间位置，中等长度）
  let side2X = 0, side2Y = 0;
  if (particleInBranch > particlesPerBranch * 0.3 && particleInBranch < particlesPerBranch * 0.7) {
    const side2Index = (particleInBranch - Math.floor(particlesPerBranch * 0.3)) % 3;
    const side2Length = 0.7 + side2Index * 0.3;
    const side2Angle = branchAngle + (side2Index === 0 ? 1 : side2Index === 1 ? -1 : 0) * Math.PI / 3;
    side2X = Math.cos(side2Angle) * side2Length;
    side2Y = Math.sin(side2Angle) * side2Length;
    
    // 在第二层侧分支上添加更小的分支
    const subBranch2Index = (particleInBranch - Math.floor(particlesPerBranch * 0.3)) % 4;
    if (subBranch2Index === 3) {
      const subAngle2 = side2Angle + (side2Index === 0 ? 1 : -1) * Math.PI / 5;
      side2X += Math.cos(subAngle2) * 0.3;
      side2Y += Math.sin(subAngle2) * 0.3;
    }
  }
  
  // 第三层侧分支（靠近末端，较长）
  let side3X = 0, side3Y = 0;
  if (particleInBranch > particlesPerBranch * 0.7 && particleInBranch < particlesPerBranch - 3) {
    const side3Index = (particleInBranch - Math.floor(particlesPerBranch * 0.7)) % 2;
    const side3Length = 1.0 + side3Index * 0.4;
    const side3Angle = branchAngle + (side3Index === 0 ? 1 : -1) * Math.PI / 3.5;
    side3X = Math.cos(side3Angle) * side3Length;
    side3Y = Math.sin(side3Angle) * side3Length;
    
    // 在第三层侧分支末端添加小分支
    const subBranch3Index = (particleInBranch - Math.floor(particlesPerBranch * 0.7)) % 5;
    if (subBranch3Index === 4) {
      const subAngle3 = side3Angle + (side3Index === 0 ? 1 : -1) * Math.PI / 4;
      side3X += Math.cos(subAngle3) * 0.35;
      side3Y += Math.sin(subAngle3) * 0.35;
    }
  }
  
  // 中心区域：六角形中心，更密集
  const centerDist = Math.random() * 0.3;
  const centerAngle = Math.random() * Math.PI * 2;
  const centerX = Math.cos(centerAngle) * centerDist;
  const centerY = Math.sin(centerAngle) * centerDist;
  
  // 中心的小装饰分支（6个小分支）
  let centerDecoX = 0, centerDecoY = 0;
  if (particleInBranch < 5) {
    const decoAngle = (particleInBranch / 5) * Math.PI * 2;
    const decoLength = 0.15 + Math.random() * 0.1;
    centerDecoX = Math.cos(decoAngle) * decoLength;
    centerDecoY = Math.sin(decoAngle) * decoLength;
  }
  
  // 组合所有分支
  return {
    x: mainX + offsetX + side1X * 0.5 + side2X * 0.45 + side3X * 0.4 + centerX * 0.2 + centerDecoX,
    y: mainY + offsetY + side1Y * 0.5 + side2Y * 0.45 + side3Y * 0.4 + centerY * 0.2 + centerDecoY,
    z: (Math.random() - 0.5) * 0.05 // z值很小，面向屏幕
  };
}

export const winterConfig = {
  backgroundColor: new THREE.Color(0x1a1a2a), // 深蓝灰色背景
  particleOptions: {
    count: 8000, // 增加粒子数以支持更复杂的形状
    size: 0.03,
    opacity: 0.95,
    
    positionGenerator: (i, count) => {
      return generateLargeSnowflake(i, count);
    },

    colorGenerator: (i, count) => {
      // 白色，有些带一点蓝色调
      const variation = Math.random();
      return new THREE.Color(
        0.95 + variation * 0.05,
        0.95 + variation * 0.05,
        1
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
