// ❌ Removed all interfaces (Player, Tournament, Blog, GalleryItem)

export const mockPlayers = [
  {
    id: "1",
    name: "Rajesh Kumar",
    rank: 1,
    points: 2850,
    category: "Men's Singles",
    state: "Karnataka",
  },
  {
    id: "2",
    name: "Priya Sharma",
    rank: 2,
    points: 2720,
    category: "Women's Singles",
    state: "Karnataka",
  },
  {
    id: "3",
    name: "Amit Patel",
    rank: 3,
    points: 2680,
    category: "Men's Singles",
    state: "Karnataka",
  },
  {
    id: "4",
    name: "Sneha Reddy",
    rank: 4,
    points: 2550,
    category: "Women's Singles",
    state: "Karnataka",
  },
  {
    id: "5",
    name: "Vikram Singh",
    rank: 5,
    points: 2480,
    category: "Men's Doubles",
    state: "Karnataka",
  },
  {
    id: "6",
    name: "Anjali Nair",
    rank: 6,
    points: 2450,
    category: "Women's Doubles",
    state: "Karnataka",
  },
  {
    id: "7",
    name: "Karthik Rao",
    rank: 7,
    points: 2380,
    category: "Men's Singles",
    state: "Karnataka",
  },
  {
    id: "8",
    name: "Divya Krishnan",
    rank: 8,
    points: 2350,
    category: "Women's Singles",
    state: "Karnataka",
  },
  {
    id: "9",
    name: "Arjun Menon",
    rank: 9,
    points: 2290,
    category: "Mixed Doubles",
    state: "Karnataka",
  },
  {
    id: "10",
    name: "Meera Iyer",
    rank: 10,
    points: 2250,
    category: "Women's Doubles",
    state: "Karnataka",
  },
];

export const mockTournaments = [
  {
    id: "1",
    name: "IFL Karnataka Championship 2026",
    date: "2026-04-15",
    location: "Bangalore Sports Complex",
    description:
      "Annual state-level championship featuring top players from across Karnataka. Prize pool of ₹5 lakhs.",
    registrationLink: "https://example.com/register",
    status: "upcoming",
    image: "table-soccer-tournament",
  },
  {
    id: "2",
    name: "Mysore Open Table Soccer League",
    date: "2026-05-20",
    location: "Mysore Indoor Stadium",
    description:
      "Open tournament for all skill levels. Great opportunity for beginners to compete.",
    registrationLink: "https://example.com/register",
    status: "upcoming",
    image: "foosball-game",
  },
  {
    id: "3",
    name: "Bangalore City Cup 2026",
    date: "2026-03-10",
    location: "Indiranagar Sports Arena",
    description:
      "Completed tournament with record participation of 150+ players.",
    registrationLink: "https://example.com/register",
    status: "completed",
    image: "table-soccer-competition",
  },
];

export const mockBlogs = [
  {
    id: "1",
    title: "KTSA Announces New Ranking System for 2026",
    summary:
      "Karnataka Table Soccer Association introduces a more transparent and fair ranking methodology.",
    content: `Karnataka Table Soccer Association (KTSA) is proud to announce...`,
    image: "sports-ranking-board",
    author: "KTSA Admin",
    date: "2026-03-15",
    category: "Announcements",
    tags: ["Rankings", "Updates", "2026"],
  },
  {
    id: "2",
    title: "5 Essential Techniques Every Table Soccer Player Must Master",
    summary:
      "From basic grip to advanced snake shots, learn the fundamental techniques that separate amateurs from professionals.",
    content: `Table soccer is a game of precision, speed, and strategy. Whether you're a beginner or an intermediate player, mastering these five essential techniques will significantly improve your game.
    
    1. The Proper Grip: Learn how to hold the handles correctly for maximum control
    2. The Pull Shot: Master this fundamental offensive technique
    3. The Snake Shot: Advanced technique for scoring goals
    4. Defensive Positioning: How to protect your goal effectively
    5. Ball Control: Techniques for maintaining possession
    
    Practice these techniques regularly, and you'll see improvement in your competitive performance.`,
    image: "foosball-techniques",
    author: "Coach Ramesh",
    date: "2026-03-10",
    category: "Training",
    tags: ["Techniques", "Training", "Tips"],
  },
  {
    id: "3",
    title: "IFL 2026: Record Breaking Participation Expected",
    summary:
      "The upcoming IFL Karnataka Championship is set to break all previous records with 200+ registered players.",
    content: `The Indian Foosball League (IFL) Karnataka Championship 2026, sanctioned by KTSA, is gearing up to be the biggest table soccer event in the state's history. With over 200 players already registered and more registrations coming in daily, this tournament promises to be spectacular.
    
    Tournament Highlights:
    - Prize pool of ₹5 lakhs
    - Live streaming on YouTube
    - International standard tables
    - Professional referees
    - Multiple categories for all skill levels
    
    Registration closes on April 1st, 2026. Don't miss this opportunity to be part of Karnataka's premier table soccer event!`,
    image: "sports-tournament-crowd",
    author: "KTSA Media Team",
    date: "2026-03-05",
    category: "Events",
    tags: ["IFL", "Tournament", "Championship"],
  },
];

export const mockStats = {
  totalPlayers: 1250,
  totalTournaments: 48,
  totalBlogs: 87,
  activeMembers: 892,
};
