import { Link } from "react-router-dom";
import {
  Trophy,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  Medal,
  Target,
  Zap,
} from "lucide-react";
import { mockTournaments, mockStats } from "../lib/mock-data";

export function HomePage() {
  const upcomingTournaments = mockTournaments
    .filter((t) => t.status === "upcoming")
    .slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1716703370285-d7ff2960abb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29zYmFsbCUyMHRhYmxlJTIwc29jY2VyJTIwZ2FtZXxlbnwxfHx8fDE3NzM5MDc5NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Table Soccer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="text-primary font-semibold text-sm">
              Official Governing Body for Karnataka
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Karnataka Table Soccer
            <span
              className="block text-primary mt-2"
              style={{ textShadow: "0 0 30px rgba(0,255,136,0.3)" }}
            >
              Association
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering players, organizing tournaments, and building the future
            of table soccer in Karnataka
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/rankings"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transform hover:scale-105"
            >
              View Rankings
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {mockStats.totalPlayers.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                Registered Players
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-3">
                <Trophy className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {mockStats.totalTournaments}
              </div>
              <div className="text-sm text-muted-foreground">
                Tournaments Held
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#f59e0b]/10 text-[#f59e0b] mb-3">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">
                {mockStats.activeMembers}
              </div>
              <div className="text-sm text-muted-foreground">
                Active Members
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#ec4899]/10 text-[#ec4899] mb-3">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="text-3xl font-bold mb-1">24+</div>
              <div className="text-sm text-muted-foreground">
                Events Annually
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Upcoming Tournaments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Register now for our upcoming events and compete with the best
              players in Karnataka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.1)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-1758227231013-8cff978f1dae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwYXJlbmElMjB0b3VybmFtZW50fGVufDF8fHx8MTc3MzkwNzk0N3ww&ixlib=rb-4.1.0&q=80&w=1080`}
                    alt={tournament.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {tournament.status.toUpperCase()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{tournament.name}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(tournament.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      <span>{tournament.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {tournament.description}
                  </p>
                  <a
                    href={tournament.registrationLink}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all w-full justify-center"
                  >
                    Register Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose KTSA</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to growing and professionalizing table soccer in
              Karnataka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Medal className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Official Recognition</h3>
              <p className="text-muted-foreground">
                Registered and trademarked governing body providing legitimacy
                to all tournaments in Karnataka
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Standards</h3>
              <p className="text-muted-foreground">
                International standard equipment, professional referees, and
                fair ranking systems
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-card border border-border hover:border-[#f59e0b]/50 transition-all group">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] mb-4 group-hover:bg-[#f59e0b] group-hover:text-white transition-all">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth & Development</h3>
              <p className="text-muted-foreground">
                Regular tournaments, training programs, and opportunities for
                players at all skill levels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1751916856395-3dd0c4fe49e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZSUyMHNvY2NlciUyMGNvbXBldGl0aW9uJTIwcGxheWVyc3xlbnwxfHx8fDE3NzM5MDc5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Join KTSA"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
            </div>

            <div className="relative z-10 px-8 py-16 md:py-24">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Join the Action?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Become part of Karnataka's premier table soccer community.
                  Compete, learn, and grow with the best.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/rankings"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
                  >
                    View Rankings
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
                  >
                    Latest News
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
