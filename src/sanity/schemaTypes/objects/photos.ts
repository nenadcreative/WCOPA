import {defineType, defineField} from "sanity";
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
    name:'photos',
    title:'Photos',
    type:'object',
    fields:[
        
     defineField({
        name:'title',
        title:'Title',
        type:'blockSimple'
     }),
     defineField({
        name:'description',
        title:'Description',
        type:'blockSimple'
     }),
     defineField({
        name:'images',
        title:'Images',
        type:'array',
        of:[{type:'image'}]
     })
    ],
    preview: {
      select: {
        title: "title",
      },
      prepare(selection) {
        const { title } = selection;
        return {
          title: stringFromPortableText(title) || "Photos",
        };
      },
    },
})