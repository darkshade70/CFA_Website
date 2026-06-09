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
            S.listItem().id("programs").title("Programs").child(S.documentTypeList("program").title("Programs")),
            S.listItem().id("coaches").title("Coaches").child(S.documentTypeList("coach").title("Coaches")),
            S.listItem().id("beginners").title("Beginners Page")
              .child(S.document().schemaType("beginners").documentId("beginners-singleton")),
            S.listItem().id("testimonials").title("Testimonials").child(S.documentTypeList("testimonial").title("Testimonials")),
            S.listItem().id("faqs").title("FAQs").child(S.documentTypeList("faq").title("FAQs")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
