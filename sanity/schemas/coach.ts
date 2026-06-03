export const coach = {
  name: "coach",
  title: "Coaches",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Role / Title",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
    },
    {
      name: "imgPos",
      title: "Image Position (CSS)",
      type: "string",
      description: "CSS object-position for face alignment, e.g. \"center 15%\" or \"center top\". Leave blank to use the default.",
      initialValue: "center top",
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
