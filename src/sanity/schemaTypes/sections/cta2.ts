import { defineType, defineField } from "sanity";
import { SquareArrowOutUpRight } from "lucide-react";
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
  name: "cta2",
  title: "Cta 2",
  type: "object",
  icon: SquareArrowOutUpRight,
  groups: [
    { title: "Content", name: "content" },
    { title: "Design", name: "design" },
  ],
  fieldsets: [
    {
      name: "cta",
      title: "CTA",
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
      group: "content",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      group: "content",
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "simpleBlockContent",
      fieldset: "cta",
      hidden: ({ parent }) => parent.hideCta,
      group: "content",
    }),
    defineField({
      name: "ctaLinks",
      title: "Link",
      type: "array",
      of: [{ type: "link" }],
      fieldset: "cta",
      hidden: ({ parent }) => parent.hideCta,
      group: "content",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "content",
      hidden: ({ parent }) => parent.layout === "centered" || parent.layout === "title-text",
    }),
    defineField({
      name: "variation",
      title: "Variation",
      type: "string",
      initialValue: "white",
      options: {
        list: [
          { title: "White", value: "white" },
          { title: "Offwhite", value: "offwhite" },
          { title: "Lavander", value: "lavander" },
          { title: "Gradient", value: "gradient" },
          { title: "Dark", value: "dark" },
          { title: "Pattern", value: "pattern" },
        ],
      },
      group: "design",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Text - Image", value: "text-image" },
          { title: "Image - Text", value: "image-text" },
          { title: "Centered", value: "centered" },
          { title: "Title - text", value: "title-text" },
        ],
      },
      initialValue: "text-image",
      group: "design",
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
        title: stringFromPortableText(title) || "CTA 2 Section Title",
        subtitle: "CTA 2 Section",
      };
    },
  },
});
