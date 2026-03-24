import { useState } from "react";
import { Plus, Edit, Trash2, Calendar, MapPin } from "lucide-react";
import { mockTournaments } from "../../lib/mock-data";

export function AdminTournamentsPage() {
  const [tournaments, setTournaments] = useState(mockTournaments);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Tournament Management</h1>
          <p className="text-muted-foreground">Create and manage tournaments</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
        >
          <Plus className="h-5 w-5" />
          Create Tournament
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tournaments.map((tournament) => (
          <div
            key={tournament.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="p-6">
              {/* Title + Status */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-lg flex-1">{tournament.name}</h3>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tournament.status === "upcoming"
                      ? "bg-primary/10 text-primary"
                      : tournament.status === "ongoing"
                        ? "bg-accent/10 text-accent"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {tournament.status.toUpperCase()}
                </span>
              </div>

              {/* Date + Location */}
              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(tournament.date).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{tournament.location}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {tournament.description}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 px-4 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-all text-sm font-medium flex items-center justify-center gap-2">
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

      {/* Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />

          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-2xl bg-card border border-border rounded-xl p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-6">Create New Tournament</h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tournament Name
                </label>
                <input
                  type="text"
                  placeholder="Tournament Name"
                  className="w-full px-4 py-2 rounded-lg border border-border"
                />
              </div>

              {/* Date + Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="px-4 py-2 rounded-lg border border-border"
                />

                <select className="px-4 py-2 rounded-lg border border-border">
                  <option>Upcoming</option>
                  <option>Ongoing</option>
                  <option>Completed</option>
                </select>
              </div>

              {/* Location */}
              <input
                type="text"
                placeholder="Location"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              {/* Description */}
              <textarea
                rows={4}
                placeholder="Description"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              {/* Link */}
              <input
                type="url"
                placeholder="Registration Link"
                className="w-full px-4 py-2 rounded-lg border border-border"
              />

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground">
                  Create
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border"
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
