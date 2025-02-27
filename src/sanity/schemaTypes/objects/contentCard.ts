import { defineType, defineField } from "sanity";
import { IdCard } from 'lucide-react';

export default defineType({
  name: "contentCard",
  title: "Content Card",
  type: "object",
  icon: IdCard,
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
  preview: {
    select: {
      title: "title",
      subtitle: "titleSize",
    },
  },
});
