import { defineType, defineField } from "sanity";

export default defineType({
  name: "mediaCard",
  title: "Media Card",
  type: "object",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "simpleBlockContent",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Name",
      description: "Name of the person",
      type: "string",
    }),
  ],
});
