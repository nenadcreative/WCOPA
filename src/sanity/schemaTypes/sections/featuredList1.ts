import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { List } from "lucide-react";

export default defineType({
  name: "featuredList1",
  title: "Featured List 1",
  type: "object",
  icon: List,
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
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "blockSimple",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "blockSimple",
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
        ],
      },
    }),
    defineField({
      name: "pattern",
      title: "Pattern",
      type: "boolean",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Image - Text", value: "imageText" },
          { title: "Text - Image", value: "textImage" },
        ],
      },
      initialValue: "imageText",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),

    defineField({
      name: "list",
      title: "List",
      type: "array",
      of: [{ type: "simpleListItem" }],
    }),

    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "blockSimple",
      fieldset: "cta",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "link",
      fieldset: "cta",
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
        title: stringFromPortableText(title) || "Featured List 1 Section Title",
        subtitle: "Featured List 1 Section",
      };
    },
  },
});
