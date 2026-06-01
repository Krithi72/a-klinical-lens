import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  readingTime: string;
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export const categoryMeta: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  "global-systems": {
    label: "Global Systems",
    color: "text-blue-900",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  "human-biology": {
    label: "Human Biology",
    color: "text-emerald-800",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  "medical-ethics": {
    label: "Medical Ethics",
    color: "text-violet-800",
    bg: "bg-violet-50",
    border: "border-violet-200",
  },
  "health-politics": {
    label: "Health & Politics",
    color: "text-rose-800",
    bg: "bg-rose-50",
    border: "border-rose-200",
  },
  "research-review": {
    label: "Research Review",
    color: "text-amber-800",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, "");
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "Untitled",
      date: data.date ?? "2025-01-01",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Uncategorised",
      categorySlug: data.categorySlug ?? "general",
      readingTime: data.readingTime ?? "5 min read",
      featured: data.featured ?? false,
    } satisfies PostMeta;
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const mdxPath = path.join(postsDir, `${slug}.mdx`);
  const mdPath = path.join(postsDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    title: data.title ?? "Untitled",
    date: data.date ?? "2025-01-01",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "Uncategorised",
    categorySlug: data.categorySlug ?? "general",
    readingTime: data.readingTime ?? "5 min read",
    featured: data.featured ?? false,
  };
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPosts().filter((p) => p.categorySlug === categorySlug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
