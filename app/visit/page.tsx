"use client";

import Link from "next/link";
import { useState } from "react";
import WeChatQR from "@/components/WeChatQR";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    facility: "Both / Not sure",
    timing: "",
    comments: "",
  });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message ?? "Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="nav-spacer" />

      <div
        className="page-px"
        style={{ backgroundColor: "var(--bg)", paddingTop: "56px", paddingBottom: "96px", width: "100%", minHeight: "100vh" }}
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
          <div className="visit-layout">
            {/* ── Form ── */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px", flex: "1 1 0", minWidth: 0 }}>

              {/* Name + Phone */}
              <div className="form-row">
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Full name</label>
                  <input required type="text" placeholder="Your name" value={form.name} onChange={set("name")} style={inputStyle} />
                </div>
                <div style={{ flex: 1 }}>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" placeholder="(905) 000-0000" value={form.phone} onChange={set("phone")} style={inputStyle} />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Email</label>
                <input required type="email" placeholder="you@email.com" value={form.email} onChange={set("email")} style={inputStyle} />
              </div>

              {/* Facility */}
              <div>
                <label style={labelStyle}>Which facility would you like to tour?</label>
                <select value={form.facility} onChange={set("facility")} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                  <option>Both / Not sure</option>
                  <option>Wyecroft Rd — Unit 46 – 220 Wyecroft Rd</option>
                  <option>Second location (Oakville)</option>
                </select>
              </div>

              {/* Timing */}
              <div>
                <label style={labelStyle}>When would you like to schedule it for?</label>
                <input type="text" placeholder="Next week, weekdays after 5pm, etc" value={form.timing} onChange={set("timing")} style={inputStyle} />
              </div>

              {/* Comments */}
              <div>
                <label style={labelStyle}>Additional comments</label>
                <textarea rows={5} placeholder="Questions, goals, or tell us about your background…" value={form.comments} onChange={set("comments")} style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }} />
              </div>

              {/* Error */}
              {error && (
                <p style={{ fontFamily: ss3, fontSize: "14px", lineHeight: "20px", color: "#c0392b", margin: 0 }}>
                  {error}
                </p>
              )}

              {/* Submit */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: "100%",
                    backgroundColor: loading ? "var(--border)" : "var(--accent)",
                    color: "var(--on-accent)",
                    fontFamily: ss3,
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "22px",
                    padding: "17px 26px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    textAlign: "center",
                    transition: "background-color 0.15s",
                  }}
                >
                  {loading ? "Sending…" : "Send & register interest →"}
                </button>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                  We reply within 1 business day. Prefer to chat? Message us on WhatsApp or WeChat.
                </p>
              </div>
            </form>

            {/* ── Sidebar ── */}
            <div className="visit-sidebar">
              <div
                style={{
                  backgroundColor: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "28px 28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                }}
              >
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "22px", lineHeight: "28px", color: "var(--text)", margin: "0 0 20px" }}>
                  Prefer to chat?
                </p>

                {/* WhatsApp */}
                <div style={{ paddingBottom: "18px", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>WHATSAPP</p>
                  <a href="https://wa.me/14165555555" style={{ fontFamily: ss3, fontWeight: 700, fontSize: "17px", lineHeight: "24px", color: "var(--text)", textDecoration: "none" }}>
                    Message us →
                  </a>
                  <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "13px", color: "var(--text-2)", margin: 0 }}>Fastest reply</p>
                </div>

                {/* WeChat */}
                <div style={{ padding: "18px 0", borderBottom: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>WECHAT</p>
                  <WeChatQR size={120} />
                  <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "13px", color: "var(--text-2)", margin: 0 }}>Scan to add us on WeChat</p>
                </div>

                {/* Email */}
                <div style={{ paddingTop: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "13px", letterSpacing: "0.84px", color: "var(--accent-text)", margin: 0 }}>EMAIL</p>
                  <a href="mailto:hello@canadianfencingacademy.ca" style={{ fontFamily: ss3, fontWeight: 400, fontSize: "15px", lineHeight: "22px", color: "var(--text)", textDecoration: "none" }}>
                    hello@canadianfencingacademy.ca
                  </a>
                  <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "13px", color: "var(--text-2)", margin: 0 }}>We reply within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
