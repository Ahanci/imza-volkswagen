/**
 * Sanity Studio config — Next.js embed için.
 * /studio route'unda çalışır (src/app/studio/[[...tool]]/page.tsx).
 */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "k6mshj7p";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export default defineConfig({
  name: "imza-vw",
  title: "İmza Volkswagen — VAG Yedek Parça CMS",
  projectId,
  dataset,
  apiVersion,
  basePath: "/studio",
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  schema: {
    types: schemaTypes,
  },
});
