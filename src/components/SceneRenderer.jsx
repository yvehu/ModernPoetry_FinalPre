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
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // 创建场景
    sceneRef.current = new THREE.Scene();
    
    // 创建相机
    cameraRef.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current.position.set(0, 2, 8);
    cameraRef.current.lookAt(0, 0, 0);

    // 创建渲染器
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    rendererRef.current.setSize(width, height);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(rendererRef.current.domElement);

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
    if (!sceneRef.current) return;

    // 清理旧的粒子系统
    if (particleSystemRef.current) {
      particleSystemRef.current.dispose();
      particleSystemRef.current = null;
    }

    // 获取当前场景配置
    const config = sceneConfigs[currentScene];
    if (!config) return;

    // 设置背景色
    if (rendererRef.current) {
      rendererRef.current.setClearColor(config.backgroundColor, 1);
    }

    // 创建新的粒子系统
    particleSystemRef.current = new ParticleSystem(sceneRef.current, config.particleOptions);
    particleSystemRef.current.createParticles();

    lastTimeRef.current = Date.now();
  }, [currentScene]);

  // 动画循环
  useEffect(() => {
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      const currentTime = Date.now();
      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // 转换为秒
      lastTimeRef.current = currentTime;

      // 更新粒子系统
      if (particleSystemRef.current) {
        particleSystemRef.current.update(
          deltaTime, 
          gestureScale || 1.0, 
          gestureData?.shouldReset || false,
          gestureData?.handsDetected || false // 传递是否有手势检测
        );
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
  }, [gestureScale]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default SceneRenderer;

