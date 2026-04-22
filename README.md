<div align="center">

<img src="./docs/public/csustar.svg" alt="CSU Star Wiki Logo" width="200" />

# 🌟 中南维基 · CSU Star Wiki

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=1E90FF&center=true&vCenter=true&width=435&lines=Welcome+to+CSU+Star+Wiki;左家垅职业技术学校生存指南;Make+CSU+Great+Again)](https://git.io/typing-svg)

**面向全体中南学子的自救生存指南与专业科普百科**

_帮助 CSUer 最大化利益并减少内卷带来的烦恼_

[![Framework](https://img.shields.io/badge/框架-VitePress-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitepress.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=nodedotjs&logoColor=white)]()
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

</div>

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=1E90FF&height=80&section=header" />

## 目录

<div align="center">

[![简介](https://img.shields.io/badge/-简介-1E90FF?style=for-the-badge)](#简介)&nbsp;
[![特色内容](https://img.shields.io/badge/-特色内容-00BFFF?style=for-the-badge)](#特色内容)&nbsp;
[![技术栈](https://img.shields.io/badge/-技术栈-87CEFA?style=for-the-badge)](#技术栈)&nbsp;
[![项目结构](https://img.shields.io/badge/-项目结构-4682B4?style=for-the-badge)](#项目结构)

[![快速开始](https://img.shields.io/badge/-快速开始-1E90FF?style=for-the-badge)](#快速开始)&nbsp;
[![如何贡献](https://img.shields.io/badge/-如何贡献-00BFFF?style=for-the-badge)](#如何贡献)&nbsp;
[![联系我们](https://img.shields.io/badge/-联系我们-87CEFA?style=for-the-badge)](#联系我们)

</div>

## 简介

CSU Star Wiki（中南维基）是一个面向所有中南大学学生的开源知识库。从入学基础须知、选课避坑、绩点科研，到各大专业（涵盖安全工程、软件工程、临床医学等近百个专业）的详细介绍与指南，这里全方位收录了中南学子需要的生存攻略。

## 特色内容

| 板块           | 说明                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| **全方位指南** | 包含入学、选课、绩点、科研、竞赛、社团、社交恋爱，甚至“摸鱼”和“番外”篇 |
| **专业大百科** | 囊括中南大学绝大部分专业的详细介绍、培养方案解读与过来人经验分享       |
| **开源共建**   | 支持所有同学通过 GitHub 提交 PR，汇聚全校智慧，动态更新                |

## 技术栈

| 类别           | 技术                                                                                                                         |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **核心框架**   | ![VitePress](https://img.shields.io/badge/VitePress-646CFF?style=flat-square&logo=vite&logoColor=white)                      |
| **包管理器**   | ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)                                |
| **部署与存储** | ![Tencent COS](https://img.shields.io/badge/腾讯云COS-0052D9?style=flat-square&logo=tencentqq&logoColor=white) (Node.js SDK) |

## 项目结构

<details>
<summary><b>点击展开目录结构</b></summary>

```text
csu-star-wiki/
├── docs/
│   ├── index.md           # 站点主页配置
│   ├── compass/           # 生存指南（选课/绩点/竞赛/科研/社团等）
│   ├── major/             # 各大专业百科（近百个专业详情）
│   ├── introduction/      # wiki简介与团队成员
│   ├── data/              # 静态数据配置（如 majorList.ts）
│   └── public/            # 静态资源（包含 csustar.svg 等）
├── package.json           # 项目依赖与脚本
├── pnpm-lock.yaml         # pnpm 锁文件
├── upload-cos.js          # 腾讯云 COS 部署脚本
└── README.md
```

</details>

## 快速开始

> [!TIP]
> 推荐使用 `pnpm` 作为包管理器。

```bash
# 1. 安装依赖
pnpm install

# 2. 启动本地开发服务器
pnpm run dev

# 3. 构建静态站点
pnpm run build

# 4. 预览构建结果
pnpm run preview
```

## 如何贡献

我们非常欢迎且需要各位 CSUer 的贡献！无论是修正错别字，还是补充你的专业经历、摸鱼技巧、课程评价，都可以通过以下方式参与：

1. **Fork 本仓库** 到你的 GitHub 账号下
2. 在 `docs` 目录内**撰写/修改 Markdown 文档**
3. 提交并 **Push** 到你的仓库
4. 创建一个 **Pull Request (PR)**

如果你不熟悉 GitHub 的操作，也可以直接联系管理员邮箱（`csustar@foxmail.com`）进行内容更新。

## 联系我们

- **意见反馈/内容投稿**：可发送邮件至 `csustar@foxmail.com` 联系管理员。
- **加入共建**：欢迎访问 [贡献成员页面](./docs/introduction/team.md) 了解更多。

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=1E90FF&height=80&section=footer" />

<div align="center">

<sub>Made with ❤️ for all CSUers</sub>

<a href="#-中南维基--csu-star-wiki">
  <img src="https://img.shields.io/badge/Back_to_Top-1E90FF?style=for-the-badge" alt="Back to Top" />
</a>

</div>
