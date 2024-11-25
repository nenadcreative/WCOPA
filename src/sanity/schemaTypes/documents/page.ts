import { defineType, defineField } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    { name: "content", title: "Content" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "content",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "How To Enter", value: "how-to-enter" },
          { title: "Event", value: "event" },
          { title: "Resources", value: "resources" },
          { title: "About", value: "about" },
          { title: "Contact", value: "contact" },
          { title: "Legal", value: "legal" },
        ],
      },
    }),
  ],
});
