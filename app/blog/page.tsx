import { getAllPosts, categoryMeta } from "@/lib/posts";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Blog",
  description:
    "All posts on healthcare systems, biology, medical ethics, health politics, and research.",
};

const allCategories = [
  { slug: "", label: "All Posts" },
  ...Object.entries(categoryMeta).map(([slug, { label }]) => ({ slug, label })),
];

interface Props {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { category = "" } = await searchParams;
  const allPosts = getAllPosts();
  const posts = category
    ? allPosts.filter((p) => p.categorySlug === category)
    : allPosts;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 space-y-4 max-w-2xl">
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-violet-500">
            The archive
          </span>
          <h1 className="font-display text-5xl font-bold text-slate-900">
            All Posts
          </h1>
          <p className="font-body text-lg text-slate-500 leading-relaxed">
            Every piece — from global health systems to cutting-edge research —
            written through a klinical lens.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {allCategories.map(({ slug, label }) => {
            const active = category === slug;
            const meta = slug ? categoryMeta[slug] : null;
            return (
              <a
                key={slug}
                href={slug ? `/blog?category=${slug}` : "/blog"}
                className={`font-body text-sm font-medium px-4 py-2 rounded-full border transition-colors duration-150 ${
                  active
                    ? "bg-blue-900 text-white border-blue-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-blue-200 hover:text-blue-900"
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-slate-400">
              No posts yet in this category.
            </p>
            <p className="font-body text-slate-400 mt-2">
              Check back soon — more is coming.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
