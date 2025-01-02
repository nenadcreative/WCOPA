import { defineType, defineField } from "sanity";
import { ExternalLink } from "lucide-react";

export default defineType({
  name: "cta1",
  title: "CTA 1",
  type: "object",
  icon: ExternalLink,
  fields: [
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "pt-string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "simpleBlockContent",
    }),

    defineField({
      name: "videoLink",
      title: "Video Link",
      type: "url",
    }),

    defineField({
      name: "ctaCards",
      title: "CTA Cards",
      type: "array",
      of: [{ type: "ctaCard" }],
      validation: (Rule) => Rule.min(1),
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
  ],
});
