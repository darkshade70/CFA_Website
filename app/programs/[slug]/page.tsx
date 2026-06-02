import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const ss3 = "'Source Sans 3', sans-serif";

// ── Hero images per discipline (local assets) ─────────────────────────────────
const HERO_IMAGES = {
  foil:       "/fencing1.jpg",
  epee:       "/fencing2.webp",
  sabre:      "/fencing3.jpg",
  historical: "/fencing4.avif",
};

// ── Class card images — cycle through all stock images ────────────────────────
const ALL_STOCK = [
  "/fencing1.jpg",
  "/fencing2.webp",
  "/fencing3.jpg",
  "/fencing4.avif",
  "/fencing5.webp",
  "/fencing6.webp",
  "/fencing7.avif",
  "/fencing8.jpg",
  "/fencing9.webp",
  "/fencing10.avif",
];
const CLASS_IMAGES: Record<string, string[]> = {
  foil:       ALL_STOCK,
  epee:       ALL_STOCK,
  sabre:      ALL_STOCK,
  historical: ALL_STOCK,
};

// ── Program data (Figma node 1:1718 for Foil) ────────────────────────────────
const PROGRAMS: Record<string, {
  name: string;
  tagline: string;
  whatIsIt: [string, string];
  ctaHeading: string;
  classes: {
    name: string;
    desc: string;
    price: string;
    period: string;
    features: string[];
    featured?: boolean;
    ctaLabel: string;
    ctaType: "primary" | "secondary";
  }[];
}> = {
  foil: {
    name: "Foil",
    tagline: "Precision. Timing. Control.",
    whatIsIt: [
      "Foil is fast and explosive, with the target limited to the torso. Right-of-way rules mean you have to earn the hit — not just land it.",
      "Training builds footwork, blade control and tactical awareness, from fundamentals through to competition if that's your goal.",
    ],
    ctaHeading: "Not sure where to start?",
    classes: [
      {
        name: "Beginner Youth foil",
        desc: "Brand new? Everyone starts here — all gear provided.",
        price: "$275",
        period: "8-week course",
        features: ["No experience needed", "For ages 8 to 21", "Free intro session"],
        featured: true,
        ctaLabel: "Register Now →",
        ctaType: "primary",
      },
      {
        name: "Youth Intermediate",
        desc: "Once the basics click — refine technique and start sparring.",
        price: "$200",
        period: "/ month",
        features: ["Ongoing weekly training", "By assessment"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
      {
        name: "Youth Advanced",
        desc: "Competition-focused training for the provincial circuit.",
        price: "From $175",
        period: "/ month",
        features: ["Provincial-competition stream", "By assessment"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
      {
        name: "Youth Expert",
        desc: "Elite training for national-level competitors.",
        price: "From $175",
        period: "/ month",
        features: ["National-competition stream", "By assessment"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
      {
        name: "Adult foil",
        desc: "Train at your own pace — all skill levels welcome.",
        price: "From $160",
        period: "/ month",
        features: ["Ongoing weekly training", "All levels"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
    ],
  },
  epee: {
    name: "Épée",
    tagline: "Distance. Patience. The duel.",
    whatIsIt: [
      "Épée is the heaviest weapon in Olympic fencing, and the entire body is a valid target — no right-of-way rules. First to land a clean touch wins the point.",
      "Training focuses on distance management, timing, and precise point control. A measured, tactical style that rewards patience and awareness.",
    ],
    ctaHeading: "Ready to pick up the épée?",
    classes: [
      {
        name: "Beginner Épée",
        desc: "Complete beginners welcome. All equipment provided.",
        price: "$275",
        period: "8-week course",
        features: ["No experience needed", "All ages", "Free intro session"],
        featured: true,
        ctaLabel: "Register Now →",
        ctaType: "primary",
      },
      {
        name: "Intermediate Épée",
        desc: "Refine your technique and start competitive bouting.",
        price: "$180",
        period: "/ month",
        features: ["Ongoing weekly training", "By assessment"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
      {
        name: "Adult Épée",
        desc: "Train at your own pace — all levels welcome.",
        price: "From $160",
        period: "/ month",
        features: ["All skill levels", "Ongoing"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
    ],
  },
  sabre: {
    name: "Sabre",
    tagline: "Speed. Aggression. Initiative.",
    whatIsIt: [
      "Sabre is the most athletic weapon — fast, aggressive, with the target covering everything above the waist. Right-of-way rules reward initiative and explosive movement.",
      "Training emphasizes explosive footwork, cutting actions, and the mental game of controlling tempo and initiative during every exchange.",
    ],
    ctaHeading: "Ready to move fast?",
    classes: [
      {
        name: "Beginner Sabre",
        desc: "New to sabre? Start here — all gear provided.",
        price: "$275",
        period: "8-week course",
        features: ["No experience needed", "Ages 8+", "Free intro session"],
        featured: true,
        ctaLabel: "Register Now →",
        ctaType: "primary",
      },
      {
        name: "Youth Sabre",
        desc: "Ongoing competitive training for youth sabreurs.",
        price: "$180",
        period: "/ month",
        features: ["Ongoing weekly training", "By assessment"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
      {
        name: "Adult Sabre",
        desc: "Dynamic, high-energy training for adult fencers.",
        price: "From $160",
        period: "/ month",
        features: ["All levels", "Ongoing"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
    ],
  },
  historical: {
    name: "Historical",
    tagline: "Tradition. Context. Craft.",
    whatIsIt: [
      "Historical European Martial Arts (HEMA) encompasses longsword, rapier, dagger, and more — martial systems drawn from historical manuscripts and taught with proper context and discipline.",
      "Classes cover technique, historical context, and sparring with appropriate protective gear. A fascinating complement to Olympic fencing, or a path entirely its own.",
    ],
    ctaHeading: "Interested in historical fencing?",
    classes: [
      {
        name: "Historical Intro",
        desc: "An introduction to HEMA — longsword and historical context.",
        price: "$275",
        period: "8-week course",
        features: ["All gear provided", "No experience needed", "Ages 14+"],
        featured: true,
        ctaLabel: "Register Now →",
        ctaType: "primary",
      },
      {
        name: "Historical Ongoing",
        desc: "Ongoing HEMA training — technique, sparring, and study.",
        price: "From $150",
        period: "/ month",
        features: ["Ongoing weekly sessions", "By assessment"],
        ctaLabel: "Book assessment →",
        ctaType: "secondary",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PROGRAMS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prog = PROGRAMS[slug];
  if (!prog) return {};
  return { title: `${prog.name} Fencing` };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prog = PROGRAMS[slug];
  if (!prog) notFound();

  return (
    <>
      {/* Nav spacer */}
      <div className="nav-spacer" />

      {/* ── Hero + intro (node 1:1720) — 655px desktop so card fits inside ── */}
      <div
        data-node-id="1:1720"
        className="hero-programs"
        style={{
          backgroundColor: "var(--bg)",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
          width: "100%",
        }}
      >
        {/* Hero background — fencing action photo per discipline */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGES[slug as keyof typeof HERO_IMAGES] ?? HERO_IMAGES.foil}
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(128,0,23,0.72) 0%, rgba(12,11,11,0.55) 60%, rgba(12,11,11,0.3) 100%)",
          }}
        />
        {/* Title + tagline — responsive via CSS classes */}
        <p
          className="program-hero-name h-hero"
          style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}
        >
          {prog.name}
        </p>
        <p
          className="program-hero-tagline"
          style={{ fontFamily: ss3, fontWeight: 400, fontSize: "20px", lineHeight: "27px", color: "var(--text)", margin: 0 }}
        >
          {prog.tagline}
        </p>

        {/* "What is X?" card — DESKTOP ONLY: absolute at bottom of hero (node 1:1725) */}
        <div
          className="program-what-card"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "16px 16px 0 0",
            padding: "40px 44px",
            gap: "16px",
          }}
        >
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "36px", lineHeight: "39px", letterSpacing: "-0.18px", color: "var(--text)", margin: 0 }}>
            What is {prog.name.toLowerCase()}?
          </p>
          {prog.whatIsIt.map((para, i) => (
            <p key={i} style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", margin: 0 }}>
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* "What is X?" card — MOBILE ONLY: shown outside hero */}
      <div
        className="program-what-card-mobile"
        style={{
          backgroundColor: "var(--surface)",
          borderBottom: "1px solid var(--border)",
          padding: "32px 24px",
          gap: "16px",
          width: "100%",
        }}
      >
        <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "28px", lineHeight: "34px", color: "var(--text)", margin: 0 }}>
          What is {prog.name.toLowerCase()}?
        </p>
        {prog.whatIsIt.map((para, i) => (
          <p key={i} style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", margin: 0 }}>
            {para}
          </p>
        ))}
      </div>

      {/* ── Classes section (node 1:1729) ── */}
      <section
        className="programs-classes-section page-px page-py-xl"
        style={{
          backgroundColor: "var(--light-bg)",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
          width: "100%",
        }}
      >
        <p
          className="programs-section-heading h-section"
          style={{
            fontFamily: ss3,
            fontWeight: 700,
            color: "var(--light-text)",
            margin: 0,
          }}
        >
          Start your {prog.name} journey
        </p>

        {/* Wrapping card grid — 368px wide each on desktop, full-width on mobile */}
        <div
          className="card-row"
          style={{ flexWrap: "wrap" }}
        >
          {prog.classes.map((cls, idx) => (
            <div
              key={cls.name}
              className={`programs-class-card program-card program-card-hoverable ${cls.featured ? "programs-class-card-featured-border" : "programs-class-card-border"}`}
              style={{
                backgroundColor: "var(--light-surface)",
                border: cls.featured
                  ? "2px solid var(--accent)"
                  : "1px solid var(--light-border)",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Class image */}
              <div style={{ height: "180px", flexShrink: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={(CLASS_IMAGES[slug] ?? CLASS_IMAGES.foil)[idx % (CLASS_IMAGES[slug] ?? CLASS_IMAGES.foil).length]}
                  alt={cls.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              {/* Card body */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "22px 22px 24px" }}>
                <p className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--light-text)", margin: 0 }}>
                  {cls.name}
                </p>
                <p className="programs-class-card-text2" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--light-text-2)", margin: 0 }}>
                  {cls.desc}
                </p>
                {/* Divider */}
                <div className="programs-class-card-border" style={{ backgroundColor: "var(--light-border)", height: "1px" }} />
                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cls.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", flexShrink: 0 }}>✓</span>
                      <span className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--light-text)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                {/* Price */}
                <p className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--light-text)", margin: 0 }}>
                  {cls.price} · {cls.period}
                </p>
                {/* CTA */}
                <Link
                  href="/register"
                  className={cls.ctaType === "primary" ? "btn-primary" : "btn-secondary"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: cls.ctaType === "primary" ? "var(--accent)" : "transparent",
                    border: cls.ctaType === "secondary" ? "1.5px solid var(--border-strong)" : "none",
                    color: cls.ctaType === "primary" ? "var(--on-accent)" : "var(--light-text)",
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "20px",
                    padding: "15px 26px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  {cls.ctaLabel}
                </Link>
                {cls.ctaType === "primary" && (
                  <Link
                    href="/contact"
                    className="link-hover"
                    style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--accent)", textDecoration: "none" }}
                  >
                    Questions? Get in touch →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

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
          {prog.ctaHeading}
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--on-accent)", textAlign: "center", maxWidth: "560px", margin: 0 }}>
          Get in touch — a quick assessment and we'll place you in the right class.
        </p>
        <Link
          href="/register"
          className="btn-light"
          style={{ backgroundColor: "var(--text)", color: "var(--bg)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "16px 30px", borderRadius: "10px", textDecoration: "none" }}
        >
          Book a free visit
        </Link>
      </section>
    </>
  );
}
