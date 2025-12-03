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
  const [cameraError, setCameraError] = useState(null);
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

        // 检查浏览器是否支持 getUserMedia
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('您的浏览器不支持摄像头访问。请使用现代浏览器（Chrome、Firefox、Safari、Edge）。');
        }

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
        // 设置错误状态，显示给用户
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          setCameraError('摄像头权限被拒绝。请点击地址栏的摄像头图标，允许访问摄像头。');
        } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
          setCameraError('未找到摄像头设备。请确保已连接摄像头。');
        } else {
          setCameraError(`摄像头初始化失败: ${error.message || error.name}`);
        }
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
      {cameraError && (
        <div className="camera-error" style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 0, 0, 0.9)',
          color: 'white',
          padding: '20px',
          borderRadius: '10px',
          zIndex: 10000,
          maxWidth: '400px',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>⚠️ 摄像头错误</p>
          <p style={{ margin: 0, fontSize: '14px' }}>{cameraError}</p>
          <button 
            onClick={() => {
              setCameraError(null);
              window.location.reload();
            }}
            style={{
              marginTop: '15px',
              padding: '8px 16px',
              background: 'white',
              color: '#d32f2f',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            重新加载
          </button>
        </div>
      )}
      {!gestureData.handsDetected && !cameraError && (
        <div className="gesture-hint">
          <p>👋 Use hand gestures to control particles</p>
          <p>Open/close hands to scale particles</p>
          <p style={{ fontSize: '12px', marginTop: '10px', opacity: 0.8 }}>
            💡 首次使用需要允许摄像头权限
          </p>
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

