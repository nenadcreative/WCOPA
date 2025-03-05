import { defineType, defineField } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Website Settings",
  type: "document",
  fieldsets: [
    {
      name: "mainNav",
      title: "Main Navigation",
      options: {
        collapsible: true,
        collapsed: false,

      },
    },
    {
      name: "footerNav",
      title: "Footer Navigation",
      options: {
        collapsible: true,
        collapsed: false,

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
      name: "mainHowToEnter",
      title: "How To Enter",
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
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainCompetitions",
      title: "Event/Competitions",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "competitions" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainScheduleOfEvents",
      title: "Event/Schedule Of Events",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "schedule-of-events" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainVenues",
      title: "Event/Venues",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "venues" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainTestimonials",
      title: "Resources/Testimonials",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "testimonials" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainComunitySupport",
      title: "Resources/Comunity & Support",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "comunity-&-support" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainMedia",
      title: "Resources/Media",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "media" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainPrizes",
      title: "Resources/Media/Prizes & Awards",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category",
            filterParams: { category: "prizes-and-awards" },
          },
        },
      ],
      fieldset: "mainNav",
    }),
    defineField({
      name: "mainAbout",
      title: "About",
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
      fieldset: "mainNav",
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
      name: "footerEvents",
      title: "Event Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "page" },
          options: {
            filter: "category == $category1 || category == $category2 || category == $category3",
            filterParams: { category1: "competitions", category2: "schedule-of-events", category3: "venues" },
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
            filter: "category == $category1 || category == $category2 || category == $category3 || category == $category4",
            filterParams: { category1: "testimonials", category2: "comunity-&-support", category3: "media", category4: "prizes-and-awards" },
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
