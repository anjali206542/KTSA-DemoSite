import { useState } from "react";
import { Plus, Trash2, Image as ImageIcon } from "lucide-react";

export function AdminGalleryPage() {
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Mock gallery items
  const galleryItems = [
    { id: "1", url: "https://images.unsplash.com/photo-1716703370285-d7ff2960abb4?w=400", event: "IFL 2026", type: "image" },
    { id: "2", url: "https://images.unsplash.com/photo-1758227231013-8cff978f1dae?w=400", event: "State Championship", type: "image" },
    { id: "3", url: "https://images.unsplash.com/photo-1751916856395-3dd0c4fe49e2?w=400", event: "Training Session", type: "image" },
    { id: "4", url: "https://images.unsplash.com/photo-1770482228588-270b08d2d376?w=400", event: "Winners Ceremony", type: "image" },
    { id: "5", url: "https://images.unsplash.com/photo-1585909695789-d998198243b7?w=400", event: "Tournament 2025", type: "image" },
    { id: "6", url: "https://images.unsplash.com/photo-1715801903345-f1a971f0f17b?w=400", event: "Practice Match", type: "image" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Gallery Management</h1>
          <p className="text-muted-foreground">Upload and manage event photos and videos</p>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
        >
          <Plus className="h-5 w-5" />
          Upload Media
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all"
          >
            <img
              src={item.url}
              alt={item.event}
              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-sm font-semibold mb-2">{item.event}</p>
                <button className="w-full px-3 py-2 rounded-lg bg-destructive/20 hover:bg-destructive/30 text-destructive transition-colors flex items-center justify-center gap-2 text-sm">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowUploadModal(false)}
          />
          <div className="relative z-10 w-full max-w-lg bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Upload Media</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Event Name</label>
                <input
                  type="text"
                  placeholder="e.g., IFL Championship 2026"
                  className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Media Type</label>
                <select className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Image</option>
                  <option>Video</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Upload File</label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PNG, JPG, MP4 up to 10MB
                  </p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*,video/*"
                  />
                </div>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                >
                  Upload
                </button>
                <button
                  type="button"
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
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
