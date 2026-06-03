"use client";

import Link from "next/link";
import { useState } from "react";

const ss3 = "'Source Sans 3', sans-serif";

interface ClassData {
  name: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  ctaType: "primary" | "secondary";
}

interface Props {
  classes: ClassData[];
  imgs: string[];
  slug?: string; // program slug — used to pre-fill the register form
}

const SLUG_TO_WHICH: Record<string, string> = {
  foil: "Foil",
  epee: "Épée",
  sabre: "Sabre",
  historical: "Historical",
};

// Derive age-group program from class name
function inferProgram(className: string): string {
  const lower = className.toLowerCase();
  if (lower.includes("youth")) return "Youth programs";
  if (lower.includes("adult")) return "Adult programs";
  if (lower.includes("historical") || lower.includes("hema")) return "Historical / HEMA";
  return "";
}

function registerHref(slug: string | undefined, className: string): string {
  const which = slug ? SLUG_TO_WHICH[slug] : "";
  const program = inferProgram(className);
  const params = new URLSearchParams();
  if (which) params.set("which", which);
  if (program) params.set("program", program);
  params.set("class", className);
  return `/register?${params.toString()}`;
}

export default function ProgramCards({ classes, imgs, slug }: Props) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setSelectedIdx((prev) => (prev === idx ? null : idx));

  /* ── Single class → full-width horizontal card (Épée, Historical) ── */
  if (classes.length === 1) {
    const cls = classes[0];
    return (
      <div
        className="programs-featured-card programs-class-card programs-class-card-border program-card-hoverable"
        style={{ backgroundColor: "var(--light-surface)", border: "1px solid var(--light-border)" }}
      >
        <div className="programs-featured-card-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgs[0]}
            alt={cls.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px", padding: "36px 40px", justifyContent: "center" }}>
          <p className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "28px", lineHeight: "34px", color: "var(--light-text)", margin: 0 }}>
            {cls.name}
          </p>
          <p className="programs-class-card-text2" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--light-text-2)", margin: 0 }}>
            {cls.desc}
          </p>
          <div className="programs-class-card-border" style={{ backgroundColor: "var(--light-border)", height: "1px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {cls.features.map((f) => (
              <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontFamily: ss3, fontWeight: 700, fontSize: "18px", lineHeight: "28px", flexShrink: 0 }}>✓</span>
                <span className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--light-text)" }}>{f}</span>
              </div>
            ))}
          </div>
          <p className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--light-text)", margin: 0 }}>
            {cls.price} · {cls.period}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
            <Link
              href={registerHref(slug, cls.name)}
              className="btn-primary"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--accent)", color: "var(--on-accent)", fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", padding: "15px 26px", borderRadius: "10px", textDecoration: "none" }}
            >
              {cls.ctaLabel}
            </Link>
            <Link href="/contact" className="link-hover" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--accent)", textDecoration: "none" }}>
              Questions? Get in touch →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ── Multiple classes → wrapping grid with hover/click highlight ── */
  return (
    <div className="card-row" style={{ flexWrap: "wrap" }}>
      {classes.map((cls, idx) => {
        const isSelected = selectedIdx === idx;
        return (
          <div
            key={cls.name}
            className="programs-class-card program-card program-card-hoverable programs-class-card-border"
            onClick={() => toggle(idx)}
            style={{
              backgroundColor: "var(--light-surface)",
              border: isSelected ? "2px solid var(--accent)" : "1px solid var(--light-border)",
              boxShadow: isSelected ? "0 0 0 1px var(--accent)" : "none",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <div style={{ height: "180px", flexShrink: 0, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs[idx % imgs.length]}
                alt={cls.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            {/* Content — flex:1 so it fills the full card height after the image */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "22px 22px 24px" }}>
              {/* Top: title, description, divider, features, optional link */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--light-text)", margin: 0 }}>
                  {cls.name}
                </p>
                <p className="programs-class-card-text2" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--light-text-2)", margin: 0 }}>
                  {cls.desc}
                </p>
                <div className="programs-class-card-border" style={{ backgroundColor: "var(--light-border)", height: "1px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {cls.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--accent)", fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", flexShrink: 0 }}>✓</span>
                      <span className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", letterSpacing: "0.18px", color: "var(--light-text)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                {/* "Questions?" link lives in the top section so the bottom block stays same height across all cards */}
                {cls.ctaType === "primary" && (
                  <Link
                    href="/contact"
                    onClick={(e) => e.stopPropagation()}
                    className="link-hover"
                    style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--accent)", textDecoration: "none" }}
                  >
                    Questions? Get in touch →
                  </Link>
                )}
              </div>

              {/* Bottom: price + CTA only — same structure on every card, so buttons always align */}
              <div style={{ marginTop: "auto", paddingTop: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <p className="programs-class-card-text" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--light-text)", margin: 0 }}>
                  {cls.price} · {cls.period}
                </p>
                <Link
                  href={registerHref(slug, cls.name)}
                  onClick={(e) => e.stopPropagation()}
                  className={cls.ctaType === "primary" ? "btn-primary" : "btn-secondary"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: cls.ctaType === "primary" ? "var(--accent)" : "transparent",
                    border: cls.ctaType === "secondary" ? "1.5px solid var(--border-strong)" : "none",
                    color: cls.ctaType === "primary" ? "var(--on-accent)" : "var(--light-text)",
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "15px",
                    lineHeight: "20px",
                    padding: "15px 26px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  {cls.ctaLabel}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
