import { defineType, defineField } from "sanity";
import { LayoutPanelTop } from 'lucide-react';
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
  name: "cardsFeature2",
  title: "Cards Feature 2",
  type: "object",
  icon: LayoutPanelTop,
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
      name: 'subtitle',
      title: 'Subtitle',
      type: 'blockSimple',
      group: 'content'
    }),
    defineField({
      name: 'subDescription',
      title: 'Sub Description',
      type: 'blockSimple',
      group: 'content'
    }),

    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'simpleCard' }],
      group: 'content'
    }),
    defineField({
      name: "variation",
      title: "Variation",
      type: "string",
      initialValue: "offwhite",
      options: {
        list: [
          { title: "Offwhite", value: "offwhite" },
          { title: "Lavander", value: "lavander" },
          { title: "Dark", value: "dark" },
        ],
      },
      group: 'design'
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Centered", value: "centered" },
        ],
      },
      initialValue: "left",
      group: "design"
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "blockSimple",
      group: "content",
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
        title: stringFromPortableText(title) || "Cards Feature 2 Section Title",
        subtitle: "Cards Feature 2 Section",
      };
    },
  },
});
