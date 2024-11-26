import { defineType, defineField } from "sanity";

export default defineType({
  name: "simpleLink",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
    }),
    defineField({
      title: "URL",
      name: "href",
      type: "url",
    }),
  ],
});
