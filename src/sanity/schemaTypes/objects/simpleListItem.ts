import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";

export const simpleListItemType = defineType({
  name: "simpleListItem",
  title: "Simple List Item",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Text",
      type: "blockSimple",
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: stringFromPortableText(title) || "Simple List Item",
      };
    },
  },
});
