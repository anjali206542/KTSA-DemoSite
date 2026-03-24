import { Link } from "react-router-dom";
import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { mockBlogs } from "../lib/mock-data";

const blogImages = {
  "sports-ranking-board":
    "https://images.unsplash.com/photo-1585909695789-d998198243b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBuZXdzJTIwYXJ0aWNsZXxlbnwxfHx8fDE3NzM5MDgwNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "foosball-techniques":
    "https://images.unsplash.com/photo-1715801903345-f1a971f0f17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29zYmFsbCUyMHRyYWluaW5nJTIwcGxheWVyfGVufDF8fHx8MTc3MzkwODA2MHww&ixlib=rb-4.1.0&q=80&w=1080",
  "sports-tournament-crowd":
    "https://images.unsplash.com/photo-1711937579553-9cd4d7f811b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBhbm5vdW5jZW1lbnQlMjBtZWdhcGhvbmV8ZW58MXx8fHwxNzczOTA4MDYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
};

export function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 border-b border-border bg-gradient-to-b from-secondary/30 to-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">News & Blog</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest news, tournament updates, and
              insights from the Karnataka table soccer community
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Featured Article</h2>

          {mockBlogs.length > 0 && (
            <Link
              to={`/blog/${mockBlogs[0].id}`}
              className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={blogImages[mockBlogs[0].image] || ""}
                    alt={mockBlogs[0].title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {mockBlogs[0].category}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {mockBlogs[0].title}
                  </h3>

                  <p className="text-muted-foreground mb-6 text-lg">
                    {mockBlogs[0].summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{mockBlogs[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(mockBlogs[0].date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read Full Article
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockBlogs.slice(1).map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blogImages[blog.image] || ""}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {blog.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {blog.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-xs"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "Announcements",
              "Training",
              "Events",
              "Tournaments",
              "Rankings",
              "Community",
            ].map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
