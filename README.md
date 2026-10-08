# fourierlin 的博客

使用 Hugo 标准版构建的中文个人博客，内容位于 Markdown 文件中，页面不依赖浏览器端应用框架。

## 本地工具

- Hugo **0.167.0 标准版**。
- Git。

Hugo 可从[对应官方版本](https://github.com/gohugoio/hugo/releases/tag/v0.167.0)取得；本地版本应与发布工作流使用的版本保持一致。

本机采用用户目录安装，不修改全局 PATH。在项目根目录中，可用 PowerShell 调用：

```powershell
$hugo = Join-Path $env:LOCALAPPDATA 'Programs\Hugo\0.167.0\hugo.exe'
& $hugo version
& $hugo server --baseURL http://localhost:1313/ --appendPort=false
```

浏览器打开 `http://localhost:1313/`；停止预览使用 `Ctrl+C`。如果 `hugo` 已经在 PATH 中，也可以直接使用 `hugo server`。

构建静态文件：

```powershell
& $hugo build
```

生成结果位于 `public/`。`public/`、`resources/` 与 `.hugo_build.lock` 不提交到 Git。

## 写作入口

- `hugo.toml`：站点名称和首页简介。
- `content/about/index.md`：关于页资料。
- `content/posts/<slug>/index.md`：一篇文章。
- `layouts/`、`static/css/site.css`：页面模板和阅读样式。

文章目录名使用小写英文、数字和连字符。目录名决定文章 URL；修改标题或正文时，保持目录名不变。

Markdown 文件以 YAML front matter 开头：

```yaml
---
title: "相机标定学习笔记"
date: "2026-10-08"
---
```

标题与有效日期都必须提供；缺失时构建失败，不以文件名或文件修改时间代替。日期用于显示和排序，未来日期也参与构建，并不是定时发布指令。关于页需要标题和正文，不需要文章日期。

## 图片与站内链接

图片与对应文章的 `index.md` 放在同一个目录中，正文使用相对路径，例如 `![说明](image.png)`。文件名大小写必须与实际文件一致，避免 Windows 本地可读、Linux 发布后失效。

站内页面链接使用内容路径，例如 `[关于](/about/)` 或 `[另一篇文章](/posts/another-post/)`。Hugo 内置链接和图片钩子负责生成实际地址，不在每篇文章里硬编码账号域名或仓库前缀。

## 子路径预览

即使正式站点使用账号根地址，也可以在本地模拟项目站点的仓库前缀：

```powershell
& $hugo server --port 1316 --baseURL http://localhost:1316/preview-blog/ --appendPort=false
```

打开 `http://localhost:1316/preview-blog/`，检查导航、文章直链、刷新、样式和图片。更换端口时，同时更改 `--port` 与 `--baseURL` 中的端口。

## 内容公开边界

只提交已确认可公开的内容。私密草稿、原始简历、联系方式和凭据不应因为便于调试而混入公开仓库；从工作区删除文件并不能删除已公开的提交历史。
