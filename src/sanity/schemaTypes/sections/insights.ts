import { defineType, defineField } from "sanity";
import { Lightbulb } from 'lucide-react';
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
    name: "insights",
    title: "Insights",
    type: "object",
    icon: Lightbulb,
    groups: [
        { title: "Content", name: "content" },
        { title: "Design", name: "design" },
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
            title: "Card Title",
            type: "blockSimple",
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'blockSimple'
        }),
       defineField({
        name:'cards',
        title:'Cards',
        type:'array',
        of:[{type:'insightsCard'}]
       }
       ),
       defineField({
        name: "variation",
        title: "Variation",
        type: "string",
        initialValue: "lavander",
        options: {
          list: [
            { title: "Lavander", value: "lavander" },
            { title: "Gradient", value: "gradient" },
            { title: "Dark", value: "dark" },
          ],
        },
        group:'design'
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
            title: stringFromPortableText(title) || "Insights Section Title",
            subtitle: "Insights Section",
          };
        },
      },
});