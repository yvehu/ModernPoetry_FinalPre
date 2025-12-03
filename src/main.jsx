import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

console.log('[main.jsx] 🚀 开始加载应用...');
console.log('[main.jsx] ✅ 所有模块导入成功');

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('[main.jsx] ❌ 找不到 #root 元素！');
  // 添加一个后备显示
  document.body.innerHTML += '<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: red; font-size: 24px; z-index: 99999; background: rgba(0,0,0,0.9); padding: 20px; border-radius: 10px;">找不到 #root 元素！</div>';
} else {
  console.log('[main.jsx] ✅ 找到 #root 元素');
  try {
    const root = ReactDOM.createRoot(rootElement);
    console.log('[main.jsx] ✅ React root 创建成功');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('[main.jsx] ✅ App 组件已渲染');
  } catch (error) {
    console.error('[main.jsx] ❌ 渲染失败:', error);
    // 添加错误显示
    rootElement.innerHTML = `
      <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); color: red; font-size: 24px; z-index: 99999; background: rgba(0,0,0,0.9); padding: 20px; border-radius: 10px;">
        <p>❌ React 渲染失败</p>
        <p style="font-size: 14px; margin-top: 10px;">${error.message}</p>
        <p style="font-size: 12px; margin-top: 10px; color: #999;">请查看控制台获取详细信息</p>
      </div>
    `;
  }
}

