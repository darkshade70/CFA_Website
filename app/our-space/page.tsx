import Link from "next/link";
import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = { title: "Our Space" };

const ss3 = "'Source Sans 3', sans-serif";

const STATS = [
  { n: "18",  label: "Full-length pistes" },
  { n: "40+", label: "Fencers at once" },
  { n: "7",   label: "Days a week" },
  { n: "2",   label: "Oakville locations" },
];

const GALLERY = [
  { img: "/gym1.jpg",  alt: "Fencers training on the pistes" },
  { img: "/gym8.jpg",  alt: "Training session with Canada flag" },
  { img: "/gym4.jpg",  alt: "Coach working with a young fencer" },
  { img: "/gym6.jpg",  alt: "Fencers in a bout" },
  { img: "/gym7.jpg",  alt: "Podium at a CFA event" },
  { img: "/gym3.jpg",  alt: "Coach with young fencers" },
];

export default function OurSpacePage() {
  return (
    <>
      {/* Nav spacer */}
      <div className="nav-spacer" />

      {/* ── HERO ── */}
      <div
        className="hero-ourspace"
        style={{ position: "relative", overflow: "hidden", backgroundColor: "#1a1713", width: "100%" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fencing1.jpg"
          alt=""
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(12,11,11,0.88) 0%, rgba(12,11,11,0.65) 55%, rgba(12,11,11,0.25) 100%)",
          }}
        />
        <div className="ourspace-hero-content">
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "12px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", textTransform: "uppercase", margin: 0 }}>
            Our facility
          </p>
          <p className="h-display" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Our space.
          </p>
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", maxWidth: "520px", margin: 0 }}>
            A purpose-built fencing club — not a gym we borrow two nights a week. Open seven days, now at two Oakville locations.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", alignSelf: "flex-start" }}
          >
            Get in touch →
          </Link>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <section
        className="page-px"
        style={{ backgroundColor: "var(--surface)", width: "100%", paddingTop: "52px", paddingBottom: "52px", borderBottom: "1px solid var(--border)" }}
      >
        <div className="ourspace-stats-strip">
          {STATS.map((s) => (
            <div key={s.label} className="ourspace-stat">
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "52px", lineHeight: "52px", letterSpacing: "-1.5px", color: "var(--text)", margin: 0 }}>
                {s.n}
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM BANNER ── */}
      <div style={{ width: "100%", height: "480px", overflow: "hidden", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/coaches-group.jpg"
          alt="The CFA coaching team"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
        />
      </div>

      {/* ── FACILITY INFO + GALLERY ── */}
      <section
        className="page-px"
        style={{ backgroundColor: "var(--bg)", paddingTop: "80px", paddingBottom: "80px", width: "100%", display: "flex", flexDirection: "column", gap: "64px" }}
      >
        {/* Info block — heading + two paragraphs side by side */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Built for fencing.
          </p>
          <div className="ourspace-facility-row">
            <p style={{ flex: "1 1 0", fontFamily: ss3, fontWeight: 400, fontSize: "17px", lineHeight: "28px", color: "var(--text-2)", margin: 0 }}>
              CFA is one of Ontario&apos;s largest dedicated fencing facilities — purpose-built, not a gym we rent two nights a week. Our Wyecroft Rd location has 18 full-length pistes with electronic scoring on every strip, high ceilings, proper rubber flooring, and tournament-grade equipment throughout. It&apos;s the same setup you&apos;d compete on at a provincial or national event.
            </p>
            <p style={{ flex: "1 1 0", fontFamily: ss3, fontWeight: 400, fontSize: "17px", lineHeight: "28px", color: "var(--text-2)", margin: 0 }}>
              All beginner gear is provided — masks, jackets, gloves, and weapons — so you can show up and fence on day one. We run structured programs seven days a week across two Oakville locations, from introductory classes through to elite competitive training. Our athletes compete at the provincial and national level, coached by staff who&apos;ve built careers around the sport.
            </p>
          </div>
        </div>

        {/* Gallery */}
        <GalleryGrid items={GALLERY} />
      </section>

      {/* ── TWO OAKVILLE LOCATIONS ── */}
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
            { name: "Wyecroft Rd", address: "Unit 46 – 220 Wyecroft Rd, Oakville, ON  L6K 3T8", hours: "Open 7 days — evenings & weekends", embedSrc: "https://maps.google.com/maps?q=220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8&output=embed", directionsUrl: "https://www.google.com/maps/dir//220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8" },
            { name: "Second location", address: "Now open in Oakville — full address coming soon.", hours: "Open 7 days — evenings & weekends", embedSrc: "https://maps.google.com/maps?q=208+Wyecroft+Rd,+Oakville,+ON+L6K+3V1&output=embed", directionsUrl: "https://www.google.com/maps/dir//208+Wyecroft+Rd,+Oakville,+ON+L6K+3V1" },
          ].map((loc) => (
            <div
              key={loc.name}
              style={{ flex: "1 0 0", minWidth: 0, backgroundColor: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              <div style={{ height: "240px", flexShrink: 0, overflow: "hidden" }}>
                <iframe
                  src={loc.embedSrc}
                  width="100%"
                  height="240"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name}
                />
              </div>
              <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: "6px" }}>
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>{loc.name}</p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0 }}>{loc.address}</p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>{loc.hours}</p>
                <a href={loc.directionsUrl} target="_blank" rel="noopener noreferrer" className="link-hover" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}>
                  Get directions →
                </a>
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
          Come see it for yourself.
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--on-accent)", textAlign: "center", maxWidth: "560px", margin: 0 }}>
          Book a free walk-through — we&apos;ll show you around, introduce you to the team, and help you find the right class.
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
