import { defineType, defineField } from "sanity";
import { Star } from 'lucide-react';
import {stringFromPortableText} from 'src/utils/stringFromPT';

export default defineType({
    name: "successStories",
    title: "Success Stories",
    type: "object",
    icon: Star,
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
            name: "title",
            title: "Title",
            type: "blockSimple",
            group:'content'
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'blockSimple',
            group:'content'
        }),
        defineField({
            name:'testimonials',
            title:'Testimonials',
            type:'array',
            of:[{type:'successCard'}],
            group:'content'
        }),
        defineField({
            name:'ctaText',
            title:'CTA Text',
            type:'blockSimple',
            group:'content'
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
          title: stringFromPortableText(title) || "Success Stories Title",
          subtitle: "Success Stories Section",
        };
      },
    },
});