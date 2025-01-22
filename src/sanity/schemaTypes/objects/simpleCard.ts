import { defineType, defineField } from "sanity";
import { PanelTop } from 'lucide-react';

export default defineType({
    name: "simpleCard",
    title: "Simple Card",
    type: "object",
    icon:PanelTop,
    fields: [
        defineField({
            name: "title",
            title: "Card Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "simpleBlockContent",
        }),

        defineField({
            name:'link',
            title:'Button/Link',
            type:'link'
        })
    ],
    preview: {
        select: {
          title: "title",
          subtitle: "subtitle",
        },
        prepare(selection) {
          const { title } = selection;
          return {
            title: title || "Cards Feature 2 Section Title",
            subtitle: "Simple Card",
          };
        },
      },
});