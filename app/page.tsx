import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CalendarDays,
  Feather,
  Globe2,
  Library,
  MessageCircleQuestion,
  PenLine,
  Sparkles,
  Zap,
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  displayUrl: string;
  description: string;
  icon: LucideIcon;
};

type NavSection = {
  title: string;
  eyebrow: string;
  description: string;
  accent: string;
  icon: LucideIcon;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    title: "我的生态",
    eyebrow: "Personal ecosystem",
    description: "连接写作、灵修与日程安排的常用入口。",
    accent: "34, 211, 238",
    icon: Sparkles,
    items: [
      {
        title: "Blog",
        href: "https://blog.4newlife.top",
        displayUrl: "blog.4newlife.top",
        description: "沉淀文章、思考与长期内容的个人博客。",
        icon: PenLine,
      },
      {
        title: "Verse",
        href: "https://verse.4newlife.top",
        displayUrl: "verse.4newlife.top",
        description: "每日经文、默想与灵修节奏的安静空间。",
        icon: Feather,
      },
      {
        title: "Meet Schedule",
        href: "https://quickhelpguide.com/meetschedule",
        displayUrl: "quickhelpguide.com/meetschedule",
        description: "快速查看会面安排与协作时间。",
        icon: CalendarDays,
      },
    ],
  },
  {
    title: "圣经资源",
    eyebrow: "Bible resources",
    description: "阅读、查经与中文基督教电子书资源集合。",
    accent: "167, 139, 250",
    icon: BookOpen,
    items: [
      {
        title: "微读圣经",
        href: "https://wd.bible",
        displayUrl: "wd.bible",
        description: "清爽易用的中文圣经阅读与研经工具。",
        icon: BookOpen,
      },
      {
        title: "BibleGateway",
        href: "https://www.biblegateway.com",
        displayUrl: "biblegateway.com",
        description: "多版本、多语言经文检索与对照阅读。",
        icon: Globe2,
      },
      {
        title: "微读书城",
        href: "https://wdbook.com",
        displayUrl: "wdbook.com",
        description: "中文基督教电子书、注释与神学阅读平台。",
        icon: Library,
      },
    ],
  },
  {
    title: "AI生产力",
    eyebrow: "AI productivity",
    description: "模型实验、统一调用与开源社区的创作工具箱。",
    accent: "45, 212, 191",
    icon: BrainCircuit,
    items: [
      {
        title: "Google AI Studio",
        href: "https://aistudio.google.com",
        displayUrl: "aistudio.google.com",
        description: "探索 Gemini 模型、提示词与多模态原型。",
        icon: Sparkles,
      },
      {
        title: "OpenRouter",
        href: "https://openrouter.ai",
        displayUrl: "openrouter.ai",
        description: "统一接入多家模型，快速比较生成效果。",
        icon: Zap,
      },
      {
        title: "Hugging Face",
        href: "https://huggingface.co",
        displayUrl: "huggingface.co",
        description: "发现模型、数据集与开源 AI 应用社区。",
        icon: MessageCircleQuestion,
      },
    ],
  },
];

function accentStyle(accent: string): CSSProperties & { "--accent-rgb": string } {
  return {
    "--accent-rgb": accent,
  };
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-8 text-slate-100 sm:px-8 sm:py-10 lg:px-10">
      <div className="aurora-field" />

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-96 w-96 rounded-full bg-fuchsia-400/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col justify-center">
        <header className="glass-panel relative mb-7 overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/60 to-transparent" />
          <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
                <Sparkles className="h-4 w-4" />
                4newlife.top navigation
              </div>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
                4newlife.top
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
                一个深色系毛玻璃导航主页，聚合个人生态、圣经资源与 AI
                生产力入口，在静谧的流光背景中快速抵达常用工具。
              </p>
            </div>

            <div className="grid max-w-sm grid-cols-3 gap-3 text-center lg:w-80">
              {sections.map((section) => (
                <a
                  key={section.title}
                  href={`#${section.title}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1]"
                >
                  <section.icon className="mx-auto h-5 w-5 text-cyan-100 transition duration-300 group-hover:scale-110" />
                  <span className="mt-2 block text-xs font-medium text-slate-300">
                    {section.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <div
              id={section.title}
              key={section.title}
              className="glass-panel rounded-[1.75rem] p-4 sm:p-5"
              style={accentStyle(section.accent)}
            >
              <div className="mb-5 flex items-start gap-4 px-1 pt-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 shadow-lg shadow-black/20">
                  <section.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {section.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-card group rounded-[1.35rem] border border-white/10 p-[1px] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
                    style={accentStyle(section.accent)}
                  >
                    <div className="relative flex min-h-36 flex-col justify-between rounded-[1.28rem] p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 transition duration-300 group-hover:scale-105 group-hover:bg-white/[0.12]">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-slate-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="mt-7">
                        <h3 className="text-xl font-semibold tracking-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {item.description}
                        </p>
                        <p className="mt-4 truncate text-sm font-medium text-cyan-100/90">
                          {item.displayUrl}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-7 flex flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>Designed for quiet focus and fast access.</p>
          <p className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            4newlife.top
          </p>
        </footer>
      </div>
    </main>
  );
}
