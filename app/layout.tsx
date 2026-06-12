import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://4newlife.top";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "4newlife.top | 信仰、AI、金融与极客工具导航",
  description:
    "4newlife.top 是一个轻量书签导航，整理信仰生活、市场量化、AI 生产力、电子工程硬件和极客工具等高频入口。",
  applicationName: "4newlife.top",
  authors: [{ name: "4newlife" }],
  creator: "4newlife",
  publisher: "4newlife",
  keywords: [
    "4newlife",
    "4newlife.top",
    "导航",
    "书签导航",
    "信仰生活",
    "圣经资源",
    "AI 工具",
    "AI 生产力",
    "量化交易",
    "电子工程",
    "极客工具",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "4newlife.top | 轻量书签导航",
    description:
      "整理信仰生活、市场量化、AI 生产力、电子工程硬件和极客工具的极简导航页。",
    url: siteUrl,
    siteName: "4newlife.top",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "4newlife.top | 轻量书签导航",
    description:
      "信仰生活、市场量化、AI 生产力、电子工程硬件和极客工具入口。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
