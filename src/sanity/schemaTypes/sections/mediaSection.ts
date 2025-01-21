import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { Tv } from "lucide-react";

export default defineType({
  name: "mediaSection",
  title: "Media Section",
  type: "object",
  icon: Tv,
  fieldsets: [
    {
      name: "cta",
      title: "CTA",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "blockSimple",
    }),
    defineField({
      name: "variation",
      title: "Variation",
      type: "string",
      initialValue: "light",
      options: {
        list: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
      },
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [{ type: "mediaCard" }],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "blockSimple",
      fieldset: "cta",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "link",
      fieldset: "cta",
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
        title: stringFromPortableText(title) || "Media Section Title",
        subtitle: "Media Section",
      };
    },
  },
});
