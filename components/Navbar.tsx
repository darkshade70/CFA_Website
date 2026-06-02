"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ss3 = "'Source Sans 3', sans-serif";

const programs = [
  { name: "Foil", href: "/programs/foil" },
  { name: "Épée", href: "/programs/epee" },
  { name: "Sabre", href: "/programs/sabre" },
  { name: "Historical", href: "/programs/historical" },
];

const clubLinks = [
  { label: "Coaches", href: "/coaches" },
  { label: "Our Space", href: "/our-space" },
  { label: "Contact", href: "/contact" },
  { label: "Start Here", href: "/register" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <>
      <nav
        style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* ── Desktop nav bar ── */}
        <div
          className="hidden md:flex items-center justify-between"
          style={{ padding: "26px 80px" }}
        >
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cfalogo.png" alt="Canadian Fencing Academy" style={{ height: "44px", width: "auto", display: "block" }} />
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text-2)" }}>
              {/* Programs dropdown */}
              <div className="relative" onMouseEnter={() => setProgramsOpen(true)} onMouseLeave={() => setProgramsOpen(false)}>
                <button className="nav-link flex items-center gap-1 cursor-pointer" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", background: "none", border: "none" }}>
                  Programs <ChevronDown size={14} />
                </button>
                {programsOpen && (
                  <div className="absolute top-full left-0 mt-2 rounded-xl overflow-hidden shadow-2xl border" style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border)", width: "200px" }}>
                    {programs.map((p) => (
                      <Link key={p.href} href={p.href} className="dropdown-item" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", color: "var(--text)", textDecoration: "none", display: "block", padding: "14px 20px" }}>
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/coaches" className="nav-link" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>Coaches</Link>
              <Link href="/our-space" className="nav-link" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>Our Space</Link>
              <Link href="/contact" className="nav-link" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", textDecoration: "none" }}>Contact</Link>
            </div>
            <Link href="/register" className="btn-primary" style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", whiteSpace: "nowrap" }}>
              Register Now →
            </Link>
          </div>
        </div>

        {/* ── Mobile nav bar ── */}
        <div className="flex md:hidden items-center justify-between" style={{ padding: "14px 20px" }}>
          {/* Mobile logo — compact icon version */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cfamobilelogo.png" alt="Canadian Fencing Academy" style={{ height: "32px", width: "auto", display: "block" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link href="/register" className="btn-primary" style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "18px", padding: "10px 18px", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap" }}>
              Register Now →
            </Link>
            <button onClick={() => setMobileOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px", flexShrink: 0 }}>
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--text)", borderRadius: "2px" }} />
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--text)", borderRadius: "2px" }} />
              <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "var(--text)", borderRadius: "2px" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Full-screen mobile menu overlay ── */}
      {mobileOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 100, backgroundColor: "var(--bg)", display: "flex", flexDirection: "column", overflowY: "auto" }}
        >
          {/* Header row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px 18px 24px", flexShrink: 0 }}>
            <Link href="/" onClick={() => setMobileOpen(false)} style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/cfalogo.png" alt="Canadian Fencing Academy" style={{ height: "38px", width: "auto", display: "block" }} />
            </Link>
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", padding: "4px" }}>
              ✕
            </button>
          </div>

          {/* Menu content */}
          <div style={{ padding: "10px 24px 26px", display: "flex", flexDirection: "column", gap: "40px", flex: 1 }}>

            {/* Just starting CTA */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>Just starting?</p>
              <Link href="/programs/foil" onClick={() => setMobileOpen(false)} style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", textAlign: "center", display: "block" }}>
                Fencing for Beginners →
              </Link>
            </div>

            {/* Programs */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: "0 0 4px" }}>PROGRAMS</p>
              {programs.map((p, i) => (
                <div key={p.href}>
                  <Link href={p.href} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 0", fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "24px", color: "var(--text)", textDecoration: "none" }}>
                    {p.name} <span style={{ color: "var(--text-2)" }}>→</span>
                  </Link>
                  {i < programs.length - 1 && <div style={{ height: "1px", backgroundColor: "var(--border)" }} />}
                </div>
              ))}
            </div>

            {/* Club */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: "0 0 4px" }}>THE CLUB</p>
              {clubLinks.map((item, i) => (
                <div key={item.href}>
                  <Link href={item.href} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 0", fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "24px", color: "var(--text)", textDecoration: "none" }}>
                    {item.label} <span style={{ color: "var(--text-2)" }}>→</span>
                  </Link>
                  {i < clubLinks.length - 1 && <div style={{ height: "1px", backgroundColor: "var(--border)" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: CTA + contact */}
          <div style={{ padding: "24px 24px 26px", display: "flex", flexDirection: "column", gap: "28px", borderTop: "1px solid var(--border)", flexShrink: 0 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>Ready? Let's fence.</p>
              <Link href="/register" onClick={() => setMobileOpen(false)} style={{ backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none", textAlign: "center", display: "block" }}>
                Register Now →
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "14px", lineHeight: "15px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>GET IN TOUCH</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <a href="https://wa.me/14165555555" style={{ flex: "1 0 0", backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "16px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/whatsapp.svg" alt="WhatsApp" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                    <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)" }}>WhatsApp</span>
                  </a>
                  <div style={{ flex: "1 0 0", backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/wechat.svg" alt="WeChat" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
                    <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)" }}>WeChat</span>
                  </div>
                </div>
                <div style={{ backgroundColor: "var(--surface-2)", borderRadius: "10px", padding: "13px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--text)" }}>Email</span>
                  <span style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)" }}>hello@canadianfencingacademy.ca</span>
                </div>
              </div>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                Instagram ↗ · Facebook ↗ · Oakville, ON
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
