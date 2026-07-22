"use client";

/**
 * Sanity Studio — Next.js embedded.
 * /studio route'unda çalışır. Müşteri içerik yönetimi için.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
