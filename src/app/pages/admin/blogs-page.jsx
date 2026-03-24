import { useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { mockBlogs } from "../../lib/mock-data";

export function AdminBlogsPage() {
  const [blogs, setBlogs] = useState(mockBlogs);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Blog Management</h1>
          <p className="text-muted-foreground">Create and manage blog posts</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
        >
          <Plus className="h-5 w-5" />
          Create Blog
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Header Row
        <div className="hidden md:grid md:grid-cols-6 gap-4 p-4 bg-secondary/50 border-b border-border text-sm font-semibold">
          <div className="col-span-2">Blog</div>
          <div>Category</div>
          <div>Author</div>
          <div>Stats</div>
          <div>Actions</div>
        </div> */}

        {/* Rows */}
        <div className="divide-y divide-border">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="p-6 hover:bg-secondary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg flex-1">{blog.title}</h3>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold ml-4">
                      {blog.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {blog.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span>By {blog.author}</span>
                    <span>•</span>
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{Math.floor(Math.random() * 500 + 100)} views</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-secondary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-2">
                  <button className="px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all text-sm font-medium flex items-center gap-2">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-border hover:border-destructive hover:bg-destructive/5 hover:text-destructive transition-all">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-3xl bg-card border border-border rounded-xl p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Create New Blog Post</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="px-4 py-2 rounded-lg border border-border">
                  <option>Announcements</option>
                  <option>Training</option>
                  <option>Events</option>
                  <option>Tournaments</option>
                  <option>Community</option>
                </select>

                <input
                  type="text"
                  placeholder="Author"
                  className="px-4 py-2 rounded-lg border border-border"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Summary"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              <textarea
                rows={8}
                placeholder="Content"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              <input
                type="text"
                placeholder="Tags (comma separated)"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              <input
                type="url"
                placeholder="Image URL"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              <div className="flex gap-3 pt-4">
                <button className="flex-1 py-2 rounded-lg bg-primary text-primary-foreground">
                  Publish
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2 rounded-lg border border-border"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
