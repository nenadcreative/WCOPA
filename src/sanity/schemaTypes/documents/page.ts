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
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
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
          { title: 'Event/Competitions', value: 'competitions' },
          { title: "Event/Schedule Of Events", value: "schedule-of-events" },
          { title: "Event/Venues", value: "venues" },
          { title: "Resources/Testimonials", value: "testimonials" },
          { title: 'Resources/Comunity & Support', value: 'comunity-&-support' },
          { title: "Resources/Media", value: "media" },
          { title: "Resources/Media/Prizes & Awards", value: "prizes-and-awards" },
          { title: "About", value: "about" },
          { title: "Legal", value: "legal" },
          { title: "none", value: "none" },
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
        { type: "cta2" },
        { type: "videoTestimonials" },
        { type: "faqSection" },
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
        { type: 'consultatesSection' },
        { type: 'steps2' },
        { type: 'steps3' },
        { type: 'winners' },
        { type: 'winners2' },
        { type: 'contactForm' },
        { type: 'judges' },
        { type: 'industryTestimonials' },
        { type: 'auditionForm' },
        { type: 'imageCards' },
        { type: 'nationalDirectors' },
        { type: 'ageDivisions' },
        { type: 'tableSection' },
        { type: 'fullContent' },
      ],
      validation: (rule) => rule.required(),
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
                'industryTestimonials',
                'consultatesSection',
                'winners',
                'winners2',
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
                'sponsors',
                'steps2',
                'steps3',
                'contactForm',
                'auditionForm',
                'imageCards',
                'nationalDirectors',
                'ageDivisions',
                'tableSection'
              ],
            },
          ],
          views: [
            {
              name: "grid",
              previewImageUrl: (schemaTypeName) =>
                `/sections/preview-${schemaTypeName}.png`,
            },
            { name: "list" },
          ],
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        title,
        subtitle: `Page Category: ${category}`,
      }
    }
  },
});
