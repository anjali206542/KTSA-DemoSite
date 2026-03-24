import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { mockPlayers } from "../../lib/mock-data";

export function AdminRankingsPage() {
  const [players, setPlayers] = useState(mockPlayers);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">Rankings Management</h1>
          <p className="text-muted-foreground">Add, edit, and manage player rankings</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]"
        >
          <Plus className="h-5 w-5" />
          Add Player
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search players..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Rankings Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Table Header */}
        <div className="hidden md:grid md:grid-cols-7 gap-4 p-4 bg-secondary/50 border-b border-border font-semibold text-sm">
          <div>Rank</div>
          <div className="col-span-2">Player Name</div>
          <div>Points</div>
          <div>Category</div>
          <div>State</div>
          <div className="text-right">Actions</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-border">
          {filteredPlayers.map((player) => (
            <div
              key={player.id}
              className="grid grid-cols-1 md:grid-cols-7 gap-4 p-4 hover:bg-secondary/30 transition-colors"
            >
              <div className="font-bold text-lg md:text-base">
                #{player.rank}
              </div>
              
              <div className="md:col-span-2">
                <div className="font-semibold">{player.name}</div>
                <div className="md:hidden text-sm text-muted-foreground space-y-1 mt-1">
                  <div>{player.points} pts</div>
                  <div>{player.category}</div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <span className="font-semibold text-primary">{player.points}</span>
              </div>
              
              <div className="hidden md:block">
                <span className="px-2 py-1 rounded-md bg-accent/10 text-accent text-sm">
                  {player.category}
                </span>
              </div>
              
              <div className="hidden md:block text-muted-foreground">
                {player.state}
              </div>
              
              <div className="flex items-center gap-2 md:justify-end">
                <button className="p-2 rounded-lg hover:bg-accent/10 text-accent transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="p-2 rounded-lg hover:bg-destructive/10 text-destructive transition-colors">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Player Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          />
          <div className="relative z-10 w-full max-w-lg bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">Add New Player</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Player Name</label>
                <input
                  type="text"
                  placeholder="Enter player name"
                  className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Rank</label>
                  <input
                    type="number"
                    placeholder="1"
                    className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Points</label>
                  <input
                    type="number"
                    placeholder="2500"
                    className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Men's Singles</option>
                  <option>Women's Singles</option>
                  <option>Men's Doubles</option>
                  <option>Women's Doubles</option>
                  <option>Mixed Doubles</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">State</label>
                <input
                  type="text"
                  placeholder="Karnataka"
                  className="w-full px-4 py-2 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
                >
                  Add Player
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
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
