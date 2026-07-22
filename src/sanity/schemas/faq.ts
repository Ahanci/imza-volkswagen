import { defineType, defineField } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "Sıkça Sorulan Soru",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Soru",
      type: "string",
      validation: (r) => r.required().min(10).max(200),
    }),
    defineField({
      name: "answer",
      title: "Cevap",
      type: "text",
      rows: 4,
      validation: (r) => r.required().min(20),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Genel", value: "genel" },
          { title: "Ürün", value: "urun" },
          { title: "Sipariş", value: "siparis" },
          { title: "Garanti", value: "garanti" },
          { title: "Ödeme", value: "odeme" },
          { title: "Kargo", value: "kargo" },
        ],
      },
    }),
    defineField({
      name: "order",
      title: "Sıralama",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
  orderings: [
    { title: "Sıralama", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
