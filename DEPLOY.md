# GitHub Pages 部署指南

## 快速部署步骤

### 1. 初始化 Git 仓库（如果还没有）

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
```

### 2. 在 GitHub 上创建仓库

1. 登录 GitHub
2. 点击右上角的 "+" → "New repository"
3. 仓库名建议使用：`ModernPoetry_FinalPre`（或你喜欢的名字）
4. 设置为 Public（GitHub Pages 免费版需要 Public 仓库）
5. 不要初始化 README、.gitignore 或 license（我们已经有了）

### 3. 连接本地仓库到 GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

⚠️ **重要**：将 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替换为你的实际 GitHub 用户名和仓库名

### 4. 修改 base 路径

打开 `vite.config.js`，将第 6 行的 `repositoryName` 改为你的实际仓库名：

```javascript
const repositoryName = 'YOUR_REPO_NAME' // 改为你的仓库名
```

### 5. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 Settings → Pages
3. Source 选择 "GitHub Actions"
4. 保存设置

### 6. 推送代码触发部署

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

### 7. 查看部署状态

1. 在仓库页面点击 "Actions" 标签
2. 查看部署 workflow 的运行状态
3. 部署完成后，在 Settings → Pages 中可以看到网站地址
4. 通常地址为：`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 注意事项

- ⚠️ **Base 路径**：确保 `vite.config.js` 中的 `base` 路径与你的仓库名匹配
- ⚠️ **HTTPS**：GitHub Pages 自动使用 HTTPS，摄像头权限应该可以正常工作
- ⚠️ **分支名称**：如果主分支是 `master` 而不是 `main`，需要修改 `.github/workflows/deploy.yml` 中的分支名

## 故障排除

**页面空白？**
- 检查浏览器控制台是否有错误
- 确认 `base` 路径是否正确
- 检查 GitHub Actions 的构建日志

**摄像头无法访问？**
- GitHub Pages 使用 HTTPS，应该可以正常访问摄像头
- 确保浏览器允许摄像头权限
- 检查浏览器控制台是否有权限错误

**部署失败？**
- 检查 GitHub Actions 日志
- 确保所有依赖都正确安装
- 确保 `vite.config.js` 语法正确
