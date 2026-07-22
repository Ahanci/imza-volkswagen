/**
 * Sanity client — read-only (public) ve write (server) ayrı client'lar.
 */
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
// Type inference: image() herhangi bir Sanity image objesi kabul eder
type SanityImageSource = Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0];

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "k6mshj7p";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

// Public read client (browser + server) — cache: 'no-store' default, ISR için 'force-cache'
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // ISR için her zaman fresh
  perspective: "published",
});

// Write client (sadece server, seed/import için)
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// Image URL builder
const builder = imageUrlBuilder({ projectId, dataset });
export const urlForImage = (source: SanityImageSource) => builder.image(source);
