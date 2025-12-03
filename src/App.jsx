import React, { useState, useEffect, useRef } from 'react';
import SceneRenderer from './components/SceneRenderer';
import ControlPanel from './components/ControlPanel';
import FullscreenButton from './components/FullscreenButton';
import { GestureRecognizer } from './utils/GestureRecognizer';
import './App.css';

const App = () => {
  const scenes = ['spring', 'summer', 'autumn', 'winter'];
  const [currentScene, setCurrentScene] = useState('spring');
  const [gestureData, setGestureData] = useState({ scale: 1.0, handsDetected: false });
  const videoRef = useRef(null);
  const gestureRecognizerRef = useRef(null);
  const currentSceneRef = useRef('spring');

  useEffect(() => {
    // 初始化摄像头和手势识别
    const initGestureRecognition = async () => {
      try {
        const video = document.createElement('video');
        video.autoplay = true;
        video.playsInline = true;
        video.style.display = 'none';
        document.body.appendChild(video);
        videoRef.current = video;

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            width: 640, 
            height: 480,
            facingMode: 'user'
          }
        });

        video.srcObject = stream;
        await video.play();

        // 初始化手势识别器
        const recognizer = new GestureRecognizer((data) => {
          setGestureData(data);
        });

        await recognizer.initialize(video);
        gestureRecognizerRef.current = recognizer;
      } catch (error) {
        console.error('Error initializing gesture recognition:', error);
        // 如果摄像头不可用，仍然可以运行，只是没有手势控制
      }
    };

    initGestureRecognition();

    return () => {
      // 清理
      if (gestureRecognizerRef.current) {
        gestureRecognizerRef.current.stop();
      }
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
        if (videoRef.current.parentNode) {
          videoRef.current.parentNode.removeChild(videoRef.current);
        }
      }
    };
  }, []);

  const handleSceneChange = (sceneName) => {
    setCurrentScene(sceneName);
    currentSceneRef.current = sceneName;
  };

  // 同步currentSceneRef
  useEffect(() => {
    currentSceneRef.current = currentScene;
  }, [currentScene]);

  return (
    <div className="app-container">
      <SceneRenderer 
        currentScene={currentScene} 
        gestureScale={gestureData.scale}
        gestureData={gestureData}
      />
      <ControlPanel 
        currentScene={currentScene} 
        onSceneChange={handleSceneChange}
      />
      <FullscreenButton />
      {!gestureData.handsDetected && (
        <div className="gesture-hint">
          <p>👋 Use hand gestures to control particles</p>
          <p>Open/close hands to scale particles</p>
        </div>
      )}
      {gestureData.handsDetected && (
        <div className="gesture-status">
          <p>手势检测中 | Scale: {gestureData.scale.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default App;

