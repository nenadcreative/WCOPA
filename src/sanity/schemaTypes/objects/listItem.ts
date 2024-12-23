import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";

export const listItemType = defineType({
  name: "listItem",
  title: "List Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "pt-string",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title || "List Item",
      };
    },
  },
});
