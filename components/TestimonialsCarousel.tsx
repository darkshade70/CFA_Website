"use client";

import { useState } from "react";

const ss3 = "'Source Sans 3', sans-serif";

const ALL_TESTIMONIALS = [
  // Page 1
  { stars: 5, quote: "My daughter started two years ago and the change has been remarkable. The coaches genuinely care about each kid.", name: "Sarah K.", detail: "Parent · youth foil" },
  { stars: 5, quote: "I came in at 34 with zero experience. Six months later I fenced my first tournament. Never thought I'd say that.", name: "James T.", detail: "Adult épée" },
  { stars: 5, quote: "Best facility and coaching I've trained at — and I've fenced for fifteen years. The pistes and equipment are tournament standard.", name: "Priya M.", detail: "Competitive sabre" },
  // Page 2
  { stars: 5, quote: "Three kids in the program now. The coaches know each of them personally and adjust to how they each learn. That's rare.", name: "David L.", detail: "Parent · youth programs" },
  { stars: 5, quote: "I was nervous walking in knowing nothing about fencing. By week two I was sparring. By month three I was completely hooked.", name: "Michelle W.", detail: "Adult beginner" },
  { stars: 5, quote: "Went from beginner to competing provincially in under two years. The coaching here is serious without being intimidating.", name: "Ryan C.", detail: "Youth competitive foil" },
  // Page 3
  { stars: 5, quote: "Found my way here through the HEMA program. The depth of knowledge on historical weapons is unlike anything I've seen at another club.", name: "Kevin N.", detail: "Historical fencing" },
  { stars: 5, quote: "My coach pushed me hard enough to improve but never made fencing feel like a chore. That balance is hard to find.", name: "Emma S.", detail: "Youth foil" },
  { stars: 5, quote: "We tried two other clubs before CFA. There's no comparison — in the space, the instruction, or the culture.", name: "Jennifer H.", detail: "Parent · youth sabre" },
  // Page 4
  { stars: 5, quote: "I'm in my 40s and competing again for the first time in years. Having a proper full-time facility made the difference.", name: "Thomas B.", detail: "Adult competitive épée" },
  { stars: 5, quote: "Placed top 3 at provincials last season. The training environment here is the real deal.", name: "Lily Z.", detail: "Youth épée" },
  { stars: 5, quote: "The open floor time alone makes it worth it. Being able to train seven days a week completely changed my game.", name: "Marcus O.", detail: "Adult foil" },
  // Page 5
  { stars: 5, quote: "My son was nervous about fitting in. The coaches met him where he was from day one and never rushed him. He loves it now.", name: "Anna P.", detail: "Parent · youth foil" },
  { stars: 5, quote: "Picked up a foil again after 12 years away from the sport. The structured programs got me back up to speed faster than I expected.", name: "Jason M.", detail: "Returning fencer" },
  { stars: 5, quote: "My daughter does the longsword program and talks about it constantly. The instructors actually know the historical context, not just the moves.", name: "Claire T.", detail: "Parent · historical" },
];

const PAGES = [
  ALL_TESTIMONIALS.slice(0, 3),
  ALL_TESTIMONIALS.slice(3, 6),
  ALL_TESTIMONIALS.slice(6, 9),
  ALL_TESTIMONIALS.slice(9, 12),
  ALL_TESTIMONIALS.slice(12, 15),
];

export default function TestimonialsCarousel({ googleReviewsUrl }: { googleReviewsUrl: string }) {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(PAGES.length - 1, p + 1));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px", width: "100%" }}>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
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

        {/* Prev / Next arrows */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={prev}
            disabled={page === 0}
            aria-label="Previous reviews"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid var(--border-strong)",
              backgroundColor: page === 0 ? "transparent" : "var(--surface-2)",
              color: page === 0 ? "var(--text-2)" : "var(--text)",
              cursor: page === 0 ? "not-allowed" : "pointer",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: page === 0 ? 0.35 : 1,
              transition: "opacity 0.15s",
            }}
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={page === PAGES.length - 1}
            aria-label="Next reviews"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "1px solid var(--border-strong)",
              backgroundColor: page === PAGES.length - 1 ? "transparent" : "var(--surface-2)",
              color: page === PAGES.length - 1 ? "var(--text-2)" : "var(--text)",
              cursor: page === PAGES.length - 1 ? "not-allowed" : "pointer",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: page === PAGES.length - 1 ? 0.35 : 1,
              transition: "opacity 0.15s",
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="testimonials-row">
        {PAGES[page].map((t) => (
          <div
            key={t.name}
            className="testimonial-card"
            style={{
              backgroundColor: "var(--surface-2)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "26px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "16px", color: "var(--accent-text)", margin: 0 }}>
              {"★".repeat(t.stars)}
            </p>
            <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "16px", lineHeight: "27px", color: "var(--text)", flexGrow: 1, margin: 0 }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p style={{ fontFamily: ss3, fontWeight: 700, fontSize: "15px", lineHeight: "22px", color: "var(--text)", margin: 0 }}>
                {t.name}
              </p>
              <p style={{ fontFamily: ss3, fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "var(--text-2)", margin: 0 }}>
                {t.detail}
              </p>
            </div>
          </div>
        ))}
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
