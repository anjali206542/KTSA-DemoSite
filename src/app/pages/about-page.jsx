import { Trophy, Target, Eye, Flag, CheckCircle2 } from "lucide-react";

export function AboutPage() {
  const milestones = [
    {
      year: "2018",
      event: "KTSA Foundation",
      description: "Organization officially registered",
    },
    {
      year: "2019",
      event: "First Championship",
      description: "Inaugural state championship held",
    },
    {
      year: "2021",
      event: "National Recognition",
      description: "Affiliated with national federation",
    },
    {
      year: "2023",
      event: "1000 Members",
      description: "Reached 1000 registered members",
    },
    {
      year: "2025",
      event: "International Standards",
      description: "Adopted ITSF tournament standards",
    },
    {
      year: "2026",
      event: "Record Growth",
      description: "Largest tournament participation",
    },
  ];

  const objectives = [
    "Promote and develop table soccer at grassroots level",
    "Organize state and regional level tournaments",
    "Maintain transparent ranking and rating systems",
    "Provide training and certification programs",
    "Foster a professional and inclusive community",
    "Collaborate with national and international bodies",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <Trophy className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl font-bold mb-6">About KTSA</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Karnataka Table Soccer Association is the official governing body
              for table soccer in Karnataka, dedicated to promoting and
              professionalizing the sport across the state.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To establish Karnataka as a leading hub for table soccer in
                India, nurturing talent from grassroots to professional levels,
                and representing the state with pride on national and
                international platforms.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide a structured, fair, and professional ecosystem for
                table soccer enthusiasts through organized tournaments,
                transparent rankings, quality training programs, and community
                building initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Timeline */}
      <section className="py-20 bg-secondary/30">
        <style>{`
    @keyframes drawLine {
      from { height: 0%; }
      to   { height: 100%; }
    }
    @keyframes dotGlow {
      0%   { opacity: 0; transform: scale(0); box-shadow: none; }
      60%  { transform: scale(1.4); box-shadow: 0 0 30px rgba(0,255,136,0.9); }
      100% { opacity: 1; transform: scale(1); box-shadow: 0 0 20px rgba(0,255,136,0.6); }
    }
    @keyframes fadeSlideLeft {
      from { opacity: 0; transform: translateX(40px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes fadeSlideRight {
      from { opacity: 0; transform: translateX(-40px); }
      to   { opacity: 1; transform: translateX(0); }
    }

    .timeline-line-fill {
      height: 0%;
      background: linear-gradient(to bottom, #00ff88, #00cc66);
      transition: none;
    }
    .timeline-animated .timeline-line-fill {
      animation: drawLine 1.8s ease-out forwards;
    }

    .timeline-dot {
      opacity: 0;
      transform: scale(0);
    }
    .timeline-animated .timeline-dot-0 {
      animation: dotGlow 0.5s ease-out 0.3s forwards;
    }
    .timeline-animated .timeline-dot-1 {
      animation: dotGlow 0.5s ease-out 0.8s forwards;
    }
    .timeline-animated .timeline-dot-2 {
      animation: dotGlow 0.5s ease-out 1.3s forwards;
    }
    .timeline-animated .timeline-dot-3 {
      animation: dotGlow 0.5s ease-out 1.7s forwards;
    }
    .timeline-animated .timeline-dot-4 {
      animation: dotGlow 0.5s ease-out 2.2s forwards;
    }
    .timeline-animated .timeline-dot-5 {
      animation: dotGlow 0.5s ease-out 2.7s forwards;
    }

    .timeline-content {
      opacity: 0;
    }
    .timeline-animated .timeline-content-even {
      animation: fadeSlideLeft 0.6s ease-out forwards;
    }
    .timeline-animated .timeline-content-odd {
      animation: fadeSlideRight 0.6s ease-out forwards;
    }
    .timeline-animated .timeline-content-0 { animation-delay: 0.4s; }
    .timeline-animated .timeline-content-1 { animation-delay: 0.9s; }
    .timeline-animated .timeline-content-2 { animation-delay: 1.4s; }
    .timeline-animated .timeline-content-3 { animation-delay: 1.8s; }
    .timeline-animated .timeline-content-4 { animation-delay: 2.3s; }
    .timeline-animated .timeline-content-5 { animation-delay: 2.8s; }
  `}</style>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming Karnataka's premier table
              soccer authority
            </p>
          </div>

          <div
            className="relative"
            ref={(el) => {
              if (!el) return;
              const observer = new IntersectionObserver(
                ([entry]) => {
                  if (entry.isIntersecting) {
                    el.classList.add("timeline-animated");
                    observer.disconnect();
                  }
                },
                { threshold: 0.15 },
              );
              observer.observe(el);
            }}
          >
            {/* Timeline Track (grey background) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

            {/* Animated green fill on top */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block overflow-hidden"
              style={{ height: "100%" }}
            >
              <div
                className="timeline-line-fill w-full"
                style={{ height: "100%" }}
              />
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content */}
                  <div
                    className={`
                timeline-content
                timeline-content-${index % 2 === 0 ? "even" : "odd"}
                timeline-content-${index}
                flex-1
                ${index % 2 === 0 ? "md:text-right" : "md:text-left"}
                text-center md:text-inherit
              `}
                  >
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="relative z-10">
                    <div
                      className={`timeline-dot timeline-dot-${index} w-4 h-4 rounded-full bg-primary`}
                    />
                  </div>

                  {/* Empty Space */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Flag className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Our Objectives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Core goals that drive our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-foreground">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legitimacy & Trademark */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <Trophy className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Official Recognition</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Karnataka Table Soccer Association (KTSA) is a registered and
              trademarked organization, providing official legitimacy to table
              soccer tournaments across Karnataka. Our registration ensures that
              all tournaments, rankings, and certifications meet professional
              standards and are recognized at state and national levels.
            </p>
            <div className="inline-block p-6 rounded-xl bg-card border-2 border-primary/50">
              <p className="font-semibold text-primary mb-2">
                Registered Authority
              </p>
              <p className="text-sm text-muted-foreground">
                Providing legitimacy to tournaments like IFL and sanctioning
                official state championships
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
