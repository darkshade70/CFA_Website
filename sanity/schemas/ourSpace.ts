import { defineField, defineType, defineArrayMember } from "sanity";

export const ourSpace = defineType({
  name: "ourSpace",
  title: "Our Space Page",
  type: "document",

  groups: [
    { name: "hero",      title: "🖼  Hero" },
    { name: "stats",     title: "📊 Stats Strip" },
    { name: "facility",  title: "🏢 Facility Info" },
    { name: "locations", title: "📍 Locations" },
    { name: "cta",       title: "📣 CTA Banner" },
  ],

  fields: [

    // ── 🖼 HERO ───────────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "string",
      group: "hero",
      description: '📍 Text under "Our space." in the hero, e.g. "A purpose-built fencing club — not a gym we borrow two nights a week."',
      initialValue: "A purpose-built fencing club — not a gym we borrow two nights a week. Open seven days, now at two Oakville locations.",
    }),

    // ── 📊 STATS STRIP ───────────────────────────────────────────────────
    defineField({
      name: "stats",
      title: "Stats (4 numbers)",
      type: "array",
      group: "stats",
      description: "📍 The 4 large numbers shown in the strip below the hero — e.g. 18 / Full-length pistes. Add exactly 4 items.",
      of: [
        defineArrayMember({
          type: "object",
          title: "Stat",
          preview: { select: { title: "number", subtitle: "label" } },
          fields: [
            defineField({ name: "number", title: 'Number (e.g. "18" or "40+")', type: "string" }),
            defineField({ name: "label",  title: 'Label (e.g. "Full-length pistes")', type: "string" }),
          ],
        }),
      ],
    }),

    // ── 🏢 FACILITY INFO ─────────────────────────────────────────────────
    defineField({
      name: "facilityHeading",
      title: "Facility section heading",
      type: "string",
      group: "facility",
      description: '📍 Heading above the two paragraphs, e.g. "Built for fencing."',
      initialValue: "Built for fencing.",
    }),
    defineField({
      name: "facilityParagraph1",
      title: "Facility — left paragraph",
      type: "text",
      rows: 4,
      group: "facility",
      description: "📍 Left column paragraph about the physical facility (pistes, flooring, scoring etc.).",
      initialValue: "Most clubs book gym time wherever they can get it. We own our space. The Wyecroft Rd facility has 18 full-length pistes, electronic scoring on every strip, proper rubber flooring, and ceilings high enough to actually move. It's the same setup you'd find at a provincial tournament — because we didn't see a reason to train on anything less.",
    }),
    defineField({
      name: "facilityParagraph2",
      title: "Facility — right paragraph",
      type: "text",
      rows: 4,
      group: "facility",
      description: "📍 Right column paragraph about hours, gear, programs etc.",
      initialValue: "Open seven days across two Oakville locations. If you're new, all gear is provided — mask, jacket, gloves, weapon — nothing to buy before you try it. If you've been fencing for years, or want to compete, we run programs at every level. Some of our athletes train for nationals.",
    }),

    // ── 📍 LOCATIONS ─────────────────────────────────────────────────────
    defineField({
      name: "locations",
      title: "Locations (2 cards)",
      type: "array",
      group: "locations",
      description: "📍 The two location cards with map embeds. Add exactly 2 items — one per Oakville location.",
      of: [
        defineArrayMember({
          type: "object",
          title: "Location",
          preview: { select: { title: "name", subtitle: "address" } },
          fields: [
            defineField({ name: "name",    title: "Location name (e.g. Wyecroft Rd)", type: "string" }),
            defineField({ name: "address", title: "Full address", type: "string", description: 'e.g. "Unit 46 – 220 Wyecroft Rd, Oakville, ON  L6K 3T8"' }),
            defineField({ name: "hours",   title: "Hours", type: "string", description: 'e.g. "Open 7 days — evenings & weekends"' }),
            defineField({ name: "directionsUrl", title: "Google Maps directions URL", type: "url", description: "Paste the full Google Maps directions link" }),
            defineField({ name: "embedSrc",      title: "Google Maps embed URL", type: "url", description: 'Go to Google Maps → Share → Embed a map → copy the src="..." URL' }),
          ],
        }),
      ],
    }),

    // ── 📣 CTA BANNER ────────────────────────────────────────────────────
    defineField({
      name: "ctaHeading",
      title: "CTA heading",
      type: "string",
      group: "cta",
      description: '📍 Heading in the red banner at the bottom, e.g. "Come see it for yourself."',
      initialValue: "Come see it for yourself.",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA body text",
      type: "string",
      group: "cta",
      description: "📍 Smaller text below the CTA heading.",
      initialValue: "Book a free walk-through — we'll show you around, introduce you to the team, and help you find the right class.",
    }),
  ],
});
