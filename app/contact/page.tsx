import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

const ss3 = "'Source Sans 3', sans-serif";

const LOCATIONS = [
  {
    name: "Wyecroft Rd",
    address: "Unit 46 – 220 Wyecroft Rd, Oakville, ON  L6K 3T8",
    hours: "Open 7 days — evenings & weekends",
    mapsUrl: "https://www.google.com/maps/dir//220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8",
    embedSrc: "https://maps.google.com/maps?q=220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8&output=embed",
  },
  {
    name: "Second location",
    address: "Now open in Oakville — full address coming soon.",
    hours: "Open 7 days — evenings & weekends",
    mapsUrl: "https://www.google.com/maps/search/Oakville,+ON",
    embedSrc: "https://maps.google.com/maps?q=Oakville,+ON&output=embed",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Nav spacer */}
      <div className="nav-spacer" />

      {/* ── Header ── */}
      <div
        data-node-id="1:2144"
        className="page-header-sm"
        style={{
          backgroundColor: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <p className="h-page" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Visit us.
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", maxWidth: "760px", margin: 0 }}>
          Two locations in Oakville. Drop by, message us, or book a visit — we'll show you around.
        </p>
      </div>

      {/* ── Content row — responsive via contact-row class ── */}
      <div
        data-node-id="1:2147"
        className="contact-row"
        style={{
          backgroundColor: "var(--bg)",
          width: "100%",
        }}
      >
        {/* Left: location cards stacked */}
        <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {/* Live map embed */}
              <div style={{ height: "180px", flexShrink: 0, width: "100%", overflow: "hidden" }}>
                <iframe
                  src={loc.embedSrc}
                  width="100%"
                  height="180"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name}
                />
              </div>
              {/* Location details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "22px 24px 24px" }}>
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>
                  {loc.name}
                </p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0 }}>
                  {loc.address}
                </p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                  {loc.hours}
                </p>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover"
                  style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}
                >
                  Get directions →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right: contact sidebar */}
        <div
          data-node-id="1:2165"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
            width: "420px",
            padding: "0 24px",
          }}
        >
          {[
            { label: "WhatsApp", value: "+1 416 555 5555", href: "https://wa.me/14165555555" },
            { label: "Email", value: "hello@canadianfencingacademy.ca", href: "mailto:hello@canadianfencingacademy.ca" },
            { label: "Social", value: "Instagram · Facebook", href: "#" },
            { label: "WeChat", value: "Ask us for the QR", href: "#" },
          ].map((row, i, arr) => (
            <div key={row.label}>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", padding: "18px 0" }}>
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>
                  {row.label}
                </p>
                <a
                  href={row.href}
                  className="link-hover"
                  style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text)", textDecoration: "none" }}
                >
                  {row.value}
                </a>
              </div>
              {i < arr.length - 1 && (
                <div style={{ backgroundColor: "var(--border)", height: "1px", width: "100%" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
