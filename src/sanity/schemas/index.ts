/**
 * Tüm Sanity schema'ları — tek yerden export.
 * Her schema ayrı dosyada tanımlı, burada toplanır.
 */
import { product } from "./product";
import { blog } from "./blog";
import { brand } from "./brand";
import { category } from "./category";
import { tag } from "./tag";
import { faq } from "./faq";
import { page } from "./page";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  product,
  blog,
  brand,
  category,
  tag,
  faq,
  page,
  siteSettings,
];
