import { defineType, defineField } from "sanity";
import { CalendarDays } from 'lucide-react';

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarDays,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "blockContent",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: {
        dateFormat: "MMMM-DD-YYYY",
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pdf',
      title: 'PDF',
      type: 'file',

    })
  ],
});
