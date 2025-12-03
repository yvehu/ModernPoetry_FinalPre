import React, { useState, useEffect, useRef } from 'react';
import SceneRenderer from './components/SceneRenderer';
import ControlPanel from './components/ControlPanel';
import FullscreenButton from './components/FullscreenButton';
import { GestureRecognizer } from './utils/GestureRecognizer';
import './App.css';

const App = () => {
  console.log('[App] 🎨 App 组件开始渲染');
  
  const scenes = ['spring', 'summer', 'autumn', 'winter'];
  const [currentScene, setCurrentScene] = useState('spring');
  const [gestureData, setGestureData] = useState({ scale: 1.0, handsDetected: false });
  const [cameraError, setCameraError] = useState(null);
  const [showCameraPreview, setShowCameraPreview] = useState(false); // 调试：显示摄像头预览
  const [mediaPipeStatus, setMediaPipeStatus] = useState('初始化中...');
  const videoRef = useRef(null);
  const gestureRecognizerRef = useRef(null);
  const currentSceneRef = useRef('spring');
  
  console.log('[App] ✅ App 组件状态初始化完成');

  useEffect(() => {
    // 初始化摄像头和手势识别
    const initGestureRecognition = async () => {
      // 添加错误边界，即使手势识别失败也不影响页面渲染
      try {
        console.log('[App] 🎬 开始初始化手势识别...');
        const video = document.createElement('video');
        video.autoplay = true;
        video.playsInline = true;
        video.style.display = 'none';
        video.style.position = 'fixed';
        video.style.top = '10px';
        video.style.left = '10px';
        video.style.width = '160px';
        video.style.height = '120px';
        video.style.border = '2px solid #4caf50';
        video.style.borderRadius = '8px';
        video.style.zIndex = '10000';
        video.style.opacity = '0'; // 默认隐藏，按 D 键显示
        video.style.pointerEvents = 'none';
        video.id = 'camera-preview';
        document.body.appendChild(video);
        videoRef.current = video;

        // Check if browser supports getUserMedia
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Your browser does not support camera access. Please use a modern browser (Chrome, Firefox, Safari, Edge).');
        }

        const stream = await navigator.mediaDevices.getUserMedia({
          video: { 
            width: 640, 
            height: 480,
            facingMode: 'user'
          }
        });

        video.srcObject = stream;
        
        // 等待视频元数据加载
        await new Promise((resolve, reject) => {
          video.onloadedmetadata = () => {
            console.log('[App] ✅ 视频元数据加载完成');
            console.log('[App] 视频尺寸:', video.videoWidth, 'x', video.videoHeight);
            resolve();
          };
          video.onerror = reject;
          setTimeout(() => reject(new Error('视频加载超时')), 5000);
        });
        
        await video.play();
        console.log('[App] ✅ 摄像头启动，视频流已连接');

        // Initialize gesture recognizer
        const recognizer = new GestureRecognizer((data) => {
          // 验证数据有效性
          if (!data || typeof data !== 'object') {
            console.warn('[App] ⚠️ 收到无效的手势数据:', data);
            return;
          }
          
          // 确保 scale 是有效数字
          if (data.scale !== undefined && (isNaN(data.scale) || !isFinite(data.scale))) {
            console.warn('[App] ⚠️ 无效的 scale 值:', data.scale);
            data.scale = 1.0;
          }
          
          // 总是输出手势数据（当检测到手时）- 提高频率
          if (data.handsDetected) {
            // 提高日志频率，确保能看到每次变化
            console.log('[App] ✅ 手势数据更新:', {
              scale: data.scale?.toFixed(3) || 'N/A',
              handsDetected: data.handsDetected,
              handDistance: data.handDistance?.toFixed(3) || 'N/A',
              scaleChange: Math.abs((data.scale || 1.0) - 1.0).toFixed(3),
              timestamp: new Date().toLocaleTimeString()
            });
          } else {
            // 没有检测到手时，偶尔输出
            if (Math.random() < 0.05) {
              console.log('[App] ⚠️ 未检测到手部，请将手放在摄像头前');
            }
          }
          
          // 强制更新状态
          setGestureData({ ...data });
        });

        console.log('[App] 正在初始化手势识别器...');
        setMediaPipeStatus('正在加载 MediaPipe 模型...');
        
        // 添加超时处理，避免 MediaPipe 加载卡住
        const initPromise = recognizer.initialize(video);
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('MediaPipe 初始化超时')), 10000)
        );
        
        try {
          await Promise.race([initPromise, timeoutPromise]);
          gestureRecognizerRef.current = recognizer;
          setMediaPipeStatus('✅ MediaPipe 已就绪');
          console.log('[App] ✅ 手势识别器初始化成功！');
          console.log('[App] 💡 提示：将手放在摄像头前，张开/合拢手掌来控制粒子');
          console.log('[App] 💡 调试：按 D 键切换摄像头预览显示');
        } catch (initError) {
          console.warn('[App] ⚠️ MediaPipe 初始化失败，但页面继续运行:', initError.message);
          setMediaPipeStatus('❌ MediaPipe 加载失败');
          // 不抛出错误，让页面继续运行
        }
      } catch (error) {
        console.error('[App] ❌ 手势识别初始化失败:', error);
        // Set error state to display to user
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          setCameraError('Camera permission denied. Please click the camera icon in the address bar to allow camera access.');
        } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
          setCameraError('Camera device not found. Please ensure a camera is connected.');
        } else {
          // 不显示 MediaPipe 加载错误，让页面继续运行
          console.warn('[App] ⚠️ MediaPipe 加载失败，但页面将继续运行（无手势控制）:', error.message || error.name);
          setMediaPipeStatus('❌ MediaPipe 加载失败');
          // 不设置 cameraError，让页面正常显示
        }
        // 如果摄像头不可用，仍然可以运行，只是没有手势控制
      }
    };

    // 延迟初始化手势识别，确保页面先渲染
    // 使用 try-catch 包裹，确保 MediaPipe 错误不会影响页面
    setTimeout(() => {
      // 使用独立的错误处理，确保不会影响 React 渲染
      (async () => {
        try {
          await initGestureRecognition();
        } catch (err) {
          // 静默处理错误，不影响页面
          console.warn('[App] ⚠️ 手势识别初始化失败（不影响页面）:', err.message);
          setMediaPipeStatus('❌ MediaPipe 不可用');
        }
      })();
    }, 3000); // 延迟3秒，确保页面完全渲染后再初始化 MediaPipe

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

  // 添加键盘快捷键：按 D 键切换摄像头预览
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'd' || e.key === 'D') {
        setShowCameraPreview(prev => {
          const newValue = !prev;
          if (videoRef.current) {
            videoRef.current.style.opacity = newValue ? '1' : '0';
            videoRef.current.style.display = newValue ? 'block' : 'none';
          }
          return newValue;
        });
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  console.log('[App] 🎨 开始渲染 JSX，当前场景:', currentScene);
  
  console.log('[App] 🎨 开始渲染 JSX，当前场景:', currentScene);
  
  // 添加一个简单的测试，确保至少能看到一些内容
  return (
    <div className="app-container" style={{ background: '#1a1a2e', minHeight: '100vh' }}>
      {/* 添加一个明显的测试文本，确保页面在渲染 */}
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
          <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>⚠️ Camera Error</p>
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
            Reload
          </button>
        </div>
      )}
      {!gestureData.handsDetected && !cameraError && (
        <div className="gesture-hint">
          <p>👋 Use hand gestures to control particles</p>
          <p>Open/close hands to scale particles</p>
          <p style={{ fontSize: '12px', marginTop: '10px', opacity: 0.8 }}>
            💡 First-time use requires camera permission
          </p>
        </div>
      )}
      {gestureData.handsDetected && (
        <div className="gesture-status">
          <p>✅ Gesture Detected | Scale: {gestureData.scale.toFixed(2)}</p>
          <p style={{ fontSize: '10px', marginTop: '4px', opacity: 0.8 }}>
            Open hand to zoom in, close hand to zoom out
          </p>
        </div>
      )}
      {/* 调试信息面板 */}
      <div style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '11px',
        zIndex: 9999,
        fontFamily: 'monospace',
        minWidth: '200px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px', borderBottom: '1px solid #555', paddingBottom: '4px' }}>
          🔍 Debug Info
        </div>
        <div style={{ marginBottom: '4px' }}>
          Gesture: <span style={{ color: gestureData.handsDetected ? '#4caf50' : '#f44336' }}>
            {gestureData.handsDetected ? '✅ Yes' : '❌ No'}
          </span>
        </div>
        <div style={{ marginBottom: '4px' }}>
          Scale: <span style={{ 
            color: Math.abs(gestureData.scale - 1.0) > 0.1 ? '#ff9800' : '#4caf50',
            fontWeight: Math.abs(gestureData.scale - 1.0) > 0.1 ? 'bold' : 'normal'
          }}>
            {gestureData.scale.toFixed(3)}
            {Math.abs(gestureData.scale - 1.0) > 0.1 && ' ⚡'}
          </span>
        </div>
        <div style={{ marginBottom: '4px' }}>
          Camera: <span style={{ color: cameraError ? '#f44336' : '#4caf50' }}>
            {cameraError ? '❌ Error' : '✅ OK'}
          </span>
        </div>
        <div style={{ marginBottom: '4px', fontSize: '10px', opacity: 0.8 }}>
          MediaPipe: <span style={{ color: '#4caf50' }}>{mediaPipeStatus}</span>
        </div>
        <div style={{ marginTop: '8px', padding: '4px', background: 'rgba(76,175,80,0.2)', borderRadius: '4px', fontSize: '9px', opacity: 0.8 }}>
          💡 按 D 键切换摄像头预览
        </div>
        {cameraError && (
          <div style={{ marginTop: '8px', padding: '4px', background: 'rgba(244,67,54,0.2)', borderRadius: '4px', fontSize: '10px' }}>
            {cameraError}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

