import * as THREE from 'three';

export class ParticleSystem {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;
    this.particles = null;
    this.particleGeometry = null;
    this.particleMaterial = null;
    this.particlePositions = [];
    this.particleVelocities = [];
    this.particleColors = [];
    this.basePositions = []; // 存储粒子的基础位置（不受缩放影响）
    this.initialPositions = []; // 存储粒子的初始位置（原始模型形态）
    this.initialVelocities = []; // 存储粒子的初始速度
    this.baseScale = 1.0;
    this.targetScale = 1.0;
    this.isResetting = false; // 是否正在重置到原始形态
    this.resetProgress = 0; // 重置进度（0-1）
  }

  createParticles() {
    console.log('[ParticleSystem] 🎨 开始创建粒子...');
    const particleCount = this.config.count || 1000;
    console.log('[ParticleSystem] 📊 粒子数量:', particleCount);
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    this.particlePositions = [];
    this.particleVelocities = [];
    this.particleColors = [];

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // 根据配置生成粒子位置
      const pos = this.config.positionGenerator ? 
        this.config.positionGenerator(i, particleCount) : 
        this.defaultPositionGenerator(i, particleCount);
      
      positions[i3] = pos.x;
      positions[i3 + 1] = pos.y;
      positions[i3 + 2] = pos.z;

      // 颜色
      const color = this.config.colorGenerator ? 
        this.config.colorGenerator(i, particleCount) : 
        this.config.color || new THREE.Color(1, 1, 1);
      
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // 大小
      sizes[i] = this.config.size || 0.02;

      // 存储位置和速度用于动画
      const initialPos = new THREE.Vector3(pos.x, pos.y, pos.z);
      const initialVel = this.config.velocityGenerator ? 
        this.config.velocityGenerator(i, particleCount) : 
        new THREE.Vector3(0, 0, 0);
      
      this.particlePositions.push(new THREE.Vector3(pos.x, pos.y, pos.z));
      this.basePositions.push(new THREE.Vector3(pos.x, pos.y, pos.z)); // 保存基础位置
      this.initialPositions.push(initialPos.clone()); // 保存初始位置
      this.initialVelocities.push(initialVel.clone()); // 保存初始速度
      this.particleVelocities.push(initialVel.clone());
      this.particleColors.push(color);
    }

    try {
      this.particleGeometry = new THREE.BufferGeometry();
      
      // 确保数组有效
      if (!positions || positions.length === 0) {
        throw new Error('粒子位置数组无效: ' + positions);
      }
      if (!colors || colors.length === 0) {
        throw new Error('粒子颜色数组无效: ' + colors);
      }
      if (!sizes || sizes.length === 0) {
        throw new Error('粒子大小数组无效: ' + sizes);
      }
      
      // 验证数组类型
      if (!(positions instanceof Float32Array)) {
        console.warn('[ParticleSystem] ⚠️ positions 不是 Float32Array，类型:', typeof positions);
      }
      if (!(colors instanceof Float32Array)) {
        console.warn('[ParticleSystem] ⚠️ colors 不是 Float32Array，类型:', typeof colors);
      }
      if (!(sizes instanceof Float32Array)) {
        console.warn('[ParticleSystem] ⚠️ sizes 不是 Float32Array，类型:', typeof sizes);
      }
      
      console.log('[ParticleSystem] 📊 创建 BufferAttribute，数组长度:', {
        positions: positions.length,
        colors: colors.length,
        sizes: sizes.length
      });
      
      // 创建 BufferAttribute
      const positionAttr = new THREE.BufferAttribute(positions, 3);
      const colorAttr = new THREE.BufferAttribute(colors, 3);
      const sizeAttr = new THREE.BufferAttribute(sizes, 1);
      
      // 验证属性创建成功
      if (!positionAttr || !positionAttr.array) {
        throw new Error('position BufferAttribute 创建失败');
      }
      if (!colorAttr || !colorAttr.array) {
        throw new Error('color BufferAttribute 创建失败');
      }
      if (!sizeAttr || !sizeAttr.array) {
        throw new Error('size BufferAttribute 创建失败');
      }
      
      this.particleGeometry.setAttribute('position', positionAttr);
      this.particleGeometry.setAttribute('color', colorAttr);
      this.particleGeometry.setAttribute('size', sizeAttr);
      
      console.log('[ParticleSystem] ✅ 几何体创建成功');
    } catch (error) {
      console.error('[ParticleSystem] ❌ 几何体创建失败:', error);
      console.error('[ParticleSystem] 错误堆栈:', error.stack);
      throw error;
    }

    this.particleMaterial = new THREE.PointsMaterial({
      size: this.config.size || 0.02,
      vertexColors: true,
      transparent: true,
      opacity: this.config.opacity || 0.8,
      blending: THREE.NormalBlending, // 改为NormalBlending，避免颜色叠加变白
      sizeAttenuation: true
    });

    this.particles = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.scene.add(this.particles);
    
    console.log('[ParticleSystem] ✅ 粒子创建完成:', {
      particleCount: particleCount,
      geometryVertices: this.particleGeometry.attributes.position.count,
      materialSize: this.particleMaterial.size,
      sceneChildren: this.scene.children.length
    });
  }

  defaultPositionGenerator(i, count) {
    return {
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 10,
      z: (Math.random() - 0.5) * 10
    };
  }

  update(deltaTime, gestureScale = 1.0, shouldReset = false, hasGesture = false) {
    // 确保所有必要的对象都存在
    if (!this.particles || !this.particleGeometry) {
      if (Math.random() < 0.01) {
        console.warn('[ParticleSystem] ⚠️ 粒子系统未初始化，跳过更新');
      }
      return;
    }
    
    // 确保几何体属性存在
    const positionAttr = this.particleGeometry.attributes.position;
    const colorAttr = this.particleGeometry.attributes.color;
    const sizeAttr = this.particleGeometry.attributes.size;
    
    if (!positionAttr || !positionAttr.array) {
      console.error('[ParticleSystem] ❌ position 属性不存在或无效');
      return;
    }
    if (!colorAttr || !colorAttr.array) {
      console.error('[ParticleSystem] ❌ color 属性不存在或无效');
      return;
    }
    if (!sizeAttr || !sizeAttr.array) {
      console.error('[ParticleSystem] ❌ size 属性不存在或无效');
      return;
    }

    // 处理重置逻辑
    if (shouldReset) {
      if (!this.isResetting) {
        this.isResetting = true;
        this.resetProgress = 0;
      }
      // 逐渐重置到原始形态
      this.resetProgress = Math.min(1, this.resetProgress + deltaTime * 0.5); // 2秒内完成重置
      
      if (this.resetProgress >= 1) {
        this.isResetting = false;
      }
    } else {
      // 如果有手势输入，停止重置
      if (this.isResetting) {
        this.isResetting = false;
        this.resetProgress = 0;
      }
    }

    // 平滑更新缩放（更快响应，提高灵敏度）
    const oldBaseScale = this.baseScale;
    this.baseScale += (gestureScale - this.baseScale) * 0.5; // 进一步提高响应速度到0.5，几乎实时
    this.targetScale = this.baseScale;
    
    // 调试：每次有手势时都输出（临时调试）
    if (hasGesture) {
      // 每10帧输出一次
      if (!this.debugFrameCount) this.debugFrameCount = 0;
      this.debugFrameCount++;
      if (this.debugFrameCount % 10 === 0) {
        console.log('[ParticleSystem] 🎨 缩放更新:', {
          gestureScale: gestureScale.toFixed(3),
          oldBaseScale: oldBaseScale.toFixed(3),
          newBaseScale: this.baseScale.toFixed(3),
          targetScale: this.targetScale.toFixed(3),
          hasGesture: hasGesture,
          scaleChange: Math.abs(this.targetScale - 1.0).toFixed(3),
          scaleChanged: Math.abs(this.baseScale - oldBaseScale) > 0.001
        });
      }
    }
    
    // 检测是否有手势输入（缩放明显偏离1.0，或者有手势检测）
    const hasActiveGesture = hasGesture || Math.abs(this.targetScale - 1.0) > 0.05;

    // 使用已验证的属性
    const positions = positionAttr.array;
    const colors = colorAttr.array;
    const sizes = sizeAttr.array;

    // 更新粒子大小（缩放时粒子也变大/变小）
    const baseSize = this.config.size || 0.02;
    const scaledSize = baseSize * this.targetScale;
    for (let i = 0; i < sizes.length; i++) {
      sizes[i] = scaledSize;
    }

    // 更新每个粒子的位置和颜色
    for (let i = 0; i < this.particlePositions.length; i++) {
      const i3 = i * 3;
      const pos = this.particlePositions[i];
      const vel = this.particleVelocities[i];
      const basePos = this.basePositions[i];
      const initialPos = this.initialPositions[i];
      const initialVel = this.initialVelocities[i];

      // 如果正在重置，平滑地回到初始位置和速度
      if (this.isResetting && this.resetProgress > 0) {
        const resetFactor = this.resetProgress;
        // 平滑插值到初始位置
        pos.x += (initialPos.x - pos.x) * resetFactor * deltaTime * 2;
        pos.y += (initialPos.y - pos.y) * resetFactor * deltaTime * 2;
        pos.z += (initialPos.z - pos.z) * resetFactor * deltaTime * 2;
        
        // 平滑插值到初始速度（重置时速度归零）
        vel.x *= (1 - resetFactor * deltaTime * 3);
        vel.y *= (1 - resetFactor * deltaTime * 3);
        vel.z *= (1 - resetFactor * deltaTime * 3);
      } else if (hasActiveGesture) {
        // 只有在有手势输入时才应用速度
        pos.x += vel.x * deltaTime;
        pos.y += vel.y * deltaTime;
        pos.z += vel.z * deltaTime;
        
        // 应用边界和重置逻辑
        if (this.config.updateFunction) {
          this.config.updateFunction(pos, vel, i, deltaTime, this.targetScale);
          // 如果位置被重置，也要更新基础位置
          if (Math.abs(pos.x - basePos.x) > 5 || Math.abs(pos.y - basePos.y) > 5 || Math.abs(pos.z - basePos.z) > 5) {
            this.basePositions[i].copy(pos);
          }
        }
      } else {
        // 没有手势时，逐渐减速到静止
        vel.x *= 0.95;
        vel.y *= 0.95;
        vel.z *= 0.95;
        
        // 如果速度已经很小，直接设为0
        if (Math.abs(vel.x) < 0.0001) vel.x = 0;
        if (Math.abs(vel.y) < 0.0001) vel.y = 0;
        if (Math.abs(vel.z) < 0.0001) vel.z = 0;
        
        // 仍然应用很小的位置更新（如果有速度）
        if (Math.abs(vel.x) > 0 || Math.abs(vel.y) > 0 || Math.abs(vel.z) > 0) {
          pos.x += vel.x * deltaTime;
          pos.y += vel.y * deltaTime;
          pos.z += vel.z * deltaTime;
        }
      }

      // 应用缩放：直接基于初始位置缩放，效果最明显
      // 这样粒子会从中心向外扩展或向内收缩
      const initialX = this.initialPositions[i].x;
      const initialY = this.initialPositions[i].y;
      const initialZ = this.initialPositions[i].z;
      
      // 直接缩放初始位置（相对于原点）
      // 确保缩放值有效
      const scale = isNaN(this.targetScale) || !isFinite(this.targetScale) ? 1.0 : this.targetScale;
      const finalX = initialX * scale;
      const finalY = initialY * scale;
      const finalZ = initialZ * scale;
      
      // 调试：第一个粒子输出缩放信息（降低频率）
      if (i === 0 && Math.random() < 0.01 && hasGesture) {
        console.log('[ParticleSystem] 📍 位置更新示例:', {
          initialX: initialX.toFixed(3),
          initialY: initialY.toFixed(3),
          scale: scale.toFixed(3),
          finalX: finalX.toFixed(3),
          finalY: finalY.toFixed(3),
          scaleChanged: Math.abs(scale - 1.0) > 0.01
        });
      }

      positions[i3] = finalX;
      positions[i3 + 1] = finalY;
      positions[i3 + 2] = finalZ;

      // 更新颜色（如果有颜色变化函数）
      if (this.config.colorUpdateFunction) {
        const newColor = this.config.colorUpdateFunction(i, pos, deltaTime);
        colors[i3] = newColor.r;
        colors[i3 + 1] = newColor.g;
        colors[i3 + 2] = newColor.b;
      } else {
        // 确保颜色保持不变（从存储的颜色中恢复）
        const storedColor = this.particleColors[i];
        if (storedColor) {
          colors[i3] = storedColor.r;
          colors[i3 + 1] = storedColor.g;
          colors[i3 + 2] = storedColor.b;
        }
      }
    }

    this.particleGeometry.attributes.position.needsUpdate = true;
    this.particleGeometry.attributes.color.needsUpdate = true;
    this.particleGeometry.attributes.size.needsUpdate = true;
  }

  dispose() {
    if (this.particles) {
      this.scene.remove(this.particles);
      this.particleGeometry.dispose();
      this.particleMaterial.dispose();
      this.particles = null;
      this.particleGeometry = null;
      this.particleMaterial = null;
      this.particlePositions = [];
      this.basePositions = [];
      this.initialPositions = [];
      this.initialVelocities = [];
      this.particleVelocities = [];
      this.particleColors = [];
      this.isResetting = false;
      this.resetProgress = 0;
    }
  }
}

