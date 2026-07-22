import { defineType, defineField } from "sanity";

export const brand = defineType({
  name: "brand",
  title: "Marka",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Marka Adı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo / Badge",
      type: "image",
      options: { hotspot: false },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    }),
    defineField({
      name: "logoInitials",
      title: "Logo Kısaltması (görsel yoksa)",
      type: "string",
      description: "VW, AU, SE vb.",
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "color",
      title: "Marka Rengi (hex)",
      type: "string",
      description: "Volkswagen: #001E50, Audi: #BB0A30 vb.",
      validation: (r) => r.regex(/^#[0-9A-Fa-f]{6}$/, { name: "hex color" }),
    }),
    defineField({
      name: "textColor",
      title: "Metin Rengi (hex, koyu arka plan için)",
      type: "string",
    }),
    defineField({
      name: "bgColor",
      title: "Arka Plan Rengi (opsiyonel)",
      type: "string",
    }),
    defineField({
      name: "shortDescription",
      title: "Kısa Açıklama",
      type: "text",
      rows: 2,
      validation: (r) => r.max(200),
    }),
    defineField({
      name: "longDescription",
      title: "Detaylı Açıklama",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "models",
      title: "Modeller",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Model Adı", type: "string" },
            { name: "years", title: "Yıllar (ör: 2010-2017)", type: "string" },
            { name: "code", title: "Platform Kodu (ör: MQB, MLB)", type: "string" },
          ],
          preview: { select: { title: "name", subtitle: "years" } },
        },
      ],
    }),
    defineField({
      name: "isVAGGroup",
      title: "VAG Grubu Üyesi",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
      subtitle: "logoInitials",
    },
  },
  orderings: [
    { title: "Sıralama", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
    { title: "İsim (A-Z)", name: "nameAsc", by: [{ field: "name", direction: "asc" }] },
  ],
});
