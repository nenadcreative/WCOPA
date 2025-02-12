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

    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "mediaSection" },
        { type: "featuredList1" },
        { type: "featuredList2" },
        { type: "steps" },
        { type: "centeredText" },
        { type: "centeredCard" },
        { type: "hero" },
        { type: "featuredEvents" },
        { type: "cta1" },
        { type: "videoTestimonials" },
        { type: "faqSection" },
        { type: "cta2" },
        { type: "scheduleSection" },
        { type: "cardsFeature2" },
        { type: 'insights' },
        { type: 'successStories' },
        { type: 'gallery' },
        { type: 'contactInfo' },
        { type: 'cardsFeature1' },
        { type: 'sponsors' },
        { type: 'featuresSection' },
        { type: 'teamSection' },
        { type: "sponsorTestimonials" },
        { type: 'consultatesSection' }
      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: "intro",
              title: "Intro",
              of: ["hero"],
            },
            {
              name: "storytelling",
              title: "Storytelling",
              of: [
                "centeredText",
                "centeredCard",
                "featuredList1",
                "featuredList2",
                "faqSection",
                'cardsFeature2',
                'insights',
                'successStories',
                'gallery',
                'cardsFeature1',
                'featuresSection',
                'teamSection',
                'sponsorTestimonials',
                'consultatesSection'
              ],
            },
            {
              name: "engage",
              title: "Engage",
              of: [
                "cta1",
                "cta2",
                "featuredEvents",
                "steps",
                "videoTestimonials",
                "mediaSection",
                "scheduleSection",
                'gallery',
                'contactInfo',
                'sponsors'
              ],
            },
          ],
          views: [
            {
              name: "grid",
              previewImageUrl: (schemaTypeName) =>
                `/static/preview-${schemaTypeName}.png`,
            },
            { name: "list" },
          ],
        },
      },
    }),
  ],
});
