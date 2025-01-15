import { defineType, defineField } from "sanity";
import { media } from "sanity-plugin-media";

export default defineType({
  name: "videoTestimonial",
  title: "Video Testimonial",
  type: "object",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "blockSimple",
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "occupation",
      title: "Job/Talent/Occupation",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "videoThumbnail",
      title: "Video Thumbnail",
      type: "image",
    }),
    defineField({
      name: "videoLink",
      title: "Video link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "occupation",
      media: "image",
    },
    // prepare(selection) {
    //   const { title } = selection;
    //   return {
    //     subtitle: "Video Testimonials Section",
    //   };
    // },
  },
});
