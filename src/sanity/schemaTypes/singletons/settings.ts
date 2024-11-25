import { defineType, defineField } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Website Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    }),
    defineField({
      name:'seo',
      title:'SEO',
      type:'seo',
    })
  ],
});
