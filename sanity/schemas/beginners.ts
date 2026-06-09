import { defineField, defineType, defineArrayMember } from "sanity";

export const beginners = defineType({
  name: "beginners",
  title: "Beginners Page",
  type: "document",

  // ── Tabs — one per page section ──────────────────────────────────────────
  groups: [
    { name: "hero",    title: "🖼  Hero Banner" },
    { name: "intro",   title: "📝 Intro Section" },
    { name: "expect",  title: "✅ What to Expect" },
    { name: "classes", title: "🥋 Class Cards" },
    { name: "cta",     title: "📣 CTA Banner" },
  ],

  fields: [

    // ── 🖼 HERO BANNER ────────────────────────────────────────────────────
    // This is the big background-image section at the top of the page.
    // It shows: "New to fencing" label → "Beginners" heading → subtitle text → buttons
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "string",
      group: "hero",
      description: '📍 Appears directly under the "Beginners" heading in the hero image. e.g. "No experience needed. No gear. No idea what weapon to pick. That\'s fine — we\'ve got you."',
      initialValue: "No experience needed. No gear. No idea what weapon to pick. That's fine — we've got you.",
    }),

    // ── 📝 INTRO SECTION ─────────────────────────────────────────────────
    // The white/dark section just below the hero with a heading + two paragraphs.
    defineField({
      name: "introHeading",
      title: "Intro heading",
      type: "string",
      group: "intro",
      description: '📍 Large heading at the top of the intro section, e.g. "Get started with fencing"',
      initialValue: "Get started with fencing",
    }),
    defineField({
      name: "introParagraph1",
      title: "Intro — first paragraph",
      type: "text",
      rows: 3,
      group: "intro",
      description: "📍 First body paragraph in the intro section (left or top).",
    }),
    defineField({
      name: "introParagraph2",
      title: "Intro — second paragraph",
      type: "text",
      rows: 3,
      group: "intro",
      description: "📍 Second body paragraph in the intro section (below the first). Leave blank to show only one paragraph.",
    }),

    // ── ✅ WHAT TO EXPECT ────────────────────────────────────────────────
    // The row of 3 numbered items (01, 02, 03) — e.g. No gear needed / Small groups / 8 weeks
    defineField({
      name: "expectItems",
      title: "What to expect — 3 numbered items",
      type: "array",
      group: "expect",
      description: "📍 The three numbered highlights shown in the grey strip (01 No gear needed, 02 Small groups, 03 8 weeks to sparring). Add exactly 3 items.",
      of: [
        defineArrayMember({
          type: "object",
          title: "Item",
          preview: { select: { title: "heading" } },
          fields: [
            defineField({ name: "heading", title: 'Heading (e.g. "No gear needed")', type: "string" }),
            defineField({ name: "body",    title: "Body text (1-2 sentences)", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),

    // ── 🥋 CLASS CARDS ───────────────────────────────────────────────────
    // The two side-by-side cards: Youth Beginners and Adult Beginners
    defineField({
      name: "classes",
      title: "Class cards (Youth & Adult)",
      type: "array",
      group: "classes",
      description: '📍 The two class cards under "Start your fencing journey" — typically Youth Beginners (Ages 7–14) and Adult Beginners (Ages 14+). Add items in the order you want them to appear.',
      of: [
        defineArrayMember({
          type: "object",
          title: "Class",
          preview: { select: { title: "name", subtitle: "age" } },
          fields: [
            defineField({ name: "name",  title: "Class name (e.g. Youth Beginners)", type: "string" }),
            defineField({ name: "age",   title: "Age range (e.g. Ages 7–14)", type: "string" }),
            defineField({ name: "desc",  title: "Short description (1–2 sentences)", type: "string" }),
            defineField({
              name: "features",
              title: "Feature bullet points",
              type: "array",
              description: 'e.g. "No experience required", "All gear provided"',
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "price",  title: "Price (e.g. $275)",         type: "string" }),
            defineField({ name: "period", title: "Period (e.g. 8-week course)", type: "string" }),
            defineField({ name: "image",  title: "Card photo (optional)",      type: "image", options: { hotspot: true } }),
          ],
        }),
      ],
    }),

    // ── 📣 CTA BANNER ────────────────────────────────────────────────────
    // The red banner at the very bottom of the page
    defineField({
      name: "ctaHeading",
      title: "CTA heading",
      type: "string",
      group: "cta",
      description: '📍 Large heading inside the red banner at the bottom, e.g. "Not sure where to start?"',
      initialValue: "Not sure where to start?",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA body text",
      type: "string",
      group: "cta",
      description: "📍 Smaller text below the CTA heading inside the red banner.",
      initialValue: "Get in touch — a quick chat and we'll point you in the right direction. No pressure, no commitment.",
    }),
  ],
});
