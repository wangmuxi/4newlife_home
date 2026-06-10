type NavItem = {
  title: string;
  href: string;
  displayUrl: string;
};

type NavSection = {
  title: string;
  description: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    title: "我的生态",
    description: "连接写作、灵修与日程安排的常用入口。",
    items: [
      {
        title: "Blog",
        href: "https://blog.4newlife.top",
        displayUrl: "blog.4newlife.top",
      },
      {
        title: "Verse",
        href: "https://verse.4newlife.top",
        displayUrl: "verse.4newlife.top",
      },
      {
        title: "Meet Schedule",
        href: "https://quickhelpguide.com/meetschedule",
        displayUrl: "quickhelpguide.com/meetschedule",
      },
    ],
  },
  {
    title: "圣经资源",
    description: "阅读、查经与中文基督教电子书资源集合。",
    items: [
      {
        title: "微读圣经",
        href: "https://wd.bible",
        displayUrl: "wd.bible",
      },
      {
        title: "BibleGateway",
        href: "https://www.biblegateway.com",
        displayUrl: "biblegateway.com",
      },
      {
        title: "微读书城",
        href: "https://wdbook.com",
        displayUrl: "wdbook.com",
      },
    ],
  },
  {
    title: "AI生产力",
    description: "模型实验、统一调用与开源社区的创作工具箱。",
    items: [
      {
        title: "Google AI Studio",
        href: "https://aistudio.google.com",
        displayUrl: "aistudio.google.com",
      },
      {
        title: "OpenRouter",
        href: "https://openrouter.ai",
        displayUrl: "openrouter.ai",
      },
      {
        title: "Hugging Face",
        href: "https://huggingface.co",
        displayUrl: "huggingface.co",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9FB] px-5 py-10 text-gray-900 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            4newlife.top
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            精简导航
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500">
            聚合个人生态、圣经资源与 AI 生产力入口，保持安静、清晰、快速抵达。
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              <div className="mb-4">
                <h2 className="text-base font-semibold text-gray-900">
                  {section.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {section.description}
                </p>
              </div>

              <div className="grid gap-2">
                {section.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-lg border border-gray-200 bg-white p-4 transition-colors duration-150 hover:border-gray-300 hover:bg-gray-50"
                  >
                    <h3 className="text-sm font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-1 truncate text-xs text-gray-400">
                      {item.displayUrl}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-10 border-t border-gray-200 pt-5 text-xs text-gray-400">
          4newlife.top
        </footer>
      </div>
    </main>
  );
}
