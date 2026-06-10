import Link from "next/link";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { client, testimonialsQuery } from "@/lib/sanity";


// ── Local image assets (public/ directory) ───────────────────────────────────
const STOCK = {
  hero: "/hero.jpg",
  foil: "/fencing1.jpg",
  epee: "/fencing2.webp",
  sabre: "/fencing3.jpg",
  historical: "/fencing4.avif",
  coach1: "/fencing5.webp",
  coach2: "/fencing6.webp",
  coach3: "/fencing7.avif",
};

const PROGRAMS = [
  {
    slug: "foil",
    name: "Foil",
    img: STOCK.foil,
    description:
      "A highly technical discipline focused on point control and strategy, where athletes score strictly on the torso using rules that reward tactical initiative.",
  },
  {
    slug: "epee",
    name: "Épée",
    img: STOCK.epee,
    description:
      "The whole body is the target and no right-of-way rules apply — first clean touch wins. A measured, patient style that rewards awareness and timing.",
  },
  {
    slug: "sabre",
    name: "Sabre",
    img: STOCK.sabre,
    description:
      "A fast-paced, athletic discipline modeled after cavalry combat, where athletes use both the edge and tip of the blade for rapid, decisive movements.",
  },
  {
    slug: "historical",
    name: "Historical",
    img: STOCK.historical,
    description:
      "Longsword, rapier and more — martial systems drawn from historical manuscripts and taught with proper context and discipline.",
  },
];

const COACHES = [
  {
    name: "Alice Lu",
    role: "President & head coach",
    bio: "25+ years of fencing, 15+ building CFA into one of Ontario's largest clubs.",
    img: "/coach-alice.png",
    imgPos: "center 20%",
  },
  {
    name: "Brily Lepine",
    role: "Foil & historical coach",
    bio: "Fencing since the early '90s across weapons and styles.",
    img: "/coach-brily.png",
    imgPos: "center 20%",
  },
  {
    name: "Kyle Foster",
    role: "Owner & veteran fencer",
    bio: "Active veteran competitor who runs the club operations and programming.",
    img: "/coach-kyle.png",
    imgPos: "center 20%",
  },
];

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=aa74034db299556c&sxsrf=ANbL-n4_KFmTJYo7cQLPaK_AG2Q9ydn9DA:1780328026715&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x6WaS1PIM8aaYnLcqFV8ZoVYbQCh0N8Wm42XbcACcBLMIa5EOiIA4u1YyAjQ-Q_NGjn3ayCm6dqFMb3iklBUnNmOTo0sQgMZEC-x-lHnnGz-4oQJyA%3D%3D&q=Canadian+Fencing+Academy+Reviews&sa=X&ved=2ahUKEwi7yPbcruaUAxV3GoYAHbsZNLAQ0bkNegQIHxAH&biw=1710&bih=981&dpr=2";

const FAQS = [
  [
    {
      q: "Do we need to buy gear?",
      a: "Nope. We provide masks, jackets and blades for beginner classes. Just bring gym clothes and clean indoor shoes.",
    },
    {
      q: "How old does my kid need to be?",
      a: "We start kids at 8 — and we run adult classes too. Plenty of members first picked up a blade in their 30s and 40s.",
    },
  ],
  [
    {
      q: "Is it actually safe?",
      a: "Very. Fencing has one of the lowest injury rates in sport, and our co-owner sits on the FIE's medical commission.",
    },
    {
      q: "I've fenced before — where do I fit?",
      a: "Come in for a quick assessment and we'll slot you into the right group.",
    },
  ],
];

// ── Shared style constants (from Figma tokens) ──────────────────────────────
const ss3 = "'Source Sans 3', sans-serif";

export default async function HomePage() {
  let testimonials: any[] = [];
  try {
    testimonials = await client.fetch(testimonialsQuery);
  } catch (err) {
    console.error("Sanity fetch failed for testimonials:", err);
  }

  return (
    <>
      {/* ── NAV SPACER ─────────────────────────────────────────────────────── */}
      <div className="nav-spacer" />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        data-node-id="1:1610"
        className="hero-720"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#1a1713",
          flexShrink: 0,
          width: "100%",
        }}
      >
        {/* Hero background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={STOCK.hero}
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
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
        {/* Hero text block — responsive via CSS class */}
        <div className="hero-text-block" data-node-id="1:1613">
          <div
            className="hero-heading"
            style={{ fontFamily: ss3, color: "var(--text)" }}
          >
            <p>Ready?</p>
            <p>Let's fence.</p>
          </div>
          <p
            style={{
              fontFamily: ss3,
              fontWeight: 400,
              fontSize: "19px",
              lineHeight: "27px",
              color: "var(--text)",
            }}
          >
            We offer a wide range of programs from Introduction to Fencing to
            Advanced Competitive Training. Our club operates 7 days a week with
            7 full-length pistes.
          </p>
          <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap", paddingTop: "8px" }}>
            <Link
              href="/register"
              className="btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "var(--accent)",
                color: "var(--on-accent)",
                fontFamily: ss3,
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "20px",
                padding: "15px 26px",
                borderRadius: "10px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Register Now →
            </Link>
            <Link
              href="/programs/foil"
              className="btn-ghost"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                border: "1.5px solid var(--border-strong)",
                color: "var(--text)",
                fontFamily: ss3,
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "20px",
                padding: "15px 26px",
                borderRadius: "10px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              View Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR PROGRAMS ──────────────────────────────────────────────────── */}
      <section
        data-node-id="1:1619"
        className="page-px page-py-88"
        style={{
          backgroundColor: "var(--light-bg)",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        {/* Heading block */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <p
            className="h-section"
            style={{
              fontFamily: ss3,
              fontWeight: 700,
              color: "var(--light-text)",
            }}
          >
            Our Programs
          </p>
          <p
            style={{
              fontFamily: ss3,
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "27px",
              color: "var(--light-text-2)",
              maxWidth: "640px",
            }}
          >
            Learn about our programs below. New to fencing? We'll help you find the right fit.
          </p>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            <Link
              href="/visit"
              className="link-hover"
              style={{
                fontFamily: ss3,
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              Book a free tour →
            </Link>
            <Link
              href="/contact"
              className="link-hover"
              style={{
                fontFamily: ss3,
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                color: "var(--accent)",
                textDecoration: "none",
              }}
            >
              Questions? Contact us →
            </Link>
          </div>
        </div>

        {/* 4 program cards */}
        <div className="card-row">
          {PROGRAMS.map((prog) => (
            <div
              key={prog.slug}
              style={{
                flex: "1 0 0",
                minWidth: 0,
                backgroundColor: "var(--light-surface)",
                border: "1px solid var(--light-border)",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Program image */}
              <div style={{ height: "170px", flexShrink: 0, width: "100%", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={prog.img} alt={prog.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {/* Card body */}
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flexGrow: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "var(--light-text)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {prog.name}
                </p>
                <p
                  style={{
                    fontFamily: ss3,
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "var(--light-text-2)",
                    flexGrow: 1,
                  }}
                >
                  {prog.description}
                </p>
                <Link
                  href={`/programs/${prog.slug}`}
                  className="btn-primary"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    backgroundColor: "var(--accent)",
                    color: "var(--on-accent)",
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "20px",
                    padding: "15px 26px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUR COACHES ───────────────────────────────────────────────────── */}
      <section
        data-node-id="1:1651"
        className="coaches-home-section page-px page-py-88"
        style={{
          backgroundColor: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        <div className="coaches-home-header" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p
            className="h-section"
            style={{
              fontFamily: ss3,
              fontWeight: 700,
              color: "var(--text)",
            }}
          >
            Our Coaches
          </p>
          <p
            style={{
              fontFamily: ss3,
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "27px",
              color: "var(--text-2)",
            }}
          >
            Competitors and career coaches.
          </p>
        </div>

        <div className="coaches-cards-row">
          {COACHES.map((coach) => (
            <div
              key={coach.name}
              className="coach-card-home"
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
              <div style={{ height: "260px", flexShrink: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={coach.img} alt={coach.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: (coach as any).imgPos ?? "center top", display: "block" }} />
              </div>
              {/* Card body */}
              <div
                style={{
                  padding: "22px 22px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <p
                  style={{
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "32px",
                    color: "var(--text)",
                  }}
                >
                  {coach.name}
                </p>
                <p
                  style={{
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    color: "var(--accent-text)",
                  }}
                >
                  {coach.role}
                </p>
                <p
                  style={{
                    fontFamily: ss3,
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "28px",
                    color: "var(--text-2)",
                  }}
                >
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section
        data-node-id="1:1673"
        className="page-px page-py-88"
        style={{
          backgroundColor: "var(--surface)",
          width: "100%",
        }}
      >
        <TestimonialsCarousel googleReviewsUrl={GOOGLE_REVIEWS_URL} testimonials={testimonials} />
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        data-node-id="1:1695"
        className="page-px page-py-88"
        style={{
          backgroundColor: "var(--light-bg)",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        <p
          className="h-section"
          style={{
            fontFamily: ss3,
            fontWeight: 700,
            color: "var(--light-text)",
          }}
        >
          Frequently Asked Questions
        </p>
        <div className="faq-grid">
          {FAQS.map((col, ci) => (
            <div
              key={ci}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {col.map((item) => (
                <div key={item.q} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p
                    style={{
                      fontFamily: ss3,
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "32px",
                      color: "var(--light-text)",
                    }}
                  >
                    {item.q}
                  </p>
                  <p
                    style={{
                      fontFamily: ss3,
                      fontWeight: 400,
                      fontSize: "18px",
                      lineHeight: "28px",
                      color: "var(--light-text-2)",
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section
        data-node-id="1:1712"
        className="page-px page-py-xl"
        style={{
          backgroundColor: "var(--accent)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <p
          className="h-cta"
          style={{
            fontFamily: ss3,
            fontWeight: 700,
            color: "var(--on-accent)",
            textAlign: "center",
          }}
        >
          Ready? Let's fence.
        </p>
        <p
          style={{
            fontFamily: ss3,
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "27px",
            color: "var(--on-accent)",
            textAlign: "center",
            maxWidth: "560px",
          }}
        >
          Come see the club, meet a coach, and find the right class. No experience or gear needed.
        </p>
        <Link
          href="/register"
          className="btn-light"
          style={{
            backgroundColor: "var(--text)",
            color: "var(--bg)",
            fontFamily: ss3,
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "20px",
            padding: "16px 30px",
            borderRadius: "10px",
            textDecoration: "none",
          }}
        >
          Register Now
        </Link>
      </section>
    </>
  );
}
