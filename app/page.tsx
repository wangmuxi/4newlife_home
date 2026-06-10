"use client";

import { useMemo, useState } from "react";

type NavItem = {
  name: string;
  url: string;
};

type NavigationCategory = {
  id: string;
  tab: string;
  category: string;
  label: string;
  description: string;
  items: NavItem[];
};

const navigationData = [
  {
    id: "faith",
    tab: "信仰",
    category: "信仰与生活",
    label: "Faith & Life",
    description: "核心生态与日常灵修",
    items: [
      { name: "个人博客 | Blog", url: "https://blog.4newlife.top" },
      { name: "每日灵修 | Verse", url: "https://verse.4newlife.top" },
      {
        name: "会面安排 | Meet Schedule",
        url: "https://quickhelpguide.com/meetschedule",
      },
      { name: "微读圣经", url: "https://wd.bible" },
      { name: "BibleGateway", url: "https://www.biblegateway.com" },
      { name: "微读书城", url: "https://wdbook.com" },
      { name: "耶書亞研經中心 BMY", url: "https://bmy.org.hk" },
      { name: "圣光圣经地理", url: "http://biblegeography.holylight.org.tw" },
      {
        name: "儿童主日学 | Trueway Kids",
        url: "https://truewaykids.com/zh/chinese",
      },
      { name: "福光儿童主日学", url: "http://www.ccfellow.org" },
    ],
  },
  {
    id: "quant",
    tab: "金融",
    category: "市场与量化",
    label: "Quant & Trading",
    description: "看盘和分析数据的工具箱",
    items: [
      { name: "MacroMicro 財經M平方", url: "https://www.macromicro.me" },
      {
        name: "美聯儲加息預期 | CME FedWatch",
        url: "https://www.cmegroup.com",
      },
      {
        name: "原油基本面与走势 | MarketWatch",
        url: "https://www.marketwatch.com",
      },
      { name: "黄金白银比率 | GOLD.co.uk", url: "https://www.gold.co.uk" },
      {
        name: "铜金比率 | Longtermtrends",
        url: "https://www.longtermtrends.net",
      },
      { name: "Crypto Fear & Greed / Bubbles", url: "https://cryptobubbles.net" },
    ],
  },
  {
    id: "ai",
    tab: "AI",
    category: "AI 生产力与创作",
    label: "AI Tools",
    description: "大模型平台与多媒体创作",
    items: [
      { name: "Google AI Studio", url: "https://aistudio.google.com" },
      { name: "OpenRouter / Claude AI", url: "https://openrouter.ai" },
      { name: "Coze / Hugging Face", url: "https://huggingface.co" },
      {
        name: "Kokoro TTS 语音合成",
        url: "https://github.com/NeuralFalconYT",
      },
      { name: "Lexica 艺术图库", url: "https://lexica.art" },
      {
        name: "Midjourney 提示词生成器",
        url: "https://promptomania.com",
      },
      { name: "FlowGPT & Godmode 智能体", url: "https://godmode.space" },
    ],
  },
  {
    id: "hardware",
    tab: "硬件",
    category: "电子工程与硬件",
    label: "Tech & Infrastructure",
    description: "硬件开发与云基础设施",
    items: [
      { name: "嘉立创阻抗计算", url: "https://tools.jlc.com" },
      {
        name: "时钟抖动 Jitter 深度理解",
        url: "https://www.cytech.com",
      },
      {
        name: "MATLAB SerDes CDR 恢复计算",
        url: "https://ww2.mathworks.cn",
      },
      {
        name: "Jetson Linux Archive & Camera Wiki",
        url: "https://developer.nvidia.com",
      },
      { name: "Oracle 云免费套餐 & IDCS 登录", url: "https://www.oracle.com" },
    ],
  },
  {
    id: "geek",
    tab: "极客",
    category: "极客生活与工具",
    label: "Geek Life & Tools",
    description: "自建服务与网络测试工具",
    items: [
      {
        name: "Homekit 双路 PWM 灯控板",
        url: "https://x.jlc.com",
      },
      {
        name: "ESXI 安装黑群晖图文教程",
        url: "https://kzpu.com",
      },
      {
        name: "Open Port Check & 端口扫描",
        url: "https://www.yougetsignal.com",
      },
      {
        name: "InfiniCLOUD 云存储文件浏览器",
        url: "https://miya.teracloud.jp",
      },
      { name: "Dillinger 在线 Markdown 编辑器", url: "https://dillinger.io" },
    ],
  },
] satisfies NavigationCategory[];

function getDisplayUrl(url: string) {
  const parsed = new URL(url);
  return `${parsed.hostname}${parsed.pathname === "/" ? "" : parsed.pathname}`;
}

export default function Home() {
  const [activeCategoryId, setActiveCategoryId] = useState(navigationData[0].id);

  const activeCategory = useMemo(
    () =>
      navigationData.find((category) => category.id === activeCategoryId) ??
      navigationData[0],
    [activeCategoryId],
  );

  return (
    <main className="min-h-screen bg-[#F9F9FB] px-5 py-8 text-gray-900 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            4newlife.top
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            轻量书签
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            用极简文字阵列整理高频入口，只显示当前分类，保持页面安静。
          </p>
        </header>

        <nav
          aria-label="书签分类"
          className="mb-8 flex gap-6 overflow-x-auto border-b border-gray-200 text-sm"
        >
          {navigationData.map((category) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveCategoryId(category.id)}
                className={`-mb-px border-b py-3 transition-colors duration-150 ${
                  isActive
                    ? "border-gray-900 text-gray-900"
                    : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {category.tab}
              </button>
            );
          })}
        </nav>

        <section aria-labelledby="active-category-heading">
          <div className="mb-5 flex flex-col gap-1 border-b border-gray-100 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-gray-400">{activeCategory.label}</p>
              <h2
                id="active-category-heading"
                className="mt-1 text-lg font-semibold text-gray-900"
              >
                {activeCategory.category}
              </h2>
            </div>
            <p className="text-sm text-gray-500">{activeCategory.description}</p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {activeCategory.items.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-gray-100 bg-white p-4 transition-colors duration-150 hover:border-gray-300 hover:bg-gray-50"
              >
                <h3 className="truncate text-sm font-medium text-gray-800">
                  {item.name}
                </h3>
                <p className="mt-1 truncate text-xs text-gray-400">
                  {getDisplayUrl(item.url)}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-10 border-t border-gray-200 pt-5 text-xs text-gray-400">
          4newlife.top
        </footer>
      </div>
    </main>
  );
}
