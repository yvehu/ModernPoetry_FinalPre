import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 如果仓库名不是 ModernPoetry_FinalPre，请修改 base 路径
// 例如：如果仓库名是 my-poetry-app，则 base: '/my-poetry-app/'
const repositoryName = 'ModernPoetry_FinalPre' // 请根据你的实际仓库名修改

export default defineConfig({
  plugins: [react()],
  // 开发环境使用根路径，生产环境使用仓库路径
  base: process.env.NODE_ENV === 'production' ? `/${repositoryName}/` : '/',
  server: {
    port: 3000,
    open: true,
    headers: {
      // 允许 MediaPipe 使用 eval（仅开发环境）
      'Content-Security-Policy': "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://cdn.jsdelivr.net; object-src 'none';"
    }
  },
  build: {
    // 确保 MediaPipe 不会被 tree-shaking
    rollupOptions: {
      output: {
        // 确保 MediaPipe 相关代码不被优化掉
        manualChunks: undefined
      }
    },
    // 增加 chunk 大小限制
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    // 确保 MediaPipe 被正确预构建
    include: ['@mediapipe/hands', '@mediapipe/camera_utils']
  }
})

