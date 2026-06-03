import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramCards from "@/components/ProgramCards";
import { client, urlFor, programBySlugQuery } from "@/lib/sanity";

const ss3 = "'Source Sans 3', sans-serif";

// ── Hero images per discipline (local assets, used as fallback) ───────────────
const HERO_IMAGES: Record<string, string> = {
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

// ── Hardcoded program data — fallback when Sanity has no content yet ──────────
type ClassData = {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  ctaType: "primary" | "secondary";
};

type ProgramData = {
  name: string;
  tagline: string;
  whatIsIt: [string, string];
  ctaHeading: string;
  classes: ClassData[];
};

const PROGRAMS: Record<string, ProgramData> = {
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
        name: "General Épée",
        desc: "Open to all skill levels — complete beginners through experienced fencers. Equipment provided for newcomers.",
        price: "From $160",
        period: "/ month",
        features: ["All skill levels welcome", "Beginners to advanced", "Equipment provided for newcomers"],
        ctaLabel: "Register Now →",
        ctaType: "primary",
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
        name: "Historical Fencing",
        desc: "HEMA training open to all levels — longsword, rapier, dagger, and more. All gear provided for beginners.",
        price: "From $150",
        period: "/ month",
        features: ["All gear provided", "No experience needed", "Ages 14+"],
        ctaLabel: "Register Now →",
        ctaType: "primary",
      },
    ],
  },
};

// Known slugs for static generation (always include hardcoded; Sanity additions are dynamic)
const KNOWN_SLUGS = Object.keys(PROGRAMS);

export async function generateStaticParams() {
  // Include hardcoded slugs; if Sanity has extra, Next.js will handle them at request time
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fallback = PROGRAMS[slug];

  try {
    const prog = await client.fetch(programBySlugQuery, { slug });
    if (prog?.name) return { title: `${prog.name} Fencing` };
  } catch {}

  if (fallback) return { title: `${fallback.name} Fencing` };
  return {};
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Try Sanity first
  let prog: ProgramData | null = null;
  let heroImgSrc: string = HERO_IMAGES[slug] ?? HERO_IMAGES.foil;
  let classImgs: string[] = ALL_STOCK;

  try {
    const sanityProg = await client.fetch(programBySlugQuery, { slug });

    if (sanityProg?._id) {
      // Build whatIsIt: Sanity stores it as a single text block; split on double-newline or use as one para
      const rawWhat: string = sanityProg.whatIsIt ?? "";
      const parts = rawWhat.split(/\n\n+/).filter(Boolean);
      const whatIsIt: [string, string] = parts.length >= 2
        ? [parts[0], parts.slice(1).join("\n\n")]
        : [rawWhat, ""];

      // Hero image: prefer Sanity asset, fall back to local
      if (sanityProg.heroImage) {
        heroImgSrc = urlFor(sanityProg.heroImage).width(1600).height(700).fit("crop").url();
      }

      // Classes: map Sanity classes to our format; images from Sanity or stock fallback
      const mappedClasses: ClassData[] = (sanityProg.classes ?? []).map((c: any, i: number) => ({
        name: c.name ?? "",
        desc: c.desc ?? c.level ?? "",
        price: c.price ?? "",
        period: c.period ?? "",
        features: c.features ?? [],
        featured: c.featured ?? false,
        ctaLabel: c.ctaLabel ?? "Register Now →",
        ctaType: (c.ctaType === "primary" ? "primary" : "secondary") as "primary" | "secondary",
      }));

      // Class images: if Sanity classes have images use those, otherwise stock
      const hasClassImgs = (sanityProg.classes ?? []).some((c: any) => c.image);
      if (hasClassImgs) {
        classImgs = (sanityProg.classes ?? []).map((c: any) =>
          c.image ? urlFor(c.image).width(600).height(400).fit("crop").url() : ALL_STOCK[0]
        );
      }

      prog = {
        name: sanityProg.name,
        tagline: sanityProg.tagline ?? "",
        whatIsIt,
        ctaHeading: sanityProg.ctaHeading ?? "Ready to start?",
        classes: mappedClasses,
      };
    }
  } catch (err) {
    console.error("Sanity fetch failed for program:", slug, err);
  }

  // Fall back to hardcoded
  if (!prog) {
    prog = PROGRAMS[slug] ?? null;
  }

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
          src={heroImgSrc}
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
          {prog.whatIsIt.filter(Boolean).map((para, i) => (
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
        {prog.whatIsIt.filter(Boolean).map((para, i) => (
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

        <ProgramCards
          classes={prog.classes}
          imgs={classImgs}
          slug={slug}
        />
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
          href="/visit"
          className="btn-light"
          style={{ backgroundColor: "var(--text)", color: "var(--bg)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "16px 30px", borderRadius: "10px", textDecoration: "none" }}
        >
          Book a free visit
        </Link>
      </section>
    </>
  );
}
