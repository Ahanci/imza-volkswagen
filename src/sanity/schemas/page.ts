import { defineType, defineField } from "sanity";

/**
 * Page Builder — Kurumsal, İletişim, SSS gibi statik sayfaları
 * blok-bazlı editlenebilir hale getirir.
 */
export const page = defineType({
  name: "page",
  title: "Sayfa (Page Builder)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Sayfa Başlığı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "pageType",
      title: "Sayfa Tipi",
      type: "string",
      options: {
        list: [
          { title: "Kurumsal", value: "kurumsal" },
          { title: "İletişim", value: "iletisim" },
          { title: "SSS", value: "sss" },
          { title: "Periyodik Bakım", value: "periyodik-bakim" },
          { title: "Genel", value: "genel" },
        ],
      },
    }),
    defineField({
      name: "blocks",
      title: "İçerik Blokları",
      type: "array",
      of: [
        {
          type: "object",
          name: "hero",
          title: "Hero Bölümü",
          fields: [
            { name: "eyebrow", title: "Üst Etiket", type: "string" },
            { name: "heading", title: "Ana Başlık", type: "string" },
            { name: "subheading", title: "Alt Başlık", type: "text", rows: 2 },
            { name: "backgroundImage", title: "Arka Plan Görseli", type: "image" },
            { name: "ctaLabel", title: "Buton Metni", type: "string" },
            { name: "ctaHref", title: "Buton Linki", type: "string" },
          ],
        },
        {
          type: "object",
          name: "textBlock",
          title: "Metin Bölümü",
          fields: [
            { name: "heading", title: "Başlık", type: "string" },
            { name: "body", title: "İçerik", type: "array", of: [{ type: "block" }] },
            { name: "columns", title: "Sütun Sayısı", type: "number", initialValue: 1, options: { list: [1, 2, 3] } },
          ],
        },
        {
          type: "object",
          name: "imageBlock",
          title: "Görsel",
          fields: [
            { name: "image", title: "Görsel", type: "image", options: { hotspot: true } },
            { name: "alt", title: "Alt Text", type: "string" },
            { name: "caption", title: "Açıklama", type: "string" },
          ],
        },
        {
          type: "object",
          name: "galleryBlock",
          title: "Galeri",
          fields: [
            { name: "heading", title: "Başlık", type: "string" },
            {
              name: "images",
              title: "Görseller",
              type: "array",
              of: [
                {
                  type: "image",
                  options: { hotspot: true },
                  fields: [{ name: "alt", type: "string", title: "Alt" }],
                },
              ],
            },
            { name: "columns", title: "Sütun", type: "number", initialValue: 3 },
          ],
        },
        {
          type: "object",
          name: "faqBlock",
          title: "SSS Bölümü",
          fields: [
            { name: "heading", title: "Başlık", type: "string" },
            {
              name: "faqs",
              title: "SSS Listesi",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "question", type: "string", title: "Soru" },
                    { name: "answer", type: "text", title: "Cevap", rows: 3 },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "cta",
          title: "Call-to-Action",
          fields: [
            { name: "heading", title: "Başlık", type: "string" },
            { name: "description", title: "Açıklama", type: "text" },
            { name: "primaryLabel", title: "Birincil Buton", type: "string" },
            { name: "primaryHref", title: "Birincil Link", type: "string" },
            { name: "secondaryLabel", title: "İkincil Buton", type: "string" },
            { name: "secondaryHref", title: "İkincil Link", type: "string" },
          ],
        },
        {
          type: "object",
          name: "stats",
          title: "İstatistikler",
          fields: [
            {
              name: "items",
              title: "İstatistikler",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "value", type: "string", title: "Değer (ör: 20+)" },
                    { name: "label", type: "string", title: "Etiket" },
                  ],
                  preview: { select: { title: "value", subtitle: "label" } },
                },
              ],
            },
          ],
        },
        {
          type: "object",
          name: "contact",
          title: "İletişim Bilgileri",
          fields: [
            { name: "address", type: "text", title: "Adres" },
            { name: "phone", type: "string", title: "Kurumsal Telefon" },
            { name: "whatsapp", type: "string", title: "WhatsApp" },
            { name: "email", type: "string", title: "E-posta" },
            { name: "hours", type: "string", title: "Çalışma Saatleri" },
            { name: "mapEmbed", type: "text", title: "Google Maps Embed HTML" },
          ],
        },
      ],
    }),
    defineField({
      name: "metaTitle",
      title: "SEO Title",
      type: "string",
      validation: (r) => r.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      validation: (r) => r.max(160),
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın Tarihi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "pageType" },
  },
});
