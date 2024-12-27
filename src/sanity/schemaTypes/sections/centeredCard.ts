import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { BlockElementIcon } from "@sanity/icons";

export default defineType({
  name: "centeredCard",
  title: "Centered Card",
  type: "object",
  icon: BlockElementIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "pt-string",
    }),

    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "simpleBlockContent",
    }),
    defineField({
      name: "card",
      title: "Content Card",
      type: "contentCard",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "simpleBlockContent",
    }),
    defineField({
      name: "variation",
      title: "Variation",
      type: "string",
      initialValue: "white",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Offwhite", value: "offwhite" },
          { title: "Lavander", value: "lavander" },
          { title: "Gradient", value: "gradient" },
          { title: "Dark", value: "dark" },
          { title: "Pattern", value: "pattern" },
          { title: "Background Image", value: "image" },
        ],
      },
    }),
    defineField({
      name: "bgImage",
      title: "Background Image",
      type: "image",
      hidden: ({ parent }) => parent?.variation !== "image",
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
        title: stringFromPortableText(title) || "Centered Cards Section Title",
        subtitle: "Centered Card Section",
      };
    },
  },
});
