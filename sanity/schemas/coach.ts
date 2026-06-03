import { defineField, defineType } from "sanity";

export const coach = defineType({
  name: "coach",
  title: "Coaches",
  type: "document",
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "imgPos",
      title: "Image Position (CSS)",
      type: "string",
      description: 'CSS object-position for face alignment in the card, e.g. "center 15%" or "center top". Leave blank for default.',
      initialValue: "center top",
    }),
    defineField({
      name: "order",
      title: "Sort Order",
      type: "number",
      description: "Lower numbers appear first (1, 2, 3…)",
    }),
  ],
  orderings: [
    { title: "Sort Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
