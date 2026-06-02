"use client";

import Link from "next/link";
import { useState } from "react";
import type { Metadata } from "next";

const ss3 = "'Source Sans 3', sans-serif";

const inputStyle = {
  width: "100%",
  backgroundColor: "var(--surface)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "14px 16px",
  fontFamily: ss3,
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  color: "var(--text)",
  outline: "none",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  fontFamily: ss3,
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "20px",
  color: "var(--text)",
  display: "block",
  marginBottom: "6px",
};

export default function VisitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    facility: "Both / Not sure",
    timing: "",
    comments: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="nav-spacer" />

      <div
        className="page-px"
        style={{
          backgroundColor: "var(--bg)",
          paddingTop: "56px",
          paddingBottom: "96px",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        {/* Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "48px" }}>
          <p className="h-display" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
            Book a free visit
          </p>
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", margin: 0 }}>
            Schedule a free in-person walk-through of our facilities and programs.
          </p>
        </div>

        {submitted ? (
          /* ── Success state ── */
          <div style={{ maxWidth: "560px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "28px", lineHeight: "34px", color: "var(--text)", margin: 0 }}>
              We&apos;ll be in touch soon!
            </p>
            <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", margin: 0 }}>
              Thanks for reaching out. We reply within 1 business day — if you&apos;d prefer a faster response, message us on WhatsApp or WeChat.
            </p>
            <Link
              href="/"
              style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}
            >
              ← Back to home
            </Link>
          </div>
        ) : (
          /* ── Form + sidebar layout ── */
          <div className="visit-layout">
            {/* ── Left: form ── */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px", flex: "1 1 0", minWidth: 0 }}>

              {/* Name + Phone row */}
              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Full name</label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="(905) 000-0000"
                    value={form.phone}
                    onChange={set("phone")}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={set("email")}
                  style={inputStyle}
                />
              </div>

              {/* Facility dropdown */}
              <div>
                <label style={labelStyle}>Which facility would you like to tour?</label>
                <select
                  value={form.facility}
                  onChange={set("facility")}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                >
                  <option>Both / Not sure</option>
                  <option>Wyecroft Rd — Unit 46 – 220 Wyecroft Rd</option>
                  <option>Second location (Oakville)</option>
                </select>
              </div>

              {/* Timing */}
              <div>
                <label style={labelStyle}>When would you like to schedule it for?</label>
                <input
                  type="text"
                  placeholder="Next week, weekdays after 5pm, etc"
                  value={form.timing}
                  onChange={set("timing")}
                  style={inputStyle}
                />
              </div>

              {/* Comments */}
              <div>
                <label style={labelStyle}>Additional comments</label>
                <textarea
                  rows={5}
                  placeholder="Questions, goals, or tell us about your background…"
                  value={form.comments}
                  onChange={set("comments")}
                  style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                />
              </div>

              {/* Submit */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    backgroundColor: "var(--accent)",
                    color: "var(--on-accent)",
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    padding: "17px 26px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "center",
                  }}
                >
                  Send &amp; register interest →
                </button>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                  We reply within 1 business day. Prefer to chat? Message us on WhatsApp or WeChat.
                </p>
              </div>
            </form>

            {/* ── Right: Prefer to chat sidebar ── */}
            <div className="visit-sidebar">
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "28px 28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "22px", lineHeight: "28px", color: "var(--text)", margin: 0 }}>
                  Prefer to chat?
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <a
                      href="https://wa.me/14165555555"
                      style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}
                    >
                      WhatsApp
                    </a>
                    <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                      Fastest reply
                    </p>
                  </div>
                  <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", margin: 0 }}>
                      WeChat
                    </p>
                    <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                      Ask us for the QR
                    </p>
                  </div>
                  <div style={{ height: "1px", backgroundColor: "var(--border)" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    <a
                      href="mailto:hello@canadianfencingacademy.ca"
                      style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}
                    >
                      Email
                    </a>
                    <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                      hello@canadianfencingacademy.ca
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
