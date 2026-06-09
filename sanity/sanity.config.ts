import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { sanityConfig } from "./config";

export default defineConfig({
  basePath: "/studio",
  name: "cfa-studio",
  title: "CFA Studio",
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.documentTypeListItem("program").title("Programs"),
            S.documentTypeListItem("coach").title("Coaches"),
            S.listItem()
              .id("beginners")
              .title("Beginners Page")
              .child(S.document().schemaType("beginners").documentId("beginners-singleton")),
            S.documentTypeListItem("testimonial").title("Testimonials"),
            S.documentTypeListItem("faq").title("FAQs"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
