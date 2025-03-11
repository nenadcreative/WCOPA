import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "@/utils/stringFromPT";

export default defineType({
   name: 'videos',
   title: 'Videos',
   type: 'object',
   fields: [

      defineField({
         name: 'title',
         title: 'Title',
         type: 'blockSimple'
      }),
      defineField({
         name: 'description',
         title: 'Description',
         type: 'blockSimple'
      }),

      defineField({
         name: 'videos',
         title: 'Videos',
         type: 'array',
         of: [{ type: 'video', title: 'Video' }]
      })
   ],
   preview: {
      select: {
         title: "title",
      },
      prepare(selection) {
         const { title } = selection;
         return {
            title: stringFromPortableText(title) || "Videos",
         };
      },
   },
})