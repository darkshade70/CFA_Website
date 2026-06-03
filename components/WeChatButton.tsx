"use client";

import { useState, useEffect, useRef } from "react";
import WeChatQR from "./WeChatQR";

const ss3 = "'Source Sans 3', sans-serif";

export default function WeChatButton() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          backgroundColor: "var(--surface-2)",
          borderRadius: "10px",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          border: "none",
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/wechat.svg" alt="WeChat" style={{ width: "20px", height: "20px", flexShrink: 0 }} />
        <span style={{ fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "20px", color: "var(--text)" }}>
          WeChat
        </span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 10px)",
            left: 0,
            backgroundColor: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            padding: "18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            zIndex: 50,
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            minWidth: "172px",
          }}
        >
          <WeChatQR size={136} />
          <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "13px", lineHeight: "18px", color: "var(--text-2)", margin: 0, textAlign: "center" }}>
            Scan to add us on WeChat
          </p>
        </div>
      )}
    </div>
  );
}
