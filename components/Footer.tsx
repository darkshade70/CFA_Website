import Link from "next/link";
import WeChatQR from "./WeChatQR";

const ss3 = "'Source Sans 3', sans-serif";

export default function Footer() {
  return (
    <footer
      data-node-id="1:41"
      className="cfa-footer"
      style={{ backgroundColor: "var(--bg)", width: "100%" }}
    >
      {/* ── Desktop layout ── */}
      <div className="footer-desktop" style={{ display: "flex", flexDirection: "column", gap: "44px", paddingTop: "72px", paddingBottom: "40px", paddingLeft: "120px", paddingRight: "120px" }}>
        {/* Main row */}
        <div style={{ display: "flex", gap: "56px", alignItems: "flex-start", width: "100%" }}>
          {/* Brand column */}
          <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cfalogo.png" alt="Canadian Fencing Academy" style={{ height: "44px", width: "auto", display: "block" }} />
            </Link>
            <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0, maxWidth: "340px" }}>
              Oakville's fencing club since 2001. Now at two locations.
            </p>
            <div style={{ display: "flex", gap: "12px", width: "100%" }}>
              {[
                {
                  name: "Wyecroft Rd",
                  addr: "Unit 46 – 220 Wyecroft Rd, Oakville, ON  L6K 3T8",
                  mapSrc: "https://maps.google.com/maps?q=Unit+46,+220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8&t=&z=15&ie=UTF8&iwloc=&output=embed",
                  directionsUrl: "https://www.google.com/maps/dir//Unit+46,+220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8",
                },
                {
                  name: "Second location",
                  addr: "Now open in Oakville — full address coming soon",
                  mapSrc: "https://maps.google.com/maps?q=Oakville,+ON&t=&z=13&ie=UTF8&iwloc=&output=embed",
                  directionsUrl: "/contact",
                },
              ].map((loc) => (
                <div key={loc.name} style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ height: "110px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                    <iframe
                      src={loc.mapSrc}
                      width="100%"
                      height="110"
                      style={{ border: 0, display: "block", filter: "invert(0.9) hue-rotate(180deg)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={loc.name}
                    />
                  </div>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)", margin: 0 }}>{loc.name}</p>
                  <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>{loc.addr}</p>
                  <a href={loc.directionsUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--accent-text)", textDecoration: "none" }}>Directions →</a>
                </div>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", gap: "28px", alignItems: "flex-start" }}>
            {/* Programs */}
            <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--text-2)", margin: 0 }}>PROGRAMS</p>
              {[
                { label: "Foil", href: "/programs/foil" },
                { label: "Épée", href: "/programs/epee" },
                { label: "Sabre", href: "/programs/sabre" },
                { label: "Historical", href: "/programs/historical" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text)", textDecoration: "none" }}>{item.label}</Link>
              ))}
            </div>
            {/* Club */}
            <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--text-2)", margin: 0 }}>CLUB</p>
              {[
                { label: "Coaches", href: "/coaches" },
                { label: "Our Space", href: "/our-space" },
                { label: "Contact", href: "/contact" },
                { label: "Register", href: "/register" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text)", textDecoration: "none" }}>{item.label}</Link>
              ))}
            </div>
            {/* Get in touch */}
            <div style={{ flex: "1.5 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--text-2)", margin: 0 }}>GET IN TOUCH</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <a href="https://wa.me/14165555555" style={{ backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                  <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "var(--text)" }}>WhatsApp</span>
                </a>
                <div style={{ backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/wechat.svg" alt="WeChat" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                    <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "var(--text)" }}>WeChat</span>
                  </div>
                  <WeChatQR size={112} />
                  <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "var(--text-2)", margin: 0 }}>Scan to add us on WeChat</p>
                </div>
              </div>
              <a href="mailto:hello@canadianfencingacademy.ca" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", textDecoration: "none", wordBreak: "break-all" }}>
                hello@canadianfencingacademy.ca
              </a>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0, whiteSpace: "nowrap" }}>
                <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Instagram</a> · <a href="#" style={{ color: "inherit", textDecoration: "none" }}>Facebook</a>
              </p>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "var(--border)", height: "1px", width: "100%" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>© 2026 Canadian Fencing Academy</p>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="footer-mobile" style={{ display: "none", flexDirection: "column", gap: "30px", paddingTop: "48px", paddingBottom: "28px", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Logo + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cfalogo.png" alt="Canadian Fencing Academy" style={{ height: "38px", width: "auto", display: "block" }} />
          </Link>
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text-2)", margin: 0 }}>
            Oakville's fencing club since 2001. Now at two locations.
          </p>
        </div>

        {/* 2 location cards */}
        <div style={{ display: "flex", gap: "12px", width: "100%" }}>
          {[
            { name: "Wyecroft Rd", addr: "Unit 46 – 220 Wyecroft Rd, Oakville, ON  L6K 3T8", mapSrc: "https://maps.google.com/maps?q=Unit+46,+220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8&t=&z=15&ie=UTF8&iwloc=&output=embed", directionsUrl: "https://www.google.com/maps/dir//Unit+46,+220+Wyecroft+Rd,+Oakville,+ON+L6K+3T8" },
            { name: "Second location", addr: "Now open in Oakville — full address coming soon", mapSrc: "https://maps.google.com/maps?q=Oakville,+ON&t=&z=13&ie=UTF8&iwloc=&output=embed", directionsUrl: "/contact" },
          ].map((loc) => (
            <div key={loc.name} style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ height: "96px", borderRadius: "8px", overflow: "hidden", flexShrink: 0 }}>
                <iframe
                  src={loc.mapSrc}
                  width="100%"
                  height="96"
                  style={{ border: 0, display: "block", filter: "invert(0.9) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={loc.name}
                />
              </div>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)", margin: 0 }}>{loc.name}</p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>{loc.addr}</p>
              <a href={loc.directionsUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--accent-text)", textDecoration: "none" }}>Directions →</a>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: "var(--border)", height: "1px", width: "100%" }} />

        {/* 2-col nav */}
        <div style={{ display: "flex", gap: "20px", width: "100%" }}>
          <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--text-2)", margin: 0 }}>PROGRAMS</p>
            {["Foil", "Épée", "Sabre", "Historical"].map((n, i) => (
              <Link key={n} href={["/programs/foil", "/programs/epee", "/programs/sabre", "/programs/historical"][i]} style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text)", textDecoration: "none" }}>{n}</Link>
            ))}
          </div>
          <div style={{ flex: "1 0 0", minWidth: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--text-2)", margin: 0 }}>CLUB</p>
            {[
              { label: "Coaches", href: "/coaches" },
              { label: "Our Space", href: "/our-space" },
              { label: "Contact", href: "/contact" },
              { label: "Register", href: "/register" },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--text)", textDecoration: "none" }}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: "var(--border)", height: "1px", width: "100%" }} />

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>Ready? Let's fence.</p>
          <Link href="/register" style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", textAlign: "center", display: "block" }}>
            Register Now →
          </Link>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="https://wa.me/14165555555" style={{ flex: "1 0 0", backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "16px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
              <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)" }}>WhatsApp</span>
            </a>
            <div style={{ flex: "1 0 0", backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/wechat.svg" alt="WeChat" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)" }}>WeChat</span>
              </div>
              <WeChatQR size={100} />
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "var(--text-2)", margin: 0 }}>Scan to add us</p>
            </div>
          </div>
          <div style={{ backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)" }}>Email</span>
            <span style={{ fontFamily: ss3, fontWeight: 400, fontSize: "13px", lineHeight: "20px", color: "var(--text-2)" }}>hello@canadianfencingacademy.ca</span>
          </div>
        </div>

        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
          Instagram ↗ · Facebook ↗ · Oakville, ON
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
          © 2026 Canadian Fencing Academy
        </p>
      </div>
    </footer>
  );
}
