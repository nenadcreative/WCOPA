import { defineType, defineField } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Website Settings",
  type: "document",
  fieldsets: [
    {
      name: "footerNav",
      title: "Footer Navigation",
      options: {
        collapsible: true,
        collapsed: false,
        columns: 2,
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),

    defineField({
      name: "footerText",
      title: "Footer Text",
      description: 'Text after "Copyright" and "Year" in footer',
      type: "string",
    }),
    defineField({
      name: "footerHowToEnter",
      title: "How To Enter Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "how-to-enter" },
          },
        },
      ],
      fieldset: "footerNav",
    }),
    defineField({
      name: "footerEvent",
      title: "Event Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "event" },
          },
        },
      ],
      fieldset: "footerNav",
    }),
    defineField({
      name: "footerResources",
      title: "Resources Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "resources" },
          },
        },
      ],
      fieldset: "footerNav",
    }),
    defineField({
      name: "footerAbout",
      title: "About Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "about" },
          },
        },
      ],
      fieldset: "footerNav",
    }),
    defineField({
      name: "footerContact",
      title: "Contact Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "contact" },
          },
        },
      ],
      fieldset: "footerNav",
    }),
    defineField({
      name: "footerLegal",
      title: "Legal Pages",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "legal" },
          },
        },
      ],
      fieldset: "footerNav",
    }),
  ],
});
