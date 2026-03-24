import { useParams, Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowLeft, Share2 } from "lucide-react";
import { mockBlogs } from "../lib/mock-data";

// ❌ Removed TS: Record<string, string>
const blogImages = {
  "sports-ranking-board":
    "https://images.unsplash.com/photo-1585909695789-d998198243b7?...",
  "foosball-techniques":
    "https://images.unsplash.com/photo-1715801903345-f1a971f0f17b?...",
  "sports-tournament-crowd":
    "https://images.unsplash.com/photo-1711937579553-9cd4d7f811b4?...",
};

export function BlogDetailPage() {
  const { id } = useParams();

  // ✅ safer comparison (id can be undefined)
  const blog = mockBlogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog post not found</h2>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img
          src={blogImages[blog.image]}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
            {blog.category}
          </span>

          <h1 className="text-4xl font-bold mt-4 mb-6">{blog.title}</h1>

          {/* Meta */}
          <div className="flex gap-6 text-muted-foreground mb-8 border-b pb-6">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {blog.author}
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {new Date(blog.date).toLocaleDateString()}
            </div>

            <button className="ml-auto flex items-center gap-2">
              <Share2 className="h-5 w-5" />
              Share
            </button>
          </div>

          {/* Summary */}
          <p className="italic text-muted-foreground mb-6">{blog.summary}</p>

          {/* Content */}
          <div>
            {blog.content.split("\n\n").map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex gap-2 flex-wrap">
            {blog.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary rounded">
                <Tag className="inline h-4 w-4 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold mb-6">More Articles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {mockBlogs
              .filter((b) => b.id !== id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link key={relatedBlog.id} to={`/blog/${relatedBlog.id}`}>
                  <h3>{relatedBlog.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
