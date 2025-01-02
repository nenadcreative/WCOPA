import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaCard",
  title: "CTA Card",
  type: "object",
  fields: [
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "ctaText",
      title: "Cta Text",
      type: "string",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "link",
    }),
  ],
});
