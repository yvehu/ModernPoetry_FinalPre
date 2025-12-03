# 手势识别问题排查指南

## 🔍 快速诊断步骤

### 1. 查看右上角调试面板

刷新页面后，右上角会显示一个调试信息面板，显示：
- ✅/❌ 手势检测状态
- 缩放值
- 摄像头状态

### 2. 打开浏览器控制台（F12）

查看 Console 标签页，应该看到以下日志：

**正常情况应该看到：**
```
[App] 摄像头已启动，视频流已连接
[App] 手势识别器初始化成功
[MediaPipe] 检测到手部: 1  (当你把手放在摄像头前时)
[Gesture] 检测到 1 只手, Scale: 1.00
[App] 手势数据更新: {scale: 1.0, handsDetected: true, ...}
```

**如果有错误，会看到：**
```
Error initializing gesture recognition: [错误信息]
```

### 3. 常见问题及解决方法

#### ❌ 问题1: 摄像头权限被拒绝

**症状：**
- 右上角显示"摄像头: ❌ 错误"
- 控制台显示 `NotAllowedError` 或 `PermissionDeniedError`

**解决方法：**
1. 点击浏览器地址栏左侧的锁图标 🔒
2. 找到"摄像头"设置
3. 选择"允许"
4. 刷新页面

#### ❌ 问题2: 未找到摄像头

**症状：**
- 右上角显示"摄像头: ❌ 错误"
- 控制台显示 `NotFoundError`

**解决方法：**
1. 检查摄像头是否已连接
2. 检查系统设置中的摄像头权限
3. 确保摄像头没有被其他应用占用

#### ❌ 问题3: MediaPipe 加载失败

**症状：**
- 控制台显示 MediaPipe 相关错误
- 网络请求失败（404 或 CORS 错误）

**解决方法：**
1. 检查网络连接
2. 清除浏览器缓存
3. 尝试使用其他浏览器

#### ❌ 问题4: 手势检测不到

**症状：**
- 摄像头正常（✅）
- 但手势检测一直是 ❌

**可能原因：**
- 光线不足
- 背景太复杂
- 手部不在摄像头视野内
- 手部移动太快

**解决方法：**
1. 确保光线充足
2. 手部完全在摄像头视野内
3. 保持手部稳定
4. 尝试张开/合拢手掌，动作要明显

### 4. 测试手势识别

**正确的手势：**
- **张开手掌**：手指分开，手掌张开 → 应该看到 Scale 值增大（> 1.0）
- **合拢手掌**：手指并拢，手掌合拢 → 应该看到 Scale 值减小（< 1.0）

**调试技巧：**
1. 把手放在摄像头前
2. 观察右上角调试面板的"手势检测"是否变为 ✅
3. 观察"缩放值"是否在变化
4. 观察控制台是否有 `[Gesture] 检测到 X 只手` 的日志

### 5. 手动测试摄像头

在浏览器控制台运行：

```javascript
// 测试摄像头访问
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    console.log('✅ 摄像头访问成功');
    const video = document.createElement('video');
    video.srcObject = stream;
    video.play();
    document.body.appendChild(video);
    // 5秒后停止
    setTimeout(() => {
      stream.getTracks().forEach(track => track.stop());
      document.body.removeChild(video);
    }, 5000);
  })
  .catch(error => {
    console.error('❌ 摄像头访问失败:', error);
  });
```

如果这个测试失败，说明是摄像头权限或设备问题。

### 6. 检查 MediaPipe 是否加载

在浏览器控制台运行：

```javascript
// 检查 MediaPipe 是否可用
fetch('https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js')
  .then(r => r.text())
  .then(() => console.log('✅ MediaPipe CDN 可访问'))
  .catch(e => console.error('❌ MediaPipe CDN 不可访问:', e));
```

### 7. 完整检查清单

- [ ] 浏览器控制台没有红色错误
- [ ] 看到 `[App] 手势识别器初始化成功` 日志
- [ ] 右上角显示"摄像头: ✅ 正常"
- [ ] 把手放在摄像头前，看到 `[MediaPipe] 检测到手部` 日志
- [ ] 右上角"手势检测"变为 ✅
- [ ] "缩放值"随着手势变化

### 8. 如果仍然不工作

请提供以下信息：
1. 浏览器类型和版本
2. 操作系统
3. 控制台的完整错误信息（截图）
4. 右上角调试面板显示的内容
5. 是否看到摄像头权限请求弹窗

## 🎯 快速修复命令

如果问题持续，尝试：

```bash
# 1. 停止当前服务器 (Ctrl+C)
# 2. 清除缓存并重新启动
rm -rf node_modules/.vite
npm run dev
```

## 💡 演示备用方案

如果手势识别在演示时出现问题：
1. 可以提前录制演示视频
2. 使用屏幕录制软件实时演示
3. 准备截图作为备用展示
4. 解释技术实现，即使手势暂时不工作

