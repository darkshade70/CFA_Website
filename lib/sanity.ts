import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityConfig } from "@/sanity/config";

export const client = createClient(sanityConfig);

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Queries
export const programsQuery = `*[_type == "program"] | order(order asc) {
  _id,
  name,
  slug,
  tagline,
  heroImage,
  whatIsIt,
  "classCount": count(classes)
}`;

export const programBySlugQuery = `*[_type == "program" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  tagline,
  heroImage,
  whatIsIt,
  description,
  ctaHeading,
  classes[] {
    name,
    desc,
    level,
    price,
    period,
    image,
    featured,
    features,
    ctaLabel,
    ctaType
  }
}`;

export const coachesQuery = `*[_type == "coach"] | order(order asc) {
  _id,
  name,
  role,
  photo,
  bio,
  imgPos
}`;

export const testimonialsQuery = `*[_type == "testimonial"][0...6] {
  _id,
  quote,
  authorName,
  authorDetail,
  rating,
  source
}`;

export const faqsQuery = `*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer
}`;
