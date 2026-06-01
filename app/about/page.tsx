import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "The story behind A Klinical Lens — a Cambridge Medicine aspirant writing about healthcare.",
};

const interests = [
  { icon: "🧬", label: "Human Biology & Genetics" },
  { icon: "⚖️", label: "Medical Ethics & Philosophy" },
  { icon: "🌍", label: "Global Health Systems" },
  { icon: "🏛️", label: "Health Policy & Inequality" },
  { icon: "🔬", label: "Clinical Research & Evidence" },
  { icon: "✍️", label: "Science Communication" },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 items-center">
          {/* Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-violet-500 flex items-center justify-center">
                <span className="font-display text-7xl font-bold text-white select-none">K</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-violet-100 border-4 border-white flex items-center justify-center">
                <span className="text-xl">🔬</span>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="lg:col-span-3 space-y-5">
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-violet-500">
              The author
            </span>
            <h1 className="font-display text-5xl font-bold text-slate-900 leading-tight">
              Behind the<br />
              <span className="text-gradient">Klinical Lens</span>
            </h1>
            <p className="font-body text-lg text-slate-600 leading-relaxed">
              I&apos;m a student with an obsessive curiosity about medicine — how the
              human body works, why healthcare systems differ so dramatically across
              the world, and the ethical knots that medicine ties itself in.
            </p>
            <p className="font-body text-slate-500 leading-relaxed">
              My goal is to get into Cambridge Medicine. This blog is part of that
              journey — a way to think out loud, engage deeply with the material,
              and build the kind of reflective, curious mind that medicine demands.
            </p>
          </div>
        </div>

        {/* Why this blog */}
        <div className="mb-16 bg-slate-50 rounded-3xl p-8 md:p-12">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-violet-500 block mb-4">
            The why
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-6">
            Why &ldquo;A Klinical Lens&rdquo;?
          </h2>
          <div className="space-y-4 font-body text-slate-600 leading-relaxed">
            <p>
              The K in Klinical is deliberate — a nod to my name, a small
              reminder that this is personal. Medicine is deeply personal. The
              decisions doctors make, the policies governments set, the research
              scientists publish — all of it lands, eventually, on real human
              beings in real moments of vulnerability.
            </p>
            <p>
              A lens because I want to examine medicine from every angle: the
              science, the ethics, the politics, the global picture. Too many
              conversations about healthcare stay siloed. This blog tries to
              connect the dots.
            </p>
            <p>
              It is also, honestly, a portfolio. Writing forces clarity of
              thought. And clarity of thought is exactly what medicine requires.
            </p>
          </div>
        </div>

        {/* Interests grid */}
        <div className="mb-16">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-violet-500 block mb-4">
            What I write about
          </span>
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-8">
            Areas of interest
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map(({ icon, label }) => (
              <div
                key={label}
                className="bg-white border border-slate-100 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-body text-sm font-medium text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mb-16 border-l-4 border-violet-400 pl-8 py-2">
          <blockquote className="font-display text-2xl italic text-slate-800 mb-3">
            &ldquo;Wherever the art of Medicine is loved, there is also a love of
            Humanity.&rdquo;
          </blockquote>
          <cite className="font-body text-sm text-slate-400 not-italic">— Hippocrates</cite>
        </div>

        {/* What I am */}
        <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 mb-16">
          <h2 className="font-display text-3xl font-bold mb-6">
            What I&apos;m doing right now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
            {[
              {
                emoji: "📚",
                title: "Studying for medicine",
                desc: "Working towards my A-levels and preparing my UCAS application for Cambridge Medicine.",
              },
              {
                emoji: "✍️",
                title: "Writing consistently",
                desc: "Publishing one piece per fortnight across all five topic areas on this blog.",
              },
              {
                emoji: "🏥",
                title: "Gaining experience",
                desc: "Seeking clinical shadowing, volunteering, and healthcare work experience.",
              },
              {
                emoji: "🧠",
                title: "Reading widely",
                desc: "Working through medical literature, ethics texts, and global health reports.",
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="flex gap-4">
                <span className="text-2xl mt-0.5">{emoji}</span>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Come explore with me.
          </h2>
          <p className="font-body text-slate-500 max-w-md mx-auto">
            Whether you&apos;re a fellow aspiring medic, a curious reader, or
            a seasoned clinician — there is something here for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="/blog"
              className="font-body font-semibold px-6 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors text-sm"
            >
              Read the Blog
            </Link>
            <Link
              href="/blog?category=medical-ethics"
              className="font-body font-semibold px-6 py-3 border-2 border-slate-200 text-slate-700 rounded-full hover:border-blue-900 hover:text-blue-900 transition-colors text-sm"
            >
              Start with Ethics
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
