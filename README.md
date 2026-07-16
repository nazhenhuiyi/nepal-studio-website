# 所念成册 / Nepal Studio 2.0 Website

所念成册对外官网项目，使用 Next.js App Router、TypeScript、Tailwind CSS 和 pnpm 搭建。
网站介绍 Nepal Studio 2.0 的两种作品形态：可翻阅的 HTML 书与可继续编排的图片画布。

## Development

```bash
pnpm dev
```

默认本地地址：

```text
http://localhost:3000
```

## Scripts

```bash
pnpm lint
pnpm build
```

## Brand Direction

- 主品牌：所念成册
- 副标题：AI 私人纪念作品创作台
- 主 slogan：让所思、所念、所忆，慢慢成册。
- 短版：让所念有归处。
- 核心：把真实素材整理成可翻阅的 HTML 书，或可以继续编排的图片作品。
- 记忆真实性：AI 可以整理、提问、建议和生成制作辅助物，但不能替用户编造私人经历。
- 对外文案少讲技术参数，优先讲真实素材、认真整理、作品可继续加工和本地归属。

## Featured Book

官网当前只展示 1 个由所念成册应用发布出的静态书籍产物。进入首页时书籍会以弹层直接打开，只提供关闭、上一页和下一页；关闭后显示 Nepal Studio 2.0 的简短介绍，并可再次翻开：

对应的发布产物静态地址：

- `/books/june-into-nature/`：六月，向自然退一步

该目录是应用通过 `publishProjectPackage` 管线导出的完整发布包，包含阅读器、页面数据、插画、字体和相应授权文件。
