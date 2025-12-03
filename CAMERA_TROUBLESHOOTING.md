# 摄像头/手势识别故障排除

## GitHub Pages 上手势识别不工作的常见原因

### 1. 🔒 摄像头权限被拒绝

**症状**：页面加载后没有请求摄像头权限，或者手势识别不工作

**解决方法**：
1. 点击浏览器地址栏左侧的 🔒 或 🚫 图标
2. 找到"摄像头"或"Camera"设置
3. 选择"允许"或"Allow"
4. 刷新页面

**不同浏览器的位置**：
- **Chrome/Edge**: 地址栏左侧的锁图标 → 摄像头 → 允许
- **Firefox**: 地址栏左侧的锁图标 → 权限 → 摄像头 → 允许
- **Safari**: Safari → 设置 → 网站 → 摄像头 → 允许

### 2. 🌐 HTTPS 要求

GitHub Pages 使用 HTTPS，这是好的（摄像头权限需要 HTTPS）。但如果：
- 网站显示"不安全"：检查 GitHub Pages 设置
- 混合内容警告：确保所有资源都使用 HTTPS

### 3. 📱 设备不支持

**检查清单**：
- ✅ 是否有摄像头设备（笔记本内置摄像头或外接摄像头）
- ✅ 摄像头是否被其他应用占用
- ✅ 浏览器是否支持 WebRTC（现代浏览器都支持）

### 4. 🔍 浏览器控制台错误

**如何检查**：
1. 按 `F12` 或右键 → "检查" → "Console"
2. 查看是否有红色错误信息
3. 常见错误：
   - `NotAllowedError`: 权限被拒绝
   - `NotFoundError`: 未找到摄像头
   - `MediaPipe error`: MediaPipe 加载失败

### 5. 🛠️ 调试步骤

**步骤 1：检查权限**
```javascript
// 在浏览器控制台运行
navigator.permissions.query({ name: 'camera' }).then(result => {
  console.log('Camera permission:', result.state);
});
```

**步骤 2：测试摄像头访问**
```javascript
// 在浏览器控制台运行
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    console.log('✅ 摄像头访问成功');
    stream.getTracks().forEach(track => track.stop());
  })
  .catch(error => {
    console.error('❌ 摄像头访问失败:', error);
  });
```

**步骤 3：检查 MediaPipe 加载**
- 打开浏览器开发者工具 → Network 标签
- 刷新页面
- 查找 `@mediapipe/hands` 相关的请求
- 确认所有请求都返回 200 状态码

### 6. 🔄 强制刷新

如果权限已允许但仍不工作：
1. 清除浏览器缓存
2. 硬刷新：`Ctrl+Shift+R` (Windows) 或 `Cmd+Shift+R` (Mac)
3. 或者完全关闭浏览器后重新打开

### 7. 📋 浏览器兼容性

**推荐浏览器**：
- ✅ Chrome/Edge (最新版)
- ✅ Firefox (最新版)
- ✅ Safari 14+ (Mac/iOS)

**不推荐**：
- ❌ 旧版浏览器
- ❌ 某些移动浏览器可能不支持

### 8. 🎯 快速测试

访问网站后：
1. 应该看到提示："👋 Use hand gestures to control particles"
2. 浏览器应该弹出摄像头权限请求
3. 允许后，应该看到："手势检测中 | Scale: 1.00"
4. 如果看到红色错误提示，按照提示操作

### 9. 💡 如果仍然不工作

**检查清单**：
- [ ] 摄像头权限已允许
- [ ] 浏览器控制台没有错误
- [ ] 摄像头没有被其他应用占用
- [ ] 使用的是现代浏览器
- [ ] 网站使用 HTTPS（GitHub Pages 自动提供）

**如果以上都正常但仍不工作**：
- 尝试在其他浏览器中打开
- 检查防火墙/安全软件是否阻止了摄像头访问
- 检查系统摄像头权限设置

## 本地 vs GitHub Pages 的区别

**本地开发** (`npm run dev`):
- 通常使用 `http://localhost`
- 某些浏览器对 localhost 的权限更宽松

**GitHub Pages** (`https://yvehu.github.io/...`):
- 使用 HTTPS（这是好的）
- 需要用户明确授权摄像头权限
- 首次访问需要用户点击"允许"

## 联系支持

如果问题仍然存在，请提供：
1. 浏览器类型和版本
2. 浏览器控制台的错误信息
3. 操作系统信息
4. 是否看到权限请求弹窗

