import { defineType, defineField } from "sanity";

export default defineType({
  name: "random",
  title: "Random Section",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
