import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "所念成册 | 把真实的日子，做成可以翻开的作品",
    template: "%s | 所念成册",
  },
  description:
    "所念成册是 macOS 上的 AI 私人纪念作品创作台。和 AI 对话，把真实素材整理成可翻阅的 HTML 书或可以继续编排的图片作品。",
  keywords: [
    "所念成册",
    "Nepal Studio",
    "记忆书",
    "AI 创作",
    "HTML 书",
    "私人纪念作品",
  ],
  openGraph: {
    title: "所念成册 | 让所念有归处",
    description:
      "把照片、聊天、票根和脑海里的片段，做成一本可以翻开的书，或一组可以继续编排的图片作品。",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/books/june-into-nature/assets/illustrations/cover-lake.webp",
        width: 1086,
        height: 1448,
        alt: "《六月，向自然退一步》封面插画",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "所念成册 | 让所念有归处",
    description: "把真实的日子，做成可以翻开的作品。",
    images: [
      "/books/june-into-nature/assets/illustrations/cover-lake.webp",
    ],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3eddf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
