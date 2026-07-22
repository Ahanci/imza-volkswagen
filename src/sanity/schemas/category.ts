import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategori",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Kategori Adı",
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
      name: "iconName",
      title: "İkon (Lucide)",
      type: "string",
      description: "Cog, Disc, Gauge, Zap, Filter, Wrench, Wind, Battery",
    }),
    defineField({
      name: "color",
      title: "Renk (hex)",
      type: "string",
      validation: (r) => r.regex(/^#[0-9A-Fa-f]{6}$/),
    }),
    defineField({
      name: "gradient",
      title: "Gradient Class (Tailwind)",
      type: "string",
      description: "from-vag-navy to-blue-800",
    }),
    defineField({
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "iconName" },
  },
  orderings: [
    { title: "Sıralama", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
