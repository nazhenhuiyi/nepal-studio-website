import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "所念成册 | 记忆书创作台",
  description:
    "所念成册把真实素材里的所念，整理成一本可送出的记忆书。让所思、所念、所忆，慢慢成册。",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
