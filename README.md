# 所念成册 Website

所念成册对外官网项目，使用 Next.js App Router、TypeScript、Tailwind CSS 和 pnpm 搭建。

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
- 副标题：记忆书创作台
- 主 slogan：让所思、所念、所忆，慢慢成册。
- 短版：让所念有归处。
- 核心：把真实素材里的所念，整理成一本可送出的记忆书。
- 对外文案少讲技术和流程，优先讲真实素材、认真整理、被看见和可送出的心意。

## Published Books

官网展示了 3 个由所念成册应用发布出的静态记忆书产物。首页只展示故事场景，点击后进入整屏预览页：

- `/preview/birthday-light`：给小满的生日小书
- `/preview/graduation-farewell`：给小满的三年
- `/preview/ordinary-days-answer`：普通日子的答案

对应的发布产物静态地址：

- `/books/birthday-light/`：给小满的生日小书
- `/books/graduation-farewell/`：给小满的三年
- `/books/ordinary-days-answer/`：普通日子的答案

这些产物来自本机 `~/.nepal-studio/projects/` 下的三个项目，并通过应用自己的 `publishProjectPackage` 管线导出。
