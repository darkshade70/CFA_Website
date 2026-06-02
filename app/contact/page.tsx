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
    mapsUrl: "https://www.google.com/maps/dir//208+Wyecroft+Rd,+Oakville,+ON+L6K+3V1",
    embedSrc: "https://maps.google.com/maps?q=208+Wyecroft+Rd,+Oakville,+ON+L6K+3V1&output=embed",
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
              <div style={{ height: "300px", flexShrink: 0, width: "100%", overflow: "hidden" }}>
                <iframe
                  src={loc.embedSrc}
                  width="100%"
                  height="300"
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
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            flexShrink: 0,
            width: "420px",
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "26px", lineHeight: "32px", color: "var(--text)", margin: "0 0 24px" }}>
            Prefer to chat?
          </p>

          {/* WhatsApp */}
          <div style={{ paddingBottom: "20px", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>WHATSAPP</p>
            <a
              href="https://wa.me/14165555555"
              className="link-hover"
              style={{ fontFamily: ss3, fontWeight: 700, fontSize: "18px", lineHeight: "26px", color: "var(--text)", textDecoration: "none" }}
            >
              Message us →
            </a>
            <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>Fastest reply</p>
          </div>

          {/* WeChat */}
          <div style={{ padding: "20px 0", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>WECHAT</p>
            {/* Placeholder QR code */}
            <div style={{ width: "128px", height: "128px", backgroundColor: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.35">
                <rect x="2" y="2" width="28" height="28" rx="3" stroke="#f2f0ed" strokeWidth="2.5"/>
                <rect x="9" y="9" width="14" height="14" fill="#f2f0ed"/>
                <rect x="50" y="2" width="28" height="28" rx="3" stroke="#f2f0ed" strokeWidth="2.5"/>
                <rect x="57" y="9" width="14" height="14" fill="#f2f0ed"/>
                <rect x="2" y="50" width="28" height="28" rx="3" stroke="#f2f0ed" strokeWidth="2.5"/>
                <rect x="9" y="57" width="14" height="14" fill="#f2f0ed"/>
                <rect x="38" y="2" width="6" height="6" fill="#f2f0ed"/>
                <rect x="38" y="12" width="6" height="6" fill="#f2f0ed"/>
                <rect x="48" y="38" width="6" height="6" fill="#f2f0ed"/>
                <rect x="38" y="48" width="6" height="6" fill="#f2f0ed"/>
                <rect x="48" y="58" width="6" height="6" fill="#f2f0ed"/>
                <rect x="60" y="48" width="6" height="6" fill="#f2f0ed"/>
                <rect x="60" y="60" width="6" height="6" fill="#f2f0ed"/>
                <rect x="72" y="48" width="6" height="6" fill="#f2f0ed"/>
                <rect x="2" y="38" width="6" height="6" fill="#f2f0ed"/>
                <rect x="12" y="38" width="6" height="6" fill="#f2f0ed"/>
                <rect x="22" y="38" width="6" height="6" fill="#f2f0ed"/>
                <rect x="38" y="38" width="6" height="6" fill="#f2f0ed"/>
                <rect x="72" y="38" width="6" height="6" fill="#f2f0ed"/>
                <rect x="72" y="60" width="6" height="6" fill="#f2f0ed"/>
                <rect x="60" y="72" width="6" height="6" fill="#f2f0ed"/>
                <rect x="72" y="72" width="6" height="6" fill="#f2f0ed"/>
                <rect x="38" y="60" width="6" height="6" fill="#f2f0ed"/>
                <rect x="38" y="72" width="6" height="6" fill="#f2f0ed"/>
              </svg>
            </div>
            <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>Scan to add us on WeChat</p>
          </div>

          {/* Email */}
          <div style={{ paddingTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>EMAIL</p>
            <a
              href="mailto:hello@canadianfencingacademy.ca"
              className="link-hover"
              style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "26px", color: "var(--text)", textDecoration: "none" }}
            >
              hello@canadianfencingacademy.ca
            </a>
            <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>We reply within 24 hours</p>
          </div>
        </div>
      </div>
    </>
  );
}
