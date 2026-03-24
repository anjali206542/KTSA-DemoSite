import { useState } from "react";
import { Search, Filter, Trophy, Medal, Award } from "lucide-react";
import { mockPlayers } from "../lib/mock-data";

export function RankingsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [stateFilter, setStateFilter] = useState("all");

  const categories = [
    "all",
    ...Array.from(new Set(mockPlayers.map((p) => p.category))),
  ];
  const states = [
    "all",
    ...Array.from(new Set(mockPlayers.map((p) => p.state))),
  ];

  const filteredPlayers = mockPlayers.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || player.category === categoryFilter;
    const matchesState = stateFilter === "all" || player.state === stateFilter;
    return matchesSearch && matchesCategory && matchesState;
  });

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="h-5 w-5 text-[#FFD700]" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-[#C0C0C0]" />;
    if (rank === 3) return <Award className="h-5 w-5 text-[#CD7F32]" />;
    return null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 border-b border-border bg-gradient-to-b from-secondary/30 to-background">
        <div className="mx-auto max-w-7xl px-4 text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Player Rankings</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Official KTSA rankings based on tournament performance and
            achievements
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary/20 border-b border-border sticky top-16 z-40 backdrop-blur-sm bg-background/95">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search players..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border"
            />
          </div>

          {/* Category */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="pl-10 pr-4 py-3 rounded-lg border border-border"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-black">
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="px-4 py-3 rounded-lg border border-border"
          >
            {states.map((state) => (
              <option key={state} value={state} className="text-black">
                {state === "all" ? "All States" : state}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Table */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid md:grid-cols-6 gap-4 p-4 bg-secondary/50 border-b border-border font-semibold text-sm">
              <div>Rank</div>
              <div className="col-span-2">Player Name</div>
              <div>Points</div>
              <div>Category</div>
              <div>State</div>
            </div>

            {/* Body */}
            <div className="divide-y divide-border">
              {filteredPlayers.length === 0 ? (
                <div className="p-12 text-center text-muted-foreground">
                  No players found
                </div>
              ) : (
                filteredPlayers.map((player) => (
                  <div
                    key={player.id}
                    className={`grid grid-cols-1 md:grid-cols-6 gap-4 p-4 hover:bg-secondary/30 transition ${
                      player.rank <= 3 ? "bg-secondary/20" : ""
                    }`}
                  >
                    {/* Rank */}
                    <div className="flex items-center gap-3">
                      {getRankIcon(player.rank)}
                      <span className="text-2xl font-bold">#{player.rank}</span>
                    </div>

                    {/* Name */}
                    <div className="md:col-span-2">
                      <div className="font-semibold text-lg">{player.name}</div>
                      <div className="md:hidden text-sm text-muted-foreground">
                        {player.category} • {player.state}
                      </div>
                    </div>

                    {/* Points */}
                    <div className="flex items-center font-bold text-primary">
                      {player.points.toLocaleString()}
                    </div>

                    {/* Category */}
                    <div className="hidden md:flex items-center">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">
                        {player.category}
                      </span>
                    </div>

                    {/* State */}
                    <div className="hidden md:flex items-center text-muted-foreground">
                      {player.state}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
