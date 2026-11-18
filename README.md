# 韩贺同 · 个人作品集网站

产品经理 / 数据分析方向的个人作品集单页应用。暗色系、克制有科技感，PC 端为主，版心 1700px。

## 技术栈

- React 18 + Vite 5
- 纯手写组件与样式，无 UI 组件库
- 内联 SVG 图标、CSS 动效、IntersectionObserver 滚动揭示

## 目录结构

```
portfolio-website
├─ index.html
├─ package.json
├─ vite.config.js
├─ public
│  ├─ favicon.svg
│  ├─ videos/hero.mp4        封面视频背景
│  └─ images/                各板块氛围图
└─ src
   ├─ main.jsx
   ├─ App.jsx
   ├─ data/content.js        全站文案、证书、项目数据（改内容只改这里）
   ├─ components/            10 个组件
   └─ styles/                global / components / components2 三个样式文件
```

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端提示的地址（默认 http://localhost:5173/ ）。

## 修改内容

绝大多数文字、数据都在 `src/data/content.js`：

- `profile`：姓名、身份、联系方式、核心课程、介绍、数据卡片
- `skillLevels` / `knowledge`：专业技能与专业知识，页面合并为 12 张卡片
- `certificates`：证书名称、颁发机构、年份
- `projects`：项目标题、分类、描述、标签、封面图路径

## 替换素材

- 封面视频：替换 `public/videos/hero.mp4`（保持文件名即可）
- 人物图：把图片放入 `public/images/`，将 `profile.portrait` 改为路径，如 `'/images/avatar.jpg'`
- 项目封面：把作品图放入 `public/images/`，将对应项目的 `image` 改为路径；为 `null` 时显示抽象占位，不会裂图
- 板块氛围图：替换 `public/images/` 下的 about / skills / projects / contact 图片

## 证书年份说明

证书年份目前统一暂填 2025，请按证书实际取得时间在 `content.js` 的 `certificates` 中调整。

## 打包与部署

```bash
npm run build
```

构建产物在 `dist/`，可直接上传到 GitHub Pages、Gitee Pages、Vercel、Netlify 等静态托管平台。

## 备注

- 全站口径只做产品经理 / 数据分析，不出现设计师、品牌、视觉相关身份描述
- 流程绘制工具统一写为 ProcessOn
- 旧工程完整备份在同级目录 `portfolio-website-backup`，需要回滚可直接使用
