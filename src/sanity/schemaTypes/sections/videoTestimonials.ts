import { defineType, defineField } from "sanity";
import { FileVideo2 } from "lucide-react";
import { stringFromPortableText } from "src/utils/stringFromPT";

export default defineType({
  name: "videoTestimonials",
  title: "Video Testimonials",
  type: "object",
  icon: FileVideo2,
  fields: [
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
      name: "description",
      title: "Description",
      type: "blockSimple",
    }),

    defineField({
      name: "link",
      title: "Link",
      type: "link",
    }),

    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "videoTestimonial" }],
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
    }),
    defineField({
      name: "layout",
      title: "Testimonial Layout",
      type: "string",
      options: {
        list: [
          { title: "Quote - Video", value: "quoteVideo" },
          { title: "Video - Quote", value: "videoQuote" },
        ],
      },
      initialValue: "quoteVideo",
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
        title: stringFromPortableText(title) || "Video Testimonials Title",
        subtitle: "Video Testimonials Section",
      };
    },
  },
});
