import { defineType, defineField } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "ogImage",
      title: "OG Image",
      description: 'This is an image that appears when a website link is shared. Recomended size is 1200 X 630',
      type: "image",
    }),
    defineField({
      name: 'noindex',
      title: 'No Index',
      description: 'Exclude the page from appearing on search engines',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'navigation',
      title: 'Exclude from Navigation',
      description: 'Exclude the page from appearing on the main navigation',
      type: 'boolean',
      initialValue: false
    })
  ],
});
