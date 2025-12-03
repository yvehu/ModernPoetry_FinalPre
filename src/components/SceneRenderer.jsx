import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { ParticleSystem } from '../utils/ParticleSystem';
import { springConfig } from '../scenes/SpringScene';
import { summerConfig } from '../scenes/SummerScene';
import { autumnConfig } from '../scenes/AutumnScene';
import { winterConfig } from '../scenes/WinterScene';

const sceneConfigs = {
  spring: springConfig,
  summer: summerConfig,
  autumn: autumnConfig,
  winter: winterConfig
};

const SceneRenderer = ({ currentScene, gestureScale, gestureData }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particleSystemRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(Date.now());

  useEffect(() => {
    console.log('[SceneRenderer] 🎬 useEffect 被调用，mountRef.current:', !!mountRef.current);
    
    if (!mountRef.current) {
      console.warn('[SceneRenderer] ⚠️ mountRef.current 不存在，等待 DOM 准备...');
      // 等待 DOM 准备
      const timer = setTimeout(() => {
        if (mountRef.current) {
          console.log('[SceneRenderer] ✅ DOM 已准备，重新初始化');
          // 重新触发初始化（通过重新设置一个状态或直接调用）
        } else {
          console.error('[SceneRenderer] ❌ DOM 仍未准备，无法初始化');
        }
      }, 1000);
      return () => clearTimeout(timer);
    }

    console.log('[SceneRenderer] 🚀 开始初始化 Three.js 场景');

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    console.log('[SceneRenderer] 📐 容器尺寸:', { width, height });
    
    if (width === 0 || height === 0) {
      console.warn('[SceneRenderer] ⚠️ 容器尺寸为0，使用窗口尺寸');
      // 使用窗口尺寸作为后备
      const fallbackWidth = window.innerWidth;
      const fallbackHeight = window.innerHeight;
      console.log('[SceneRenderer] 📐 使用窗口尺寸:', { width: fallbackWidth, height: fallbackHeight });
    }

    // 创建场景
    sceneRef.current = new THREE.Scene();
    
    // 确保宽度和高度有效
    const validWidth = width > 0 ? width : window.innerWidth;
    const validHeight = height > 0 ? height : window.innerHeight;
    const aspect = validHeight > 0 ? validWidth / validHeight : 16 / 9; // 默认16:9
    
    console.log('[SceneRenderer] 📐 使用尺寸:', { width: validWidth, height: validHeight, aspect });
    
    // 创建相机
    cameraRef.current = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
    cameraRef.current.position.set(0, 2, 8);
    cameraRef.current.lookAt(0, 0, 0);

    // 创建渲染器
    try {
      rendererRef.current = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true
      });
      
      // 确保宽度和高度有效
      const validWidth = width > 0 ? width : window.innerWidth;
      const validHeight = height > 0 ? height : window.innerHeight;
      
      rendererRef.current.setSize(validWidth, validHeight);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); // 限制像素比
      mountRef.current.appendChild(rendererRef.current.domElement);
      console.log('[SceneRenderer] ✅ WebGL 渲染器创建成功');
    } catch (error) {
      console.error('[SceneRenderer] ❌ WebGL 渲染器创建失败:', error);
      throw error;
    }

    // 添加环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);

    // 添加方向光
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    // 处理窗口大小变化
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (particleSystemRef.current) {
        particleSystemRef.current.dispose();
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  // 场景切换
  useEffect(() => {
    if (!sceneRef.current) {
      console.warn('[SceneRenderer] ⚠️ 场景未初始化，无法创建粒子系统');
      return;
    }

    console.log('[SceneRenderer] 🎨 切换场景:', currentScene);

    // 清理旧的粒子系统
    if (particleSystemRef.current) {
      console.log('[SceneRenderer] 🗑️ 清理旧粒子系统');
      particleSystemRef.current.dispose();
      particleSystemRef.current = null;
    }

    // 获取当前场景配置
    const config = sceneConfigs[currentScene];
    if (!config) {
      console.error('[SceneRenderer] ❌ 未找到场景配置:', currentScene);
      return;
    }

    console.log('[SceneRenderer] ✅ 场景配置加载成功:', {
      scene: currentScene,
      particleCount: config.particleOptions?.count || 'N/A',
      backgroundColor: config.backgroundColor?.getHexString() || 'N/A'
    });

    // 设置背景色
    if (rendererRef.current) {
      rendererRef.current.setClearColor(config.backgroundColor, 1);
      console.log('[SceneRenderer] 🎨 背景色已设置');
    }

    // 创建新的粒子系统
    try {
      console.log('[SceneRenderer] 🎨 开始创建粒子系统...');
      particleSystemRef.current = new ParticleSystem(sceneRef.current, config.particleOptions);
      console.log('[SceneRenderer] ✅ ParticleSystem 实例创建成功');
      
      particleSystemRef.current.createParticles();
      console.log('[SceneRenderer] ✅ 粒子创建完成');
      lastTimeRef.current = Date.now();
    } catch (error) {
      console.error('[SceneRenderer] ❌ 粒子系统创建失败:', error);
      console.error('[SceneRenderer] 错误详情:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      // 不抛出错误，让页面继续运行
      particleSystemRef.current = null;
    }
  }, [currentScene]);

  // 使用 ref 存储最新的手势数据，确保动画循环能访问最新值
  const gestureScaleRef = useRef(gestureScale || 1.0);
  const gestureDataRef = useRef(gestureData);

  useEffect(() => {
    gestureScaleRef.current = gestureScale || 1.0;
    gestureDataRef.current = gestureData;
  }, [gestureScale, gestureData]);

  // 动画循环 - 不依赖 gestureScale/gestureData，使用 ref 访问最新值
  useEffect(() => {
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // 转换为秒
      lastTimeRef.current = currentTime;

      // 从 ref 获取最新的手势数据
      const currentScale = gestureScaleRef.current || 1.0;
      const currentGestureData = gestureDataRef.current || {};
      const hasHands = currentGestureData.handsDetected || false;
      
      // 更新粒子系统
      if (particleSystemRef.current) {
        try {
          // 确保传递最新的手势数据
          particleSystemRef.current.update(
            deltaTime, 
            currentScale, 
            currentGestureData.shouldReset || false,
            hasHands // 传递是否有手势检测
          );
        } catch (error) {
          console.error('[SceneRenderer] ❌ 粒子系统更新失败:', error);
          // 不阻止渲染继续
        }
      }

      // 渲染场景
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // 空依赖数组，动画循环只运行一次

  console.log('[SceneRenderer] 🎨 渲染 div 元素');
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        background: '#000',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      {/* 添加一个后备显示，确保能看到内容 */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        fontSize: '14px',
        zIndex: 1000,
        background: 'rgba(0,0,0,0.7)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        Three.js 场景容器
      </div>
    </div>
  );
};

export default SceneRenderer;

