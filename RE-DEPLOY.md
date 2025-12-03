# 重新部署指南

## 方法一：推送代码自动部署（推荐）

当你修改了代码后，只需要：

```bash
cd /Users/yve/Desktop/ModernPoetry_FinalPre

# 1. 查看更改
git status

# 2. 添加更改的文件
git add .

# 3. 提交更改
git commit -m "描述你的更改"

# 4. 推送到 GitHub（会自动触发部署）
git push
```

推送后，GitHub Actions 会自动：
- 检测到代码更新
- 开始构建项目
- 部署到 GitHub Pages

## 方法二：手动触发部署

如果自动部署没有触发，可以手动触发：

1. 打开 GitHub 仓库：https://github.com/yvehu/ModernPoetry_FinalPre
2. 点击 "Actions" 标签页
3. 在左侧选择 "Deploy to GitHub Pages" workflow
4. 点击右上角的 "Run workflow" 按钮
5. 选择分支（main）并点击 "Run workflow"

## 检查部署状态

1. **查看部署进度**：
   - 进入仓库的 "Actions" 标签页
   - 查看最新的 workflow run
   - 点击查看详细日志

2. **查看部署结果**：
   - 进入 Settings → Pages
   - 查看 "Your site is live at" 下的地址
   - 通常地址：https://yvehu.github.io/ModernPoetry_FinalPre/

3. **常见状态**：
   - ✅ 绿色勾号 = 部署成功
   - ⏳ 黄色圆圈 = 正在部署
   - ❌ 红色叉号 = 部署失败（点击查看错误日志）

## 故障排除

**部署失败？**
- 检查 Actions 日志中的错误信息
- 确保 `vite.config.js` 中的 `base` 路径正确
- 确保所有依赖都正确安装

**网站没有更新？**
- GitHub Pages 部署通常需要 1-5 分钟
- 清除浏览器缓存后刷新
- 检查部署是否成功完成

**需要强制重新部署？**
- 可以做一个空提交来触发部署：
  ```bash
  git commit --allow-empty -m "Trigger deployment"
  git push
  ```

