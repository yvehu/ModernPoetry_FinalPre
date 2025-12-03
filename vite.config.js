import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 如果仓库名不是 ModernPoetry_FinalPre，请修改 base 路径
// 例如：如果仓库名是 my-poetry-app，则 base: '/my-poetry-app/'
const repositoryName = 'ModernPoetry_FinalPre' // 请根据你的实际仓库名修改

export default defineConfig({
  plugins: [react()],
  base: `/${repositoryName}/`, // GitHub Pages 的 base 路径
  server: {
    port: 3000,
    open: true
  }
})

