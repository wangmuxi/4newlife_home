import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4newlife.top | 精致导航",
  description: "4newlife.top 的个人生态、圣经资源与 AI 生产力导航主页。",
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
