# 明日依在 - 个人博客与作品集

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

> 一个专注于嵌入式开发的技术博客，记录学习心得与项目经验

## 🌟 关于项目

这是一个基于 Astro.js 构建的现代化个人博客与作品集网站。网站采用了简洁优雅的设计，专注于技术内容的展示和分享。主要用于记录嵌入式开发的学习心得、项目经验，以及对技术和生活的思考。
>项目在claude sonnet 4的帮助下完成，旨在提供一个高性能、易于维护的个人网站。

### 🎨 设计特色

- **中文优化** - 完整的中文本地化设计，适合中文内容展示
- **主题切换** - 支持明暗主题无缝切换
- **响应式设计** - 在所有设备上都有完美的展示效果

## ✨ 功能特性

- 🚀 **极致性能** - 基于 Astro.js 构建，加载速度极快
- 📝 **功能完善的博客** - 支持技术文章写作，代码高亮显示
- 🎨 **现代化UI** - 使用 Tailwind CSS 打造的精美响应式设计
- 🌙 **深色模式** - 完整的明暗主题支持
- 📱 **移动优先** - 从手机到桌面的完美适配
- 🔍 **SEO优化** - 结构化数据、meta标签，搜索引擎友好
- 🏷️ **标签系统** - 支持博客文章和项目的标签分类
- 📊 **内容管理** - 使用 Astro 内容集合进行有序管理
- 🖼️ **项目展示** - 展示作品集，包含图片、描述和技术标签
- 💝 **支持功能** - 集成支付宝和微信打赏功能

## 🛠️ 技术栈

- **[Astro.js](https://astro.build/)** - 现代静态站点生成器
- **[React.js](https://reactjs.org/)** - 交互式组件开发
- **[Tailwind CSS](https://tailwindcss.com/)** - 原子化CSS框架
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全的JavaScript
- **[MDX](https://mdxjs.com/)** - 支持JSX的Markdown
- **[Framer Motion](https://www.framer.com/motion/)** - 流畅的动画效果

## 📋 环境要求

- [Node.js](https://nodejs.org/) (v20 或更高版本)
- [npm](https://www.npmjs.com/) 或 [yarn](https://yarnpkg.com/) 或 [bun](https://bun.sh/)
- [Git](https://git-scm.com/)

## ⚙️ 安装与运行

1. **克隆仓库**
   ```bash
   git clone https://github.com/zcliln615/zcliln615.github.io.git
   cd zcliln615.github.io
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或者
   yarn install
   # 或者
   bun install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   # 或者
   yarn dev
   # 或者
   bun dev
   ```

4. **访问网站**
   在浏览器中打开 `http://localhost:3000` 查看网站

## 📁 项目结构

```
portfolio/
├── public/                    # 静态资源
│   ├── favicon.svg           # 网站图标 
│   ├── project_pic/          # 项目图片
│   └── qrcodes/              # 支付二维码
├── src/
│   ├── components/           # UI组件
│   │   ├── react/            # React组件
│   │   └── ui/               # UI基础组件
│   ├── content/              # 内容集合
│   │   ├── blog/             # 博客文章
│   │   └── projects/         # 项目数据
│   ├── layouts/              # 页面布局
│   ├── lib/                  # 工具函数
│   ├── pages/                # 页面路由
│   └── styles/               # 全局样式
├── astro.config.ts           # Astro 配置
├── tailwind.config.cjs       # Tailwind CSS 配置
└── tsconfig.json             # TypeScript 配置
```

## 🚀 使用指南

### 📝 创建博客文章

1. 在 `src/content/blog` 目录下创建新的文件夹
2. 在文件夹中创建 `index.md` 或 `index.mdx` 文件
3. 添加frontmatter头部信息：

```mdx
---
title: "文章标题"
description: "文章简介"
date: 2025-06-06
tags: ["标签1", "标签2"]
authors: ["zcliln615"]
---

# 你的文章内容

在这里写你的技术文章...
```

### 🖼️ 添加项目

1. 在 `src/content/projects` 目录下创建 `.md` 文件
2. 添加项目信息：

```md
---
name: '项目名称'
description: '项目描述'
tags: ['技术栈1', '技术栈2']
image: '../../../public/project_pic/your-image.jpg'
link: 'https://github.com/your-username/your-project'
startDate: '2025-06-06'
---

## 项目详情

项目的详细介绍...
```

### 🎨 自定义配置

编辑 `src/consts.ts` 文件来自定义网站信息：

```typescript
export const SITE: Site = {
  title: '你的网站标题',
  description: '你的网站描述',
  href: 'https://your-domain.com',
  author: '你的名字',
  locale: 'zh-CN',
  location: '你的位置',
}
```

## 🌐 部署

### GitHub Pages 部署

1. **推送代码到GitHub仓库**
2. **启用GitHub Actions**
3. **配置GitHub Pages**
   - 在仓库设置中选择 "GitHub Actions" 作为源
4. **访问网站**
   - `https://yourusername.github.io`

### 其他部署选项

- **Vercel**: 连接GitHub仓库，自动部署
- **Netlify**: 拖拽 `dist` 文件夹或连接Git仓库
- **自托管**: 使用 `npm run build` 生成静态文件

## 🔧 构建命令

```bash
# 开发模式
npm run dev

# 类型检查
astro check

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码格式化
npm run prettier
```

## 🎯 定制修改

这个项目基于开源模板进行了以下定制：

- ✅ **中文本地化** - 完整的中文界面和内容支持
- ✅ **标志更改** - 自定义网站标志和图标
- ✅ **嵌入式主题** - 专注于嵌入式开发内容
- ✅ **支付功能** - 集成支付宝和微信打赏
- ✅ **性能优化** - 针对中文内容的加载优化
- ✅ **SEO优化** - 中文搜索引擎优化

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests 来改进这个项目！

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢原作者 [David Cojocaru](https://github.com/cojocaru-david) 提供的优秀模板基础。

---

<div align="center">

**如果这个项目对你有帮助，请给个 ⭐️ 支持一下！**
