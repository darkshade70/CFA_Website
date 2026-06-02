import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Coaches" };

const ss3 = "'Source Sans 3', sans-serif";

// Fencing stock photos — swap with real headshots when available
const COACHES = [
  {
    name: "Alice Lu",
    role: "President & head coach",
    bio: "Twenty-five years of fencing and fifteen building CFA into one of Ontario's largest clubs. Alice oversees every program and still coaches on the floor every week.",
    img: "/fencing5.webp",
  },
  {
    name: "Brily Lepine",
    role: "Foil & historical coach",
    bio: "Fencing since the early '90s across foil, longsword and rapier. Brily leads our historical program and brings decades of teaching to every session.",
    img: "/fencing6.webp",
  },
  {
    name: "Kyle Foster",
    role: "Owner & veteran fencer",
    bio: "Active veteran competitor who runs the club operations and programming alongside Lisa Huzel, whose work on the FIE Medical Commission keeps fencing safe.",
    img: "/fencing7.avif",
  },
  {
    name: "Lisa Huzel",
    role: "Owner & FIE Medical Commissioner",
    bio: "Lisa sits on the FIE Medical Commission — fencing's international safety body. She brings that expertise directly to CFA's coaching and safety protocols.",
    img: "/fencing8.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Youth competitive coach",
    bio: "Former national-level competitor turned coach. Marcus runs our youth competitive stream and has guided multiple athletes to the provincial podium.",
    img: "/fencing9.webp",
  },
  {
    name: "Sofia Almeida",
    role: "Épée specialist",
    bio: "A decorated veteran épéeist with international circuit experience. Sofia brings elite-level tactical coaching to athletes at every stage of their development.",
    img: "/fencing10.avif",
  },
];

function CoachCard({ coach }: { coach: { name: string; role: string; bio: string; img: string } }) {
  return (
    <div
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Coach photo */}
      <div style={{ height: "340px", flexShrink: 0, width: "100%", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={coach.img} alt={coach.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
      {/* Card body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "24px 24px 26px" }}>
        <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>
          {coach.name}
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", margin: 0 }}>
          {coach.role}
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0 }}>
          {coach.bio}
        </p>
      </div>
    </div>
  );
}

export default function CoachesPage() {
  return (
    <>
      {/* Nav spacer */}
      <div className="nav-spacer" />

      {/* ── Header ── */}
      <div
        data-node-id="1:1969"
        className="page-header"
        style={{
          backgroundColor: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", whiteSpace: "nowrap", margin: 0 }}>
          Our team
        </p>
        <p className="h-page" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Meet our experienced staff and coaches
        </p>
      </div>

      {/* ── Coach grid — CSS grid: 3-col desktop, 1-col mobile ── */}
      <div
        data-node-id="1:1972"
        className="page-px"
        style={{ backgroundColor: "var(--bg)", paddingTop: "24px", paddingBottom: "80px", width: "100%" }}
      >
        <div className="coaches-grid">
          {COACHES.map((coach) => <CoachCard key={coach.name} coach={coach} />)}
        </div>
      </div>

      {/* ── CTA ── */}
      <section
        className="page-px page-py-lg"
        style={{
          backgroundColor: "var(--accent)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
          width: "100%",
        }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--on-accent)", textAlign: "center", margin: 0 }}>
          Come meet the team.
        </p>
        <Link
          href="/visit"
          className="btn-light"
          style={{ backgroundColor: "var(--text)", color: "var(--bg)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "16px 30px", borderRadius: "10px", textDecoration: "none" }}
        >
          Book a visit
        </Link>
      </section>
    </>
  );
}
