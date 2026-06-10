import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4newlife.top | 精简导航",
  description: "4newlife.top 的个人生态、圣经资源与 AI 生产力导航主页。",
  other: {
    "google-adsense-account": "ca-pub-3174507268362978",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3174507268362978"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
