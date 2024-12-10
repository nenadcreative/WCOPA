import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";

export default defineType({
  name: "steps",
  title: "Steps",
  type: "object",
  groups: [
    { name: "content", title: "Content" },
    { name: "design", title: "Design" },
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
      name: "title",
      title: "Title",
      type: "pt-string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      description:
        "Marking sentences in Italic will show them in a bigger font on the frontend",
      type: "simpleBlockContent",
      group: "content",
    }),
    defineField({
      name: "bgImage",
      title: "Background Image",
      type: "image",
      group: "content",
      validation: (Rule) =>
        Rule.required().info("Please upload or select a background image"),
    }),
    defineField({
      name: "variation",
      title: "Variation",
      description:
        "Variation of the section. Mainly influences the color scheme.",
      type: "string",
      initialValue: "white",
      group: "design",
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
      group: "design",
      hidden: ({ parent }) => parent?.variation === "dark",
    }),

    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "stepsCard",
        },
      ],
      group: "content",
      validation: (Rule) => Rule.required().length(3),
    }),
    defineField({
      name: "ctaText",
      title: "CTA Text",
      type: "simpleBlockContent",
      fieldset: "cta",
      group: "content",
    }),
    defineField({
      name: "ctaLinks",
      title: "Links",
      type: "array",
      of: [{ type: "link" }],
      validation: (Rule) => Rule.max(2),
      fieldset: "cta",
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
        title: stringFromPortableText(title) || "Steps Section Title",
        subtitle: "Steps Section",
      };
    },
  },
});
