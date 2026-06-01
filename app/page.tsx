import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import HeroSceneWrapper from "@/components/HeroSceneWrapper";
import { getAllPosts } from "@/lib/posts";

const categories = [
  {
    slug: "global-systems",
    title: "Global Healthcare Systems",
    description:
      "Comparing the NHS, Medicare, universal models, and market-driven care across the world.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentBg: "bg-blue-50",
    accentText: "text-blue-900",
    accentBorder: "border-blue-100",
    dot: "bg-blue-900",
  },
  {
    slug: "human-biology",
    title: "Human Biology",
    description:
      "Deep dives into anatomy, physiology, immunology, and the marvellous machinery of life.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21C12 21 5 14.5 5 9a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    accentBg: "bg-emerald-50",
    accentText: "text-emerald-800",
    accentBorder: "border-emerald-100",
    dot: "bg-emerald-600",
  },
  {
    slug: "medical-ethics",
    title: "Medical Ethics",
    description:
      "Navigating autonomy, consent, justice, and the profound moral questions medicine poses.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22V2M8 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentBg: "bg-violet-50",
    accentText: "text-violet-800",
    accentBorder: "border-violet-100",
    dot: "bg-violet-500",
  },
  {
    slug: "health-politics",
    title: "Health & Politics",
    description:
      "How power, policy, inequality, and ideology shape who gets care and who doesn't.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    accentBg: "bg-rose-50",
    accentText: "text-rose-800",
    accentBorder: "border-rose-100",
    dot: "bg-rose-500",
  },
  {
    slug: "research-review",
    title: "Research Review",
    description:
      "Breaking down landmark studies, clinical trials, and breakthroughs from the frontiers of medicine.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 20l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    accentBg: "bg-amber-50",
    accentText: "text-amber-800",
    accentBorder: "border-amber-100",
    dot: "bg-amber-500",
  },
];

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />
        {/* Gradient washes */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 40%, rgba(167,139,250,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-1/3 h-64 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 20% 100%, rgba(30,58,138,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-violet-500">
              <span className="w-6 h-px bg-violet-400" />
              Medicine · Biology · Ethics · Policy
            </span>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
              Examining<br />
              Medicine<br />
              <span className="text-gradient">Through Every<br />Lens.</span>
            </h1>

            <p className="font-body text-lg text-slate-500 leading-relaxed max-w-md">
              A personal blog exploring healthcare systems, human biology,
              medical ethics, health policy, and the latest research — written
              by a Cambridge Medicine aspirant.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/blog"
                className="font-body font-semibold px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-200 text-sm"
              >
                Read the Blog
              </Link>
              <Link
                href="/about"
                className="font-body font-semibold px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-full hover:border-blue-900 hover:text-blue-900 transition-colors duration-200 text-sm"
              >
                About Me
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 pt-4">
              {[
                { n: "5", label: "Topic areas" },
                { n: `${recentPosts.length}`, label: "Published posts" },
                { n: "∞", label: "Curiosity" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-slate-900">{n}</p>
                  <p className="font-body text-xs text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — 3D scene */}
          <div className="h-[420px] md:h-[540px] lg:h-[600px] w-full">
            <HeroSceneWrapper />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 animate-bounce">
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 space-y-3">
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-violet-500">
              What we explore
            </span>
            <h2 className="font-display text-4xl font-bold text-slate-900">
              Five lenses. One mission.
            </h2>
            <p className="font-body text-slate-500 max-w-lg">
              Medicine isn&apos;t just biology — it&apos;s politics, philosophy, culture, and
              science all at once. Explore each dimension.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className="group block"
              >
                <div
                  className={`h-full bg-white border ${cat.accentBorder} rounded-2xl p-6 card-hover flex flex-col gap-4`}
                >
                  <div
                    className={`w-11 h-11 ${cat.accentBg} ${cat.accentText} rounded-xl flex items-center justify-center`}
                  >
                    {cat.icon}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="font-body text-sm text-slate-500 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className={`flex items-center gap-2 ${cat.accentText} font-body text-sm font-medium`}>
                    <span className={`w-2 h-2 rounded-full ${cat.dot}`} />
                    Explore
                    <svg className="w-3.5 h-3.5 ml-auto" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Posts ── */}
      {recentPosts.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-end justify-between mb-12">
              <div className="space-y-2">
                <span className="font-body text-xs font-semibold tracking-widest uppercase text-violet-500">
                  Recent writes
                </span>
                <h2 className="font-display text-4xl font-bold text-slate-900">
                  Latest from the lens
                </h2>
              </div>
              <Link
                href="/blog"
                className="font-body text-sm font-medium text-blue-900 hover:text-violet-600 transition-colors hidden sm:flex items-center gap-1"
              >
                View all posts
                <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            <div className="mt-10 text-center sm:hidden">
              <Link
                href="/blog"
                className="font-body text-sm font-medium text-blue-900 underline underline-offset-4"
              >
                View all posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Quote / Mission ── */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <div className="w-10 h-px bg-violet-400 mx-auto" />
          <blockquote className="font-display text-3xl md:text-4xl font-medium italic leading-snug">
            &ldquo;The good physician treats the disease; the great physician
            treats the patient who has the disease.&rdquo;
          </blockquote>
          <p className="font-body text-blue-300 text-sm">— William Osler</p>
          <p className="font-body text-blue-200 text-base max-w-xl mx-auto leading-relaxed">
            This blog exists to build a deeper understanding of medicine before
            medical school — and to share that journey with whoever is curious
            enough to follow along.
          </p>
          <div className="pt-4">
            <Link
              href="/about"
              className="inline-block font-body text-sm font-semibold px-6 py-3 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-colors duration-200"
            >
              Read my story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
