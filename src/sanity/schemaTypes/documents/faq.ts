import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "@/utils/stringFromPT";
import { MessageCircleQuestion } from "lucide-react";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: MessageCircleQuestion,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "blockSimple",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "subtitle",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: stringFromPortableText(title) || "FAQ Question",
        subtitle: "FAQ",
      };
    },
  },
});
