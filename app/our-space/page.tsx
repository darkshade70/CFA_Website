import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Space" };

const ss3 = "'Source Sans 3', sans-serif";

const FEATURES = [
  {
    heading: "Eighteen full-length pistes",
    body: "Eighteen regulation strips with electric scoring on every one. Whether you're drilling footwork or fencing a bout, you're always on competition-grade ground.",
    bullets: ["Electric scoring on every strip", "Regulation 14-metre pistes", "Room for 40 fencers at once"],
    photoLeft: true,
    img: "/fencing2.webp",
    bg: "var(--bg)",
  },
  {
    heading: "A sprung maple floor",
    body: "A proper sprung maple sports floor underfoot — built for the explosive footwork fencing demands, and easy on the joints over a long session.",
    bullets: ["Purpose-built sprung maple", "Kinder on knees and ankles"],
    photoLeft: false,
    img: "/fencing3.jpg",
    bg: "var(--surface)",
  },
  {
    heading: "Everything on site",
    body: "Change rooms, a pro shop and armoury, loaner gear for newcomers, and a viewing area so parents can watch every touch — with free parking at the door.",
    bullets: ["Pro shop & armoury", "Loaner gear for beginners", "Viewing area for parents", "Free parking"],
    photoLeft: true,
    img: "/fencing4.avif",
    bg: "var(--bg)",
  },
];

const AT_A_GLANCE = [
  "18 full-length pistes", "Electric scoring", "Sprung maple floor",
  "Change rooms", "Loaner gear", "Pro shop & armoury",
  "Viewing area", "Free parking", "Open 7 days", "Two locations",
];

export default function OurSpacePage() {
  return (
    <>
      {/* Nav spacer */}
      <div className="nav-spacer" />

      {/* ── HERO (node 1:2018) — 600px with fencing photo + text overlay ── */}
      <div
        data-node-id="1:2018"
        className="hero-ourspace"
        style={{ position: "relative", overflow: "hidden", backgroundColor: "#1a1713", width: "100%" }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fencing1.jpg"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(12,11,11,0.88) 0%, rgba(12,11,11,0.65) 55%, rgba(12,11,11,0.25) 100%)",
          }}
        />

        {/* Content block — positioned at left: 120px, top: 220px in Figma */}
        <div className="ourspace-hero-content">
          {/* "OUR FACILITY" eyebrow label */}
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "12px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", textTransform: "uppercase", margin: 0 }}>
            Our facility
          </p>
          {/* "Our space." heading */}
          <p className="h-display" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Our space.
          </p>
          {/* Description */}
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", maxWidth: "560px", margin: 0 }}>
            A purpose-built fencing club — not a gym we borrow two nights a week. Open seven days, now at two Oakville locations.
          </p>
          {/* Mini-stats row */}
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {[
              { num: "18", label: "Full-length pistes" },
              { num: "40", label: "Fencers at once" },
              { num: "7",  label: "Days a week" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "36px", lineHeight: "40px", letterSpacing: "-0.36px", color: "var(--text)", margin: 0 }}>
                  {s.num}
                </p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          {/* CTA */}
          <Link
            href="/contact"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", alignSelf: "flex-start" }}
          >
            Get in touch →
          </Link>
        </div>
      </div>

      {/* ── PULL QUOTE BAND (node 1:2037) ── */}
      <section
        style={{ backgroundColor: "var(--surface)", width: "100%", paddingTop: "88px", paddingBottom: "40px" }}
      >
        <p
          className="pull-quote"
          style={{
            fontFamily: ss3,
            fontWeight: 700,
            fontSize: "28px",
            lineHeight: "38px",
            letterSpacing: "-0.14px",
            color: "var(--text)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Most clubs borrow a gym for a few nights a week. We built ours — eighteen full-length strips, a sprung maple floor, and room to grow, all under one roof.
        </p>
      </section>

      {/* ── ALTERNATING FEATURE SECTIONS (nodes 1:2039, 1:2055, 1:2068) ── */}
      {FEATURES.map((f) => (
        <section
          key={f.heading}
          className="page-px"
          style={{ backgroundColor: f.bg, paddingTop: "48px", paddingBottom: "48px", width: "100%" }}
        >
          <div className="ourspace-feature-row">
            {f.photoLeft ? (
              <>
                <div className="ourspace-feature-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.heading} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                  <FeatureText f={f} />
                </div>
              </>
            ) : (
              <>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                  <FeatureText f={f} />
                </div>
                <div className="ourspace-feature-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={f.img} alt={f.heading} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* ── AT A GLANCE (node 1:2087) ── */}
      <section
        className="page-px"
        style={{
          backgroundColor: "var(--light-bg)",
          paddingTop: "72px",
          paddingBottom: "72px",
          width: "100%",
          borderTop: "1px solid var(--light-border)",
          borderBottom: "1px solid var(--light-border)",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--light-text)", margin: 0 }}>
          At a glance
        </p>
        <div className="ourspace-stats-grid">
          {AT_A_GLANCE.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                backgroundColor: "var(--light-surface)",
                border: "1px solid var(--light-border)",
                borderRadius: "8px",
                padding: "10px 16px",
              }}
            >
              <span style={{ color: "var(--accent-text)", fontFamily: ss3, fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>✓</span>
              <span style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "22px", color: "var(--light-text)", whiteSpace: "nowrap" }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TWO OAKVILLE LOCATIONS (node 1:2120) ── */}
      <section
        className="page-px"
        style={{
          backgroundColor: "var(--surface)",
          paddingTop: "80px",
          paddingBottom: "80px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: "100%",
        }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Two Oakville locations
        </p>
        <div className="card-row">
          {[
            { name: "Wyecroft Rd", address: "Unit 46 – 220 Wyecroft Rd, Oakville, ON", hours: "Open 7 days — evenings & weekends", img: "/fencing9.webp" },
            { name: "Second location", address: "Now open in Oakville — full address coming soon.", hours: "Open 7 days — evenings & weekends", img: "/fencing10.avif" },
          ].map((loc) => (
            <div
              key={loc.name}
              style={{ flex: "1 0 0", minWidth: 0, backgroundColor: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "240px", flexShrink: 0, overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={loc.img} alt={loc.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>{loc.name}</p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0 }}>{loc.address}</p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>{loc.hours}</p>
                <Link href="/contact" className="link-hover" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}>
                  Get directions →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA (node 1:2137) ── */}
      <section
        className="page-px page-py-lg"
        style={{ backgroundColor: "var(--accent)", display: "flex", flexDirection: "column", alignItems: "center", gap: "18px", width: "100%" }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--on-accent)", textAlign: "center", margin: 0 }}>
          Come see it for yourself.
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--on-accent)", textAlign: "center", maxWidth: "560px", margin: 0 }}>
          Book a free walk-through — we'll show you around, introduce you to the team, and help you find the right class.
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

function FeatureText({ f }: { f: typeof FEATURES[0] }) {
  return (
    <>
      <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
        {f.heading}
      </p>
      <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0 }}>
        {f.body}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {f.bullets.map((b) => (
          <div key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <span style={{ color: "var(--accent-text)", fontFamily: ss3, fontWeight: 700, fontSize: "18px", lineHeight: "28px", flexShrink: 0 }}>✓</span>
            <span style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)" }}>{b}</span>
          </div>
        ))}
      </div>
    </>
  );
}
