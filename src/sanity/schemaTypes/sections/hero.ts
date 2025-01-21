import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { Monitor } from "lucide-react";

export default defineType({
  name: "hero",
  title: "Hero",
  type: "object",
  icon: Monitor,
  fields: [
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
      name: "variation",
      title: "Variation",
      type: "string",
      options: {
        list: [
          { title: "Gradient", value: "gradient" },
          { title: "Pattern", value: "pattern" },
          { title: "Dark", value: "dark" },
          { title: "2 Column Logo", value: "logo" },
          { title: "2 Column Image", value: "image" },
        ],
      },
      initialValue: "gradient",
    }),
    defineField({
      name: "image",
      title: "Image",
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
        title: stringFromPortableText(title) || "Hero Title",
        subtitle: "Hero Section",
      };
    },
  },
});
