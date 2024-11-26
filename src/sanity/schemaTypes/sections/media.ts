import { defineType, defineField } from "sanity";

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
  ],
});
