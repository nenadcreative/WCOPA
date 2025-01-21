import { defineType, defineField } from "sanity";
import { FileQuestion } from "lucide-react";
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
  name: "faqSection",
  title: "Faq Section",
  type: "object",
  icon: FileQuestion,
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
      type: "blockSimple",
      group: "content",
    }),
    defineField({
      name: "faqs",
      title: "FAQ's",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faq" }] }],
      group: "content",
    }),
    defineField({
      name: "hideCta",
      title: "Hide CTA",
      type: "boolean",
      initialValue: false,
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
      name: "ctaLink",
      title: "Link",
      type: "link",
      fieldset: "cta",
      hidden: ({ parent }) => parent.hideCta,
      group: "content",
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
          { title: "Title - FAQ's", value: "title-faq" },
          { title: "FAQ - Title", value: "faq-title" },
          { title: "Centered", value: "centered" },
        ],
      },
      initialValue: "titleFaq",
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
        title: stringFromPortableText(title) || "FAQ Section Title",
        subtitle: "FAQ Section",
      };
    },
  },
});
