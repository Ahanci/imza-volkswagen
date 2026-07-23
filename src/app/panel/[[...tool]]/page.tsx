"use client";

/**
 * Sanity Studio — /panel route'unda çalışır.
 * Müşteri içerik yönetimi için (ürün, blog, sayfa, SSS, marka).
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity/sanity.config";

export default function PanelPage() {
  return <NextStudio config={config} />;
}
