import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { CalendarIcon } from "@sanity/icons";

export default defineType({
  name: "featuredEvents",
  title: "Featured Events",
  type: "object",
  icon: CalendarIcon,
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
      name: "title",
      title: "Title",
      type: "pt-string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "pt-string",
    }),
    defineField({
      name: "events",
      title: "Events",
      type: "array",
      of: [{ type: "reference", to: { type: "event" } }],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "simpleBlockContent",
      fieldset: "cta",
    }),
    defineField({
      name: "ctaLink",
      title: "Link",
      type: "link",
      fieldset: "cta",
    }),
    defineField({
      name: "variation",
      title: "Variations",
      type: "string",
      options: {
        list: [
          { title: "White BG, Default Decoration", value: "whiteDefault" },
          { title: "White BG, Offwhite Decoration", value: "whiteOffwhite" },
          { title: "Dark BG, Lavander Decoration", value: "darkLavander" },
          { title: "Dark BG, Offwhite Decoration", value: "darkOffwhite" },
        ],
      },
      initialValue: "whiteDefault",
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
        title: stringFromPortableText(title) || "Featured Events Section Title",
        subtitle: "Featured Events Section",
      };
    },
  },
});
