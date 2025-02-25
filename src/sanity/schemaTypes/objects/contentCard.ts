import { defineType, defineField } from "sanity";

export default defineType({
  name: "contentCard",
  title: "Content Card",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
    }),

    defineField({
      name: "titleSize",
      title: "Title Size",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "sm" },
          { title: "Medium", value: "md" },
          { title: "Large", value: "lg" },
        ],
      },
      initialValue: "md",
    }),

    defineField({
      name: "body",
      title: "Card Content",
      type: "blockContent",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "link",
    }),
  ],
});
