import Link from "next/link";
import type { Metadata } from "next";
import { client, urlFor, coachesQuery } from "@/lib/sanity";

// Re-fetch from Sanity every 60 seconds
export const revalidate = 60;

export const metadata: Metadata = { title: "Coaches" };

const ss3 = "'Source Sans 3', sans-serif";

// Fallback used when Sanity has no coaches entered yet
const COACHES_FALLBACK = [
  {
    _id: "alice",
    name: "Alice Lu",
    role: "President & head coach",
    bio: "Twenty-five years of fencing and fifteen building CFA into one of Ontario's largest clubs. Alice oversees every program and still coaches on the floor every week.",
    photo: null,
    imgSrc: "/coach-alice.png",
    imgPos: "center 15%",
  },
  {
    _id: "brily",
    name: "Brily Lepine",
    role: "Foil & historical coach",
    bio: "Fencing since the early '90s across foil, longsword and rapier. Brily leads our historical program and brings decades of teaching to every session.",
    photo: null,
    imgSrc: "/coach-brily.png",
    imgPos: "center top",
  },
  {
    _id: "kyle",
    name: "Kyle Foster",
    role: "Owner & veteran fencer",
    bio: "Active veteran competitor who runs the club operations and programming. Kyle brings decades of competitive experience to every class he leads.",
    photo: null,
    imgSrc: "/coach-kyle.png",
    imgPos: "center top",
  },
  {
    _id: "anna",
    name: "Anna",
    role: "Coach",
    bio: "Dedicated coach with a passion for developing fencers at every level. Anna works across multiple programs and brings energy and precision to every session.",
    photo: null,
    imgSrc: "/coach-anna.png",
    imgPos: "center 30%",
  },
  {
    _id: "brendon",
    name: "Brendon",
    role: "Coach",
    bio: "A skilled fencer and coach committed to helping athletes reach their potential. Brendon's technical approach and patience make him a favourite among students.",
    photo: null,
    imgSrc: "/coach-brendon.png",
    imgPos: "center 6%",
  },
  {
    _id: "ethan",
    name: "Ethan",
    role: "Coach",
    bio: "Ethan combines competitive experience with a natural ability to teach. He works with youth and adult fencers alike, focusing on fundamentals and game sense.",
    photo: null,
    imgSrc: "/coach-ethan.png",
    imgPos: "center 10%",
  },
];

type SanityCoach = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo: any;
  imgPos?: string;
};

type CoachDisplay = {
  _id: string;
  name: string;
  role: string;
  bio: string;
  imgSrc: string;
  imgPos: string;
};

function CoachCard({ coach }: { coach: CoachDisplay }) {
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
      <div className="coach-photo" style={{ height: "340px", flexShrink: 0, width: "100%", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coach.imgSrc}
          alt={coach.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: coach.imgPos, display: "block" }}
        />
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

export default async function CoachesPage() {
  // Fetch from Sanity; fall back to hardcoded if CMS is empty
  let coaches: CoachDisplay[] = [];

  try {
    const sanityCoaches: SanityCoach[] = await client.fetch(coachesQuery);

    if (sanityCoaches && sanityCoaches.length > 0) {
      coaches = sanityCoaches.map((c) => ({
        _id: c._id,
        name: c.name,
        role: c.role ?? "",
        bio: c.bio ?? "",
        imgSrc: c.photo ? urlFor(c.photo).width(600).height(680).fit("crop").url() : "/placeholder-coach.png",
        imgPos: c.imgPos ?? "center top",
      }));
    }
  } catch (err) {
    console.error("Sanity fetch failed, using fallback coaches:", err);
  }

  // Use fallback if Sanity returned nothing
  if (coaches.length === 0) {
    coaches = COACHES_FALLBACK.map((c) => ({
      _id: c._id,
      name: c.name,
      role: c.role,
      bio: c.bio,
      imgSrc: c.imgSrc,
      imgPos: c.imgPos,
    }));
  }

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
          {coaches.map((coach) => <CoachCard key={coach._id} coach={coach} />)}
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
