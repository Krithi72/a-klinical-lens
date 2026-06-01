import Link from "next/link";

const explore = [
  { href: "/blog?category=global-systems", label: "Global Systems" },
  { href: "/blog?category=human-biology", label: "Human Biology" },
  { href: "/blog?category=medical-ethics", label: "Medical Ethics" },
  { href: "/blog?category=health-politics", label: "Health & Politics" },
  { href: "/blog?category=research-review", label: "Research Review" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-violet-400 flex items-center justify-center text-white text-sm font-bold font-body">
                K
              </div>
              <span className="font-display font-semibold text-base text-white">
                A Klinical Lens
              </span>
            </div>
            <p className="font-body text-sm text-slate-400 leading-relaxed max-w-xs">
              Exploring medicine through biology, ethics, politics, and science
              — written by a Cambridge Medicine aspirant.
            </p>
            <div className="h-px w-12 bg-violet-400/50" />
            <p className="font-body text-xs text-slate-500 italic">
              "Science without conscience is the ruin of the soul."
            </p>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-body text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              Topics
            </h4>
            <ul className="space-y-3">
              {explore.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-slate-400 hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-body text-xs font-semibold text-slate-400 uppercase tracking-widest mb-5">
              The Author
            </h4>
            <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">
              A student passionate about medicine — documenting the journey
              through writing, research, and curiosity.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 font-body text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors duration-150"
            >
              Read my story
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-slate-600">
            © {new Date().getFullYear()} A Klinical Lens. All rights reserved.
          </p>
          <p className="font-body text-xs text-slate-700">
            Written with curiosity. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
