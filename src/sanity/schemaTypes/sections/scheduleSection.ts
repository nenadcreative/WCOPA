import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "@/utils/stringFromPT";
import { CalendarRange } from "lucide-react";

export default defineType({
  name: "scheduleSection",
  title: "Schedule Section",
  type: "object",
  icon: CalendarRange,
  groups: [
    { title: "Content", name: "content" },
    { title: "Design", name: "design" },
  ],
  fields: [
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
      name: "schedule",
      title: "Schedule",
      type: "array",
      of: [{ type: "scheduleItem" }],
      group: "content",
    }),
    defineField({
      name: "note",
      title: "Note",
      type: "blockSimple",
      group: "content",
    }),
    defineField({
      name: "variation",
      title: "Variation",
      type: "string",
      initialValue: "lavander",
      options: {
        list: [
          { title: "Lavander", value: "lavander" },
          { title: "Dark", value: "dark" },
        ],
      },
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
        title: stringFromPortableText(title) || "Schedule Section Title",
        subtitle: "Schedule Section",
      };
    },
  },
});
