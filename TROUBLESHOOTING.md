# GitHub Actions 故障排除

## 问题：GitHub Actions 没有动静

### 检查清单

#### 1. ✅ 确认 Workflow 文件存在
- 文件路径：`.github/workflows/deploy.yml`
- 已在仓库中：✅

#### 2. ⚠️ 检查 GitHub Pages 设置

**重要**：必须在 GitHub 仓库设置中启用 GitHub Actions！

步骤：
1. 打开仓库：https://github.com/yvehu/ModernPoetry_FinalPre
2. 点击 **Settings** → **Pages**
3. 在 "Source" 部分，选择 **"GitHub Actions"**（不是 "Deploy from a branch"）
4. 点击 **Save**

#### 3. 🔍 检查 Actions 标签页

1. 打开仓库：https://github.com/yvehu/ModernPoetry_FinalPre
2. 点击 **Actions** 标签页
3. 查看是否有 workflow runs

**如果没有看到任何 workflow runs：**
- 说明 GitHub Actions 可能被禁用
- 检查仓库 Settings → Actions → General
- 确保 "Allow all actions and reusable workflows" 已启用

#### 4. 🚀 手动触发部署

如果自动触发不工作，可以手动触发：

1. 打开仓库的 **Actions** 标签页
2. 在左侧选择 **"Deploy to GitHub Pages"**
3. 点击右上角的 **"Run workflow"** 按钮
4. 选择分支（main）
5. 点击 **"Run workflow"**

#### 5. 📋 检查 Workflow 权限

确保 workflow 文件中有正确的权限设置：

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

（已在 deploy.yml 中配置 ✅）

### 常见问题

**Q: 为什么推送代码后 Actions 没有自动运行？**
A: 
- 检查 GitHub Pages 是否设置为使用 GitHub Actions
- 检查仓库 Settings → Actions → General 是否允许 Actions

**Q: 如何查看部署日志？**
A:
- 进入 Actions 标签页
- 点击最新的 workflow run
- 查看详细的构建和部署日志

**Q: 部署失败怎么办？**
A:
- 查看 Actions 日志中的错误信息
- 常见错误：
  - 构建失败：检查 `npm run build` 是否成功
  - 权限错误：检查 Pages 设置
  - 路径错误：检查 `vite.config.js` 中的 `base` 路径

### 快速修复命令

```bash
# 1. 确保所有文件都已提交
git add .
git commit -m "Ensure all files are committed"

# 2. 推送代码
git push

# 3. 如果还是没有触发，手动触发空提交
git commit --allow-empty -m "Trigger deployment"
git push
```

### 验证部署

部署成功后：
1. 等待 1-5 分钟
2. 进入 Settings → Pages
3. 查看 "Your site is live at" 下的地址
4. 访问网站确认部署成功

