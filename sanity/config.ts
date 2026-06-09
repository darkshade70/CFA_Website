export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  // CDN caches for ~60s; we use the API directly so published changes
  // appear within one Next.js revalidation cycle (60s below)
  useCdn: false,
};
