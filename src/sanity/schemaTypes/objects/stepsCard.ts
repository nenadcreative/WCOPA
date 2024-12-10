import { defineType, defineField } from "sanity";

export default defineType({
  name: "stepsCard",
  title: "Steps Card",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Card Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "simpleBlockContent",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
});
