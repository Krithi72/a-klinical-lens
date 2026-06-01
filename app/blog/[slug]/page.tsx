import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, categoryMeta, formatDate } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const cat = categoryMeta[post.categorySlug] ?? {
    label: post.category,
    color: "text-slate-700",
    bg: "bg-slate-100",
    border: "border-slate-200",
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-body text-sm text-slate-400 hover:text-blue-900 transition-colors mb-10"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All posts
        </Link>

        {/* Category badge */}
        <div
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold font-body border mb-6 ${cat.bg} ${cat.color} ${cat.border}`}
        >
          {cat.label}
        </div>

        {/* Title */}
        <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex items-center gap-4 pb-8 mb-10 border-b border-slate-100">
          <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-white text-xs font-bold font-body">
            K
          </div>
          <div>
            <p className="font-body text-sm font-medium text-slate-700">A Klinical Lens</p>
            <p className="font-body text-xs text-slate-400">
              {formatDate(post.date)} · {post.readingTime}
            </p>
          </div>
        </div>

        {/* Excerpt / lead */}
        {post.excerpt && (
          <p className="font-body text-xl text-slate-600 leading-relaxed mb-10 italic border-l-4 border-violet-300 pl-5">
            {post.excerpt}
          </p>
        )}

        {/* MDX body */}
        <div className="prose-klinical">
          <MDXRemote source={post.content} />
        </div>

        {/* Footer */}
        <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs text-slate-400 uppercase tracking-widest mb-1">
              Written by
            </p>
            <p className="font-display font-semibold text-slate-900">A Klinical Lens</p>
            <p className="font-body text-xs text-slate-400 mt-0.5">Cambridge Medicine Aspirant</p>
          </div>
          <Link
            href="/blog"
            className="font-body text-sm font-semibold px-5 py-2.5 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-colors duration-150"
          >
            More posts
          </Link>
        </div>
      </div>
    </div>
  );
}
