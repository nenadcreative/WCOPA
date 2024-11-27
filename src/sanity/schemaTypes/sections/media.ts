import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";

export default defineType({
  name: "media",
  title: "Media Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "pt-string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "pt-string",
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
