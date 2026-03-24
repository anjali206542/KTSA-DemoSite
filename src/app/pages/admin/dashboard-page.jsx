import { Users, Trophy, FileText, TrendingUp, Calendar, Eye } from "lucide-react";
import { mockStats, mockTournaments, mockBlogs } from "../../lib/mock-data";

export function AdminDashboardPage() {
  const recentTournaments = mockTournaments.slice(0, 3);
  const recentBlogs = mockBlogs.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-muted-foreground">Here's an overview of your KTSA portal</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{mockStats.totalPlayers.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">Total Players</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary">
            <TrendingUp className="h-4 w-4" />
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{mockStats.totalTournaments}</div>
              <div className="text-xs text-muted-foreground">Tournaments</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-accent">
            <TrendingUp className="h-4 w-4" />
            <span>+5 this year</span>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
              <FileText className="h-6 w-6" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{mockStats.totalBlogs}</div>
              <div className="text-xs text-muted-foreground">Blog Posts</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#f59e0b]">
            <TrendingUp className="h-4 w-4" />
            <span>+8 this month</span>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border hover:border-[#ec4899]/50 transition-all">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-[#ec4899]/10 text-[#ec4899]">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{mockStats.activeMembers}</div>
              <div className="text-xs text-muted-foreground">Active Members</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#ec4899]">
            <TrendingUp className="h-4 w-4" />
            <span>+18% growth</span>
          </div>
        </div>
      </div>

      {/* Recent Activity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tournaments */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-lg">Recent Tournaments</h3>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="divide-y divide-border">
            {recentTournaments.map((tournament) => (
              <div key={tournament.id} className="p-4 hover:bg-secondary/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold line-clamp-1">{tournament.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    tournament.status === 'upcoming' ? 'bg-primary/10 text-primary' :
                    tournament.status === 'ongoing' ? 'bg-accent/10 text-accent' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {tournament.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{new Date(tournament.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="line-clamp-1">{tournament.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-lg">Recent Blog Posts</h3>
            <FileText className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="divide-y divide-border">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="p-4 hover:bg-secondary/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold line-clamp-2">{blog.title}</h4>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{Math.floor(Math.random() * 500 + 100)} views</span>
                  </div>
                  <span>•</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-bold text-lg mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
            <div className="font-semibold mb-1">Add New Tournament</div>
            <div className="text-sm text-muted-foreground">Create and schedule a tournament</div>
          </button>
          <button className="p-4 rounded-lg border-2 border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all text-left">
            <div className="font-semibold mb-1">Update Rankings</div>
            <div className="text-sm text-muted-foreground">Manage player rankings</div>
          </button>
          <button className="p-4 rounded-lg border-2 border-dashed border-border hover:border-[#f59e0b] hover:bg-[#f59e0b]/5 transition-all text-left">
            <div className="font-semibold mb-1">Create Blog Post</div>
            <div className="text-sm text-muted-foreground">Write and publish news</div>
          </button>
        </div>
      </div>
    </div>
  );
}
