import { defineField, defineType, defineArrayMember } from "sanity";

export const program = defineType({
  name: "program",
  title: "Programs",
  type: "document",
  preview: {
    select: { title: "name", subtitle: "tagline", media: "heroImage" },
  },
  fields: [
    defineField({
      name: "name",
      title: "Program Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      description: 'Click "Generate" to auto-fill from the name. Must match: foil, epee, sabre, or historical.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'Short line shown on the hero, e.g. "Precision. Timing. Control."',
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "whatIsIt",
      title: 'What is it? (two paragraphs)',
      type: "text",
      rows: 5,
      description: "Shown in the intro card. Separate two paragraphs with a blank line.",
    }),
    defineField({
      name: "ctaHeading",
      title: "CTA Section Heading",
      type: "string",
      description: 'Heading in the red CTA banner, e.g. "Not sure where to start?"',
    }),
    defineField({
      name: "classes",
      title: "Classes / Pricing Tiers",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          title: "Class",
          preview: {
            select: { title: "name", subtitle: "price" },
          },
          fields: [
            defineField({ name: "name", title: "Class Name", type: "string" }),
            defineField({ name: "desc", title: "Short Description", type: "string" }),
            defineField({ name: "price", title: "Price", type: "string", description: 'e.g. "$275" or "From $160"' }),
            defineField({ name: "period", title: "Period", type: "string", description: 'e.g. "/ month" or "8-week course"' }),
            defineField({
              name: "featured",
              title: "Featured card",
              type: "boolean",
              description: "Highlight this card as the recommended / most popular option",
              initialValue: false,
            }),
            defineField({
              name: "features",
              title: "Feature bullets",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({
              name: "ctaLabel",
              title: "Button label",
              type: "string",
              initialValue: "Register Now →",
            }),
            defineField({
              name: "ctaType",
              title: "Button style",
              type: "string",
              options: {
                list: [
                  { title: "Primary (filled)", value: "primary" },
                  { title: "Secondary (outlined)", value: "secondary" },
                ],
                layout: "radio",
              },
              initialValue: "secondary",
            }),
            defineField({
              name: "image",
              title: "Card image (optional)",
              type: "image",
              options: { hotspot: true },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first (1 = Foil, 2 = Épée, 3 = Sabre, 4 = Historical)",
    }),
  ],
  orderings: [
    { title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
