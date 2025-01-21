import { defineType, defineField } from "sanity";
import { Calendar1 } from "lucide-react";

export default defineType({
  name: "scheduleItem",
  title: "Schedule Item",
  type: "object",
  icon: Calendar1,
  fields: [
    defineField({
      name: "time",
      title: "Time",
      type: "string",
    }),

    defineField({
      name: "eventList",
      title: "Event List",
      type: "array",
      of: [{ type: "simpleListItem" }],
    }),
  ],
});
