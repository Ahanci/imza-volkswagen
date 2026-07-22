import { defineType, defineField } from "sanity";

/**
 * SiteSettings — Singleton document (sadece 1 tane olmalı).
 * Footer, header, global SEO, sosyal medya, navigation, vs.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Ayarları (Singleton)",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Adı",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Slogan / Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site Açıklaması (SEO)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
    }),
    defineField({
      name: "contact",
      title: "İletişim",
      type: "object",
      fields: [
        { name: "phone", title: "Kurumsal Telefon", type: "string" },
        { name: "whatsapp", title: "WhatsApp (+90...)", type: "string" },
        { name: "email", title: "E-posta", type: "string" },
        { name: "address", title: "Adres", type: "text" },
        { name: "mapEmbed", title: "Google Maps Embed HTML", type: "text" },
        { name: "workingHours", title: "Çalışma Saatleri", type: "string" },
      ],
    }),
    defineField({
      name: "social",
      title: "Sosyal Medya",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "Twitter/X" },
        { name: "youtube", type: "url", title: "YouTube" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
      ],
    }),
    defineField({
      name: "navigation",
      title: "Ana Menü (Header)",
      type: "array",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            { name: "label", type: "string", title: "Etiket" },
            { name: "href", type: "string", title: "Link" },
            {
              name: "children",
              title: "Alt Menü",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", type: "string", title: "Etiket" },
                    { name: "href", type: "string", title: "Link" },
                  ],
                },
              ],
            },
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        },
      ],
    }),
    defineField({
      name: "footerText",
      title: "Footer Açıklama",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "defaultSeo",
      title: "Varsayılan SEO",
      type: "object",
      fields: [
        { name: "metaTitle", type: "string", title: "Title Template", description: "%title% | Site Adı" },
        { name: "metaDescription", type: "text", title: "Description" },
        { name: "ogImage", type: "image", title: "OG Image" },
      ],
    }),
    defineField({
      name: "analytics",
      title: "Analytics & Tracking",
      type: "object",
      fields: [
        { name: "googleAnalyticsId", type: "string", title: "Google Analytics ID" },
        { name: "googleTagManagerId", type: "string", title: "Google Tag Manager ID" },
        { name: "metaPixelId", type: "string", title: "Meta Pixel ID" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Ayarları" };
    },
  },
});
