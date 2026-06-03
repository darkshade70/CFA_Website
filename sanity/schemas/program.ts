export const program = {
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Program Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "whatIsIt",
      title: "What is it? (short description)",
      type: "text",
      rows: 4,
    },
    {
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "ctaHeading",
      title: "CTA Section Heading",
      type: "string",
      description: "Heading shown in the red CTA banner at the bottom, e.g. \"Not sure where to start?\"",
    },
    {
      name: "classes",
      title: "Classes / Pricing Tiers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Class Name", type: "string" },
            { name: "desc", title: "Short Description", type: "string" },
            { name: "level", title: "Level (e.g. Youth, Adult)", type: "string" },
            { name: "price", title: "Price", type: "string" },
            { name: "period", title: "Period (e.g. /month, 8-week course)", type: "string" },
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            {
              name: "featured",
              title: "Featured (highlight this card)",
              type: "boolean",
              initialValue: false,
            },
            {
              name: "features",
              title: "Features",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "ctaLabel",
              title: "CTA Label",
              type: "string",
              initialValue: "Register Now →",
            },
            {
              name: "ctaType",
              title: "CTA Type",
              type: "string",
              options: { list: ["primary", "secondary"] },
              initialValue: "secondary",
            },
          ],
        },
      ],
    },
    {
      name: "order",
      title: "Sort Order",
      type: "number",
    },
  ],
  orderings: [
    { title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
};
