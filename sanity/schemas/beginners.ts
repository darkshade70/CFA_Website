import { defineField, defineType, defineArrayMember } from "sanity";

export const beginners = defineType({
  name: "beginners",
  title: "Beginners Page",
  type: "document",
  // Singleton — only one document of this type should ever exist
  __experimental_actions: ["update", "publish"],
  fields: [
    // ── Hero ──────────────────────────────────────────────────────────────
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "string",
      description: 'Text under "Beginners" in the hero, e.g. "No experience needed. No gear…"',
      initialValue: "No experience needed. No gear. No idea what weapon to pick. That's fine — we've got you.",
    }),

    // ── Intro section ──────────────────────────────────────────────────────
    defineField({
      name: "introHeading",
      title: "Intro heading",
      type: "string",
      initialValue: "Get started with fencing",
    }),
    defineField({
      name: "introParagraph1",
      title: "Intro paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "introParagraph2",
      title: "Intro paragraph 2",
      type: "text",
      rows: 3,
    }),

    // ── What to expect ────────────────────────────────────────────────────
    defineField({
      name: "expectItems",
      title: "What to expect (3 items)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Item",
          preview: { select: { title: "heading" } },
          fields: [
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({ name: "body", title: "Body", type: "text", rows: 2 }),
          ],
        }),
      ],
    }),

    // ── Class cards ───────────────────────────────────────────────────────
    defineField({
      name: "classes",
      title: "Classes",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Class",
          preview: { select: { title: "name", subtitle: "age" } },
          fields: [
            defineField({ name: "name", title: "Class name", type: "string" }),
            defineField({ name: "age", title: "Age range", type: "string", description: 'e.g. "Ages 7–14"' }),
            defineField({ name: "desc", title: "Short description", type: "string" }),
            defineField({
              name: "features",
              title: "Feature bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "price", title: "Price", type: "string", description: 'e.g. "$275"' }),
            defineField({ name: "period", title: "Period", type: "string", description: 'e.g. "8-week course"' }),
            defineField({ name: "image", title: "Card image", type: "image", options: { hotspot: true } }),
          ],
        }),
      ],
    }),

    // ── CTA banner ────────────────────────────────────────────────────────
    defineField({
      name: "ctaHeading",
      title: "CTA heading",
      type: "string",
      initialValue: "Not sure where to start?",
    }),
    defineField({
      name: "ctaBody",
      title: "CTA body text",
      type: "string",
      initialValue: "Get in touch — a quick chat and we'll point you in the right direction. No pressure, no commitment.",
    }),
  ],
});
