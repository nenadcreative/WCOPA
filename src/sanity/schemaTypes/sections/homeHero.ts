import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";

export default defineType({
  name: "homeHero",
  title: "Home Hero",
  type: "object",

  fields: [
    defineField({
      name: "videoLink",
      title: "Video Link",
      type: "url",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockSimple",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "blockSimple",
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
      validation: (rule) => rule.max(2),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: stringFromPortableText(title) || "Home Hero Section Title",
        subtitle: "Home Hero Section",
      };
    },
  },
});
