import Link from "next/link";
import { PostMeta, categoryMeta, formatDate } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostMeta }) {
  const cat = categoryMeta[post.categorySlug] ?? {
    label: post.category,
    color: "text-slate-700",
    bg: "bg-slate-100",
    border: "border-slate-200",
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full bg-white border border-slate-100 rounded-2xl p-6 card-hover flex flex-col gap-4">
        {/* Category badge */}
        <div
          className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold font-body border ${cat.bg} ${cat.color} ${cat.border}`}
        >
          {cat.label}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-semibold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors duration-150">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="font-body text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="font-body text-xs text-slate-400">
            {formatDate(post.date)}
          </span>
          <span className="font-body text-xs text-slate-400">
            {post.readingTime}
          </span>
        </div>
      </article>
    </Link>
  );
}
