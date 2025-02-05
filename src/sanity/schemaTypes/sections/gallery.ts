import { defineType, defineField } from "sanity";
import { Images } from 'lucide-react';
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  icon: Images,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "design",
      title: "Design",
    },
  ],
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'blockSimple',
      group: 'content'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockSimple',
      group: 'content'
    }),
    defineField({
      name: 'galleries',
      title: 'Galleries',
      type: 'array',
      of: [{ type: 'photos' }],
      group: 'content'
    }),
    defineField({
      name: 'videoHighligths',
      title: 'Video Highlights',
      type: 'videos',
      group: 'content'
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
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: stringFromPortableText(title) || "Gallery Title",
        subtitle: "Gallery Section",
      };
    },
  },

})