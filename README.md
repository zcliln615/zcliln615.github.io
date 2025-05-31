# 我的个人博客

这是基于 [Astro Citrus](https://github.com/artemkutsan/astro-citrus) 主题搭建的个人博客，部署在 GitHub Pages 上。

## 🚀 功能特色

- ⚡️ **超快速度** - 基于 Astro 的静态站点生成
- 📱 **响应式设计** - 在各种设备上完美显示
- 🌙 **深色模式** - 支持明暗主题切换
- 🔍 **全文搜索** - 使用 Pagefind 实现的快速搜索
- 🏷️ **标签系统** - 方便的内容分类
- 📖 **阅读时间** - 自动计算文章阅读时间
- 📄 **RSS 订阅** - 支持 RSS/Atom 订阅
- 🎨 **代码高亮** - 使用 Shiki 的语法高亮
- 🖼️ **OG 图像** - 自动生成社交媒体分享图片

## 🛠️ 技术栈

- [Astro](https://astro.build/) - 静态站点生成器
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- [MDX](https://mdxjs.com/) - Markdown + JSX
- [Pagefind](https://pagefind.app/) - 静态搜索
- [GitHub Actions](https://github.com/features/actions) - 自动化部署

## 📁 项目结构

```
/
├── public/                 # 静态资源
├── src/
│   ├── components/        # Astro 组件
│   ├── content/          # 博客内容
│   │   ├── post/         # 博客文章
│   │   ├── note/         # 笔记
│   │   └── series/       # 系列文章
│   ├── layouts/          # 页面布局
│   ├── pages/            # 页面路由
│   ├── styles/           # 样式文件
│   └── utils/            # 工具函数
├── astro.config.ts       # Astro 配置
├── tailwind.config.ts    # Tailwind 配置
└── package.json
```

## 🚀 快速开始

### 本地开发

1. 克隆仓库：
```bash
git clone https://github.com/zcliln615/zcliln615.github.io.git
cd zcliln615.github.io
```

2. 安装依赖：
```bash
pnpm install
```

3. 启动开发服务器：
```bash
pnpm dev
```

4. 访问 `http://localhost:4321` 查看博客

### 部署到 GitHub Pages

本项目已配置 GitHub Actions 自动部署：

1. 将代码推送到 `main` 分支
2. GitHub Actions 会自动构建并部署到 GitHub Pages
3. 访问 `https://zcliln615.github.io` 查看部署的博客

## ✏️ 写作指南

### 创建新文章

在 `src/content/post/` 目录下创建新的 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
publishDate: "2025-01-31"
tags: ["标签1", "标签2"]
---

# 文章内容

这里写你的文章内容...
```

### 创建笔记

在 `src/content/note/` 目录下创建 Markdown 文件，格式类似文章。

### 支持的前置元数据

- `title` - 文章标题（必需）
- `description` - 文章描述
- `publishDate` - 发布日期（YYYY-MM-DD 格式）
- `updatedDate` - 更新日期
- `tags` - 标签数组
- `draft` - 是否为草稿（true/false）
- `series` - 系列文章 ID

## 🎨 自定义配置

### 站点配置

编辑 `src/site.config.ts` 来修改站点基本信息：

```typescript
export const siteConfig = {
  author: "您的姓名",
  title: "您的博客标题",
  description: "您的博客描述",
  lang: "zh-CN",
  // ...其他配置
};
```

### 菜单配置

在同一文件中修改 `menuLinks` 数组来自定义导航菜单。

## 📜 许可证

本项目基于 MIT 许可证开源。

## 🙏 致谢

感谢 [Artem Kutsan](https://github.com/artemkutsan) 创建的优秀 Astro Citrus 主题。
