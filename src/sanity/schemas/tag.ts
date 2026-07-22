import { defineType, defineField } from "sanity";

export const tag = defineType({
  name: "tag",
  title: "Etiket",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Etiket Adı",
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
      name: "description",
      title: "Açıklama",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
