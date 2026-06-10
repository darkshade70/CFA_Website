import Link from "next/link";
import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import { client, ourSpaceQuery } from "@/lib/sanity";

export const metadata: Metadata = { title: "Our Space" };
export const revalidate = 60;

const ss3 = "'Source Sans 3', sans-serif";

const FALLBACK_STATS = [
  { number: "18",  label: "Full-length pistes" },
  { number: "40+", label: "Fencers at once" },
  { number: "7",   label: "Days a week" },
  { number: "2",   label: "Oakville locations" },
];

const FALLBACK_LOCATIONS = [
  {
    name: "Wyecroft Rd",
    address: "Unit 46 – 220 Wyecroft Rd, Oakville, ON  L6K 3T8",
    hours: "Open 7 days — evenings & weekends",
    embedSrc: "https://maps.google.com/maps?q=220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8&output=embed",
    directionsUrl: "https://www.google.com/maps/dir//220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8",
  },
  {
    name: "Second location",
    address: "Now open in Oakville — full address coming soon.",
    hours: "Open 7 days — evenings & weekends",
    embedSrc: "https://maps.google.com/maps?q=208+Wyecroft+Rd,+Oakville,+ON+L6K+3V1&output=embed",
    directionsUrl: "https://www.google.com/maps/dir//208+Wyecroft+Rd,+Oakville,+ON+L6K+3V1",
  },
];

const GALLERY = [
  { img: "/gym1.jpg",  alt: "Fencers training on the pistes" },
  { img: "/gym8.jpg",  alt: "Training session with Canada flag" },
  { img: "/gym4.jpg",  alt: "Coach working with a young fencer" },
  { img: "/gym6.jpg",  alt: "Fencers in a bout" },
  { img: "/gym7.jpg",  alt: "Podium at a CFA event" },
  { img: "/gym3.jpg",  alt: "Coach with young fencers" },
];

export default async function OurSpacePage() {
  let data: any = null;
  try {
    data = await client.fetch(ourSpaceQuery);
  } catch (err) {
    console.error("Sanity fetch failed for our-space:", err);
  }

  const heroSubtitle    = data?.heroSubtitle    ?? "A purpose-built fencing club — not a gym we borrow two nights a week. Open seven days, now at two Oakville locations.";
  const facilityHeading = data?.facilityHeading ?? "Built for fencing.";
  const facilityP1      = data?.facilityParagraph1 ?? "Most clubs book gym time wherever they can get it. We own our space. The Wyecroft Rd facility has 18 full-length pistes, electronic scoring on every strip, proper rubber flooring, and ceilings high enough to actually move. It's the same setup you'd find at a provincial tournament — because we didn't see a reason to train on anything less.";
  const facilityP2      = data?.facilityParagraph2 ?? "Open seven days across two Oakville locations. If you're new, all gear is provided — mask, jacket, gloves, weapon — nothing to buy before you try it. If you've been fencing for years, or want to compete, we run programs at every level. Some of our athletes train for nationals.";
  const ctaHeading      = data?.ctaHeading ?? "Come see it for yourself.";
  const ctaBody         = data?.ctaBody    ?? "Book a free walk-through — we'll show you around, introduce you to the team, and help you find the right class.";

  const stats     = data?.stats?.length     ? data.stats     : FALLBACK_STATS;
  const locations = data?.locations?.length ? data.locations : FALLBACK_LOCATIONS;

  return (
    <>
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
            {heroSubtitle}
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
          {stats.map((s: any) => (
            <div key={s.label} className="ourspace-stat">
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "52px", lineHeight: "52px", letterSpacing: "-1.5px", color: "var(--text)", margin: 0 }}>
                {s.number}
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM BANNER ── */}
      <div className="coaches-banner" style={{ width: "100%", overflow: "hidden", flexShrink: 0 }}>
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
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
            {facilityHeading}
          </p>
          <div className="ourspace-facility-row">
            <p style={{ flex: "1 1 0", fontFamily: ss3, fontWeight: 400, fontSize: "17px", lineHeight: "28px", color: "var(--text-2)", margin: 0 }}>
              {facilityP1}
            </p>
            <p style={{ flex: "1 1 0", fontFamily: ss3, fontWeight: 400, fontSize: "17px", lineHeight: "28px", color: "var(--text-2)", margin: 0 }}>
              {facilityP2}
            </p>
          </div>
        </div>

        <GalleryGrid items={GALLERY} />
      </section>

      {/* ── TWO OAKVILLE LOCATIONS ── */}
      <section
        className="page-px"
        style={{ backgroundColor: "var(--surface)", paddingTop: "80px", paddingBottom: "80px", display: "flex", flexDirection: "column", gap: "40px", width: "100%" }}
      >
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Two Oakville locations
        </p>
        <div className="card-row">
          {locations.map((loc: any) => (
            <div
              key={loc.name}
              style={{ flex: "1 0 0", minWidth: 0, backgroundColor: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}
            >
              {/* Map pin header */}
              <div style={{ backgroundColor: "var(--surface-3, #2a2520)", padding: "32px 28px", display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid var(--border)" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "20px" }}>
                  📍
                </div>
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "22px", lineHeight: "28px", color: "var(--text)", margin: 0 }}>{loc.name}</p>
              </div>

              {/* Info body */}
              <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "8px", flexGrow: 1 }}>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "17px", lineHeight: "26px", color: "var(--text-2)", margin: 0 }}>{loc.address}</p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0, opacity: 0.75 }}>{loc.hours}</p>
                <div style={{ marginTop: "16px" }}>
                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "var(--on-accent)", backgroundColor: "var(--accent)", padding: "12px 22px", borderRadius: "8px", textDecoration: "none" }}
                  >
                    Get directions →
                  </a>
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
          {ctaHeading}
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--on-accent)", textAlign: "center", maxWidth: "560px", margin: 0 }}>
          {ctaBody}
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
