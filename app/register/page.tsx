"use client";

import { useState } from "react";

const ss3 = "'Source Sans 3', sans-serif";

const PROGRAMS = ["Youth programs", "Adult programs", "Historical / HEMA", "Not sure yet"];
const WHICH = ["All / Not sure", "Foil", "Épée", "Sabre", "Historical"];
const EXPERIENCE = ["New to fencing", "Some experience", "Experienced / returning", "Competitive"];

const inputStyle: React.CSSProperties = {
  backgroundColor: "var(--surface-2)",
  border: "1px solid var(--border-strong)",
  borderRadius: "8px",
  padding: "14px 16px",
  fontFamily: ss3,
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "28px",
  letterSpacing: "0.18px",
  color: "var(--text)",
  width: "100%",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: ss3,
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "22px",
  color: "var(--text)",
  display: "block",
  marginBottom: "8px",
};

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    program: "Youth programs",
    which: "All / Not sure",
    experience: "New to fencing",
    comments: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Nav spacer */}
      <div className="nav-spacer" />

      {/* ── Header ── */}
      <div
        data-node-id="1:2240"
        className="page-header-sm"
        style={{
          backgroundColor: "var(--bg)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          width: "100%",
        }}
      >
        <p className="h-display" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Register now
        </p>
        <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text-2)", maxWidth: "760px", margin: 0 }}>
          Tell us a bit about yourself and we'll reach out within one business day.
        </p>
      </div>

      {/* ── Content — register-row handles flex → column on mobile ── */}
      <div
        data-node-id="1:2243"
        className="page-px register-row"
        style={{
          backgroundColor: "var(--bg)",
          paddingTop: "24px",
          paddingBottom: "80px",
          width: "100%",
        }}
      >
        {/* ── Form column ── */}
        <div style={{ flex: "1 0 0", minWidth: 0 }}>
          {submitted ? (
            <div
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "36px", lineHeight: "39px", color: "var(--text)", margin: 0 }}>
                We've got your message.
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: "var(--text-2)", margin: 0 }}>
                Expect a reply within one business day. In the meantime, feel free to message us on WhatsApp or WeChat.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              {/* Name + Phone row */}
              <div className="form-row" style={{ gap: "14px" }}>
                <div style={{ flex: "1 0 0", minWidth: 0 }}>
                  <label style={labelStyle}>Full name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    style={inputStyle}
                  />
                </div>
                <div style={{ flex: "1 0 0", minWidth: 0 }}>
                  <label style={labelStyle}>Phone</label>
                  <input
                    type="tel"
                    placeholder="(905) 000-0000"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  style={inputStyle}
                />
              </div>

              {/* Program + Which row */}
              <div className="form-row" style={{ gap: "14px" }}>
                <div style={{ flex: "1 0 0", minWidth: 0 }}>
                  <label style={labelStyle}>What program are you interested in?</label>
                  <select
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  >
                    {PROGRAMS.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
                <div style={{ flex: "1 0 0", minWidth: 0 }}>
                  <label style={labelStyle}>Which one?</label>
                  <select
                    value={form.which}
                    onChange={(e) => setForm({ ...form, which: e.target.value })}
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  >
                    {WHICH.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div>
                <label style={labelStyle}>Experience</label>
                <select
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                >
                  {EXPERIENCE.map((p) => <option key={p}>{p}</option>)}
                </select>
              </div>

              {/* Comments */}
              <div>
                <label style={labelStyle}>Additional comments</label>
                <textarea
                  placeholder="Questions, goals, or tell us about your background…"
                  value={form.comments}
                  onChange={(e) => setForm({ ...form, comments: e.target.value })}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical", height: "96px" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--on-accent)",
                  fontFamily: ss3,
                  fontWeight: 700,
                  fontSize: "15px",
                  lineHeight: "20px",
                  padding: "15px 26px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Send &amp; register interest →
              </button>

              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                We reply within 1 business day. Prefer to chat? Message us on WhatsApp or WeChat.
              </p>
            </form>
          )}
        </div>

        {/* ── Sidebar (node 1:2280) ── */}
        <div
          data-node-id="1:2280"
          style={{
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            overflow: "hidden",
            flexShrink: 0,
            width: "380px",
            padding: "26px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "24px", lineHeight: "32px", color: "var(--text)", margin: 0 }}>
            Prefer to chat?
          </p>
          {[
            { label: "WhatsApp", detail: "Fastest reply" },
            { label: "WeChat", detail: "Ask us for the QR" },
            { label: "Email", detail: "hello@canadianfencingacademy.ca" },
          ].map((row) => (
            <div key={row.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", margin: 0 }}>
                {row.label}
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                {row.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
