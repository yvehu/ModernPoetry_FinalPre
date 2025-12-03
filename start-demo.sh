#!/bin/bash

# 本地演示启动脚本

echo "🌸 现代诗歌3D粒子系统 - 本地演示"
echo "=================================="
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在项目根目录运行此脚本"
    exit 1
fi

# 检查 node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 检测到依赖未安装，正在安装..."
    npm install
    echo ""
fi

# 检查端口是否被占用
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  端口 3000 已被占用"
    echo "   正在尝试使用其他端口..."
    echo ""
fi

echo "🚀 启动开发服务器..."
echo ""
echo "📝 提示："
echo "   - 服务器启动后会自动打开浏览器"
echo "   - 地址通常是: http://localhost:3000"
echo "   - 记得允许摄像头权限"
echo "   - 按 Ctrl+C 停止服务器"
echo ""
echo "=================================="
echo ""

# 启动开发服务器
npm run dev

