"use client";

import { useState, useEffect, useCallback } from "react";

const ss3 = "'Source Sans 3', sans-serif";

interface GalleryItem {
  img: string;
  alt: string;
}

const iconBtn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(21,20,19,0.85)",
  border: "1px solid rgba(255,255,255,0.12)",
  backdropFilter: "blur(8px)",
  color: "#f2f0ed",
  borderRadius: "50%",
  cursor: "pointer",
  flexShrink: 0,
};

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const open  = (idx: number) => setActiveIdx(idx);
  const close = () => setActiveIdx(null);

  const prev = useCallback(() =>
    setActiveIdx((i) => i === null ? null : (i - 1 + items.length) % items.length),
    [items.length]
  );

  const next = useCallback(() =>
    setActiveIdx((i) => i === null ? null : (i + 1) % items.length),
    [items.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (activeIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIdx, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = activeIdx !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIdx]);

  return (
    <>
      {/* ── Bento grid ── */}
      <div className="ourspace-bento">
        {items.map((item, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => open(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open photo: ${item.alt}`}
            onKeyDown={(e) => e.key === "Enter" && open(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.alt} />
            {/* Hover overlay */}
            <div className="gallery-item-overlay">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {activeIdx !== null && (
        <div
          className="gallery-lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Close */}
          <button
            onClick={close}
            style={{ ...iconBtn, position: "fixed", top: "20px", right: "20px", width: "44px", height: "44px", fontSize: "20px", zIndex: 310 }}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            style={{ ...iconBtn, position: "fixed", left: "20px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", fontSize: "22px", zIndex: 310 }}
            aria-label="Previous photo"
          >
            ←
          </button>

          {/* Image — key forces re-mount → re-triggers fade-in animation */}
          <div
            style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={activeIdx}
              src={items[activeIdx].img}
              alt={items[activeIdx].alt}
              className="gallery-lightbox-img"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            style={{ ...iconBtn, position: "fixed", right: "20px", top: "50%", transform: "translateY(-50%)", width: "52px", height: "52px", fontSize: "22px", zIndex: 310 }}
            aria-label="Next photo"
          >
            →
          </button>

          {/* Counter + caption */}
          <div
            style={{ position: "fixed", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 310 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "6px" }}>
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  style={{
                    width: i === activeIdx ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    backgroundColor: i === activeIdx ? "#e4002b" : "rgba(255,255,255,0.3)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.25s ease, background-color 0.2s ease",
                  }}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
            <p style={{ fontFamily: ss3, fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0, letterSpacing: "0.5px" }}>
              {activeIdx + 1} / {items.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
