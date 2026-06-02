import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Start Fencing — Beginners" };

const ss3 = "'Source Sans 3', sans-serif";

const CLASSES = [
  {
    name: "Youth Beginners",
    age: "Ages 7–14",
    desc: "A structured 8-week intro built for kids with zero fencing experience. All gear is provided — just show up.",
    features: [
      "No experience required",
      "All gear provided",
      "Small coached groups",
      "Free intro session",
    ],
    price: "$275",
    period: "8-week course",
    img: "/fencing5.webp",
  },
  {
    name: "Adult Beginners",
    age: "Ages 14+",
    desc: "An 8-week course for first-time adult fencers. Whether you're 16 or 60, we start from zero and build from there.",
    features: [
      "No experience required",
      "All gear provided",
      "Learn at your own pace",
      "Free intro session",
    ],
    price: "$275",
    period: "8-week course",
    img: "/fencing6.webp",
  },
];

const EXPECT = [
  {
    n: "01",
    heading: "No gear needed",
    body: "We lend you a mask, jacket and blade for the whole 8-week course. Nothing to buy before you start.",
  },
  {
    n: "02",
    heading: "Small groups",
    body: "Classes are kept small so coaches can give you real feedback from day one — not just watch from the side.",
  },
  {
    n: "03",
    heading: "8 weeks to sparring",
    body: "By the end of the course you'll know the fundamentals and be ready to fence a real bout.",
  },
];

export default function BeginnersPage() {
  return (
    <>
      <div className="nav-spacer" />

      {/* ── HERO ── */}
      <div
        className="hero-720"
        style={{ position: "relative", overflow: "hidden", backgroundColor: "#1a1713", width: "100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fencing1.jpg"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
        />
        <div
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(12,11,11,0.92) 0%, rgba(12,11,11,0.55) 50%, rgba(12,11,11,0.25) 100%)",
          }}
        />
        <div className="hero-text-block">
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>
            New to fencing
          </p>
          <p className="h-display" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Beginners
          </p>
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "var(--text-2)", margin: 0 }}>
            No experience needed. No gear. No idea what weapon to pick. That&apos;s fine — we&apos;ve got you.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link
              href="#classes"
              className="btn-primary"
              style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              See classes →
            </Link>
            <Link
              href="/visit"
              className="btn-ghost"
              style={{ border: "1.5px solid var(--border-strong)", color: "var(--text)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              Book a free visit
            </Link>
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section
        className="page-px"
        style={{ backgroundColor: "var(--bg)", paddingTop: "80px", paddingBottom: "80px", width: "100%", display: "flex", flexDirection: "column", gap: "24px", maxWidth: "100%" }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Get started with fencing
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "30px", color: "var(--text-2)", maxWidth: "680px", margin: 0 }}>
          Most people come in with no idea what foil, épée or sabre means — and that&apos;s exactly the right place to start. Our beginner courses introduce the fundamentals: footwork, blade control, and the basic rules of a bout. You pick a weapon later.
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "30px", color: "var(--text-2)", maxWidth: "680px", margin: 0 }}>
          Both our youth and adult programs run in small groups across 8 weeks. By the end you&apos;ll know enough to keep going — or to decide it&apos;s not for you. Either is fine.
        </p>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section
        className="page-px"
        style={{ backgroundColor: "var(--surface)", width: "100%", paddingTop: "64px", paddingBottom: "64px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="beginners-expect-grid">
          {EXPECT.map((e) => (
            <div key={e.n} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>
                {e.n}
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "22px", lineHeight: "28px", color: "var(--text)", margin: 0 }}>
                {e.heading}
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "var(--text-2)", margin: 0 }}>
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLASS CARDS ── */}
      <section
        id="classes"
        className="page-px"
        style={{ backgroundColor: "var(--light-bg)", paddingTop: "72px", paddingBottom: "72px", width: "100%", display: "flex", flexDirection: "column", gap: "40px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--light-text)", margin: 0 }}>
            Start your fencing journey
          </p>
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--light-text-2)", margin: 0 }}>
            Two options — pick your age group. Both start from absolute zero.
          </p>
        </div>

        <div className="card-row">
          {CLASSES.map((cls) => (
            <div
              key={cls.name}
              style={{
                flex: "1 0 0", minWidth: 0,
                backgroundColor: "var(--light-surface)",
                border: "1px solid var(--light-border)",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Photo */}
              <div style={{ height: "220px", flexShrink: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cls.img} alt={cls.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>

              {/* Body */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "28px 28px 32px" }}>
                {/* Top */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "28px", lineHeight: "34px", color: "var(--light-text)", margin: 0 }}>
                    {cls.name}
                  </p>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "20px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>
                    {cls.age}
                  </p>
                  <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "var(--light-text-2)", margin: "4px 0 0" }}>
                    {cls.desc}
                  </p>

                  {/* Divider */}
                  <div style={{ height: "1px", backgroundColor: "var(--light-border)", margin: "8px 0" }} />

                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {cls.features.map((f) => (
                      <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--accent)", fontWeight: 700, fontSize: "16px", lineHeight: "24px", flexShrink: 0 }}>✓</span>
                        <span style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "24px", color: "var(--light-text)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom — pinned */}
                <div style={{ marginTop: "28px", display: "flex", flexDirection: "column", gap: "14px" }}>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "22px", lineHeight: "28px", color: "var(--light-text)", margin: 0 }}>
                    {cls.price} <span style={{ fontWeight: 400, fontSize: "16px", color: "var(--light-text-2)" }}>· {cls.period}</span>
                  </p>
                  <Link
                    href="/register"
                    className="btn-primary"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "16px 26px", borderRadius: "10px", textDecoration: "none", textAlign: "center" }}
                  >
                    Register Now →
                  </Link>
                  <Link
                    href="/contact"
                    className="link-hover"
                    style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--accent)", textDecoration: "none", textAlign: "center" }}
                  >
                    Questions? Get in touch →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="page-px page-py-lg"
        style={{ backgroundColor: "var(--accent)", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", width: "100%" }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--on-accent)", textAlign: "center", margin: 0 }}>
          Not sure where to start?
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--on-accent)", textAlign: "center", maxWidth: "520px", margin: 0 }}>
          Get in touch — a quick chat and we&apos;ll point you in the right direction. No pressure, no commitment.
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
