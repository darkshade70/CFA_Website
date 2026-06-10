"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const ss3 = "'Source Sans 3', sans-serif";

export type Testimonial = {
  _id?: string;
  stars?: number;
  rating?: number;
  quote: string;
  name?: string;
  authorName?: string;
};

const FALLBACK: Testimonial[] = [
  { stars: 5, quote: "My daughter started two years ago and the change has been remarkable. The coaches genuinely care about each kid.", name: "Sarah K." },
  { stars: 5, quote: "I came in at 34 with zero experience. Six months later I fenced my first tournament. Never thought I'd say that.", name: "James T." },
  { stars: 5, quote: "Best facility and coaching I've trained at — and I've fenced for fifteen years. The pistes and equipment are tournament standard.", name: "Priya M." },
  { stars: 5, quote: "Three kids in the program now. The coaches know each of them personally and adjust to how they each learn. That's rare.", name: "David L." },
  { stars: 5, quote: "I was nervous walking in knowing nothing about fencing. By week two I was sparring. By month three I was completely hooked.", name: "Michelle W." },
  { stars: 5, quote: "Went from beginner to competing provincially in under two years. The coaching here is serious without being intimidating.", name: "Ryan C." },
  { stars: 5, quote: "Found my way here through the HEMA program. The depth of knowledge on historical weapons is unlike anything I've seen at another club.", name: "Kevin N." },
  { stars: 5, quote: "My coach pushed me hard enough to improve but never made fencing feel like a chore. That balance is hard to find.", name: "Emma S." },
  { stars: 5, quote: "We tried two other clubs before CFA. There's no comparison — in the space, the instruction, or the culture.", name: "Jennifer H." },
  { stars: 5, quote: "I'm in my 40s and competing again for the first time in years. Having a proper full-time facility made the difference.", name: "Thomas B." },
  { stars: 5, quote: "Placed top 3 at provincials last season. The training environment here is the real deal.", name: "Lily Z." },
  { stars: 5, quote: "The open floor time alone makes it worth it. Being able to train seven days a week completely changed my game.", name: "Marcus O." },
  { stars: 5, quote: "My son was nervous about fitting in. The coaches met him where he was from day one and never rushed him. He loves it now.", name: "Anna P." },
  { stars: 5, quote: "Picked up a foil again after 12 years away from the sport. The structured programs got me back up to speed faster than I expected.", name: "Jason M." },
  { stars: 5, quote: "My daughter does the longsword program and talks about it constantly. The instructors actually know the historical context, not just the moves.", name: "Claire T." },
];

function chunk<T>(arr: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < arr.length; i += size) pages.push(arr.slice(i, i + size));
  return pages;
}

export default function TestimonialsCarousel({
  googleReviewsUrl,
  testimonials,
}: {
  googleReviewsUrl: string;
  testimonials?: Testimonial[];
}) {
  const items = testimonials && testimonials.length > 0 ? testimonials : FALLBACK;
  const PAGES = chunk(items, 3);

  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p - 1 + PAGES.length) % PAGES.length);
  const next = () => setPage((p) => (p + 1) % PAGES.length);

  const arrowStyle: CSSProperties = {
    width: "40px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "50%",
    border: "1px solid var(--border-strong)",
    backgroundColor: "var(--surface-2)",
    color: "var(--text)",
    cursor: "pointer",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.15s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%" }}>

      {/* Header row — title + Google link only */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <p className="h-section" style={{ fontFamily: ss3, fontWeight: 700, color: "var(--text)", margin: 0 }}>
          Testimonials
        </p>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="link-hover"
          style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "var(--accent-text)", textDecoration: "none" }}
        >
          View our Google Reviews →
        </a>
      </div>

      {/* Cards + flanking arrows */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Prev arrow */}
        <button onClick={prev} aria-label="Previous reviews" style={arrowStyle}>
          ←
        </button>

        {/* Cards */}
        <div className="testimonials-row" style={{ flex: 1, minWidth: 0, alignItems: "stretch" }}>
          {PAGES[page].map((t, i) => {
            const stars = t.rating ?? t.stars ?? 5;
            const name = t.authorName ?? t.name ?? "";
            const key = t._id ?? `${page}-${i}`;
            return (
              <div
                key={key}
                className="testimonial-card"
                style={{
                  backgroundColor: "var(--surface-2)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "26px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  minHeight: "260px",
                }}
              >
                <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", color: "var(--accent-text)", margin: 0 }}>
                  {"★".repeat(stars)}
                </p>
                <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text)", flexGrow: 1, margin: 0 }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                {name && (
                  <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "22px", color: "var(--text)", margin: 0 }}>
                    {name}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Next arrow */}
        <button onClick={next} aria-label="Next reviews" style={arrowStyle}>
          →
        </button>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        {PAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Go to page ${i + 1}`}
            style={{
              width: i === page ? "24px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              border: "none",
              backgroundColor: i === page ? "var(--accent)" : "var(--border-strong)",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.2s, background-color 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
