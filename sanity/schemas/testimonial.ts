export const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 3,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "authorName",
      title: "Author Name",
      type: "string",
    },
    {
      name: "authorDetail",
      title: "Author Detail (e.g. '3 years at CFA')",
      type: "string",
    },
    {
      name: "rating",
      title: "Star Rating",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
    },
    {
      name: "source",
      title: "Source (e.g. Google)",
      type: "string",
      initialValue: "Google",
    },
  ],
};
