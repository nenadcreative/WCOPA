import { defineType, defineField } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
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
      hidden: true,
      group: "content",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "homeHero" },
        { type: "mediaSection" },
        { type: "featuredList1" },
        { type: "featuredList2" },
        { type: "centeredText" },
        { type: "centeredCard" },
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
        { type: "steps" },
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
        { type: 'homeMediaGrid' },
        { type: 'instagram' }

      ],
      options: {
        insertMenu: {
          groups: [
            {
              name: "intro",
              title: "Intro",
              of: ["homeHero", 'homeMediaGrid'],
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
                "cardsFeature2",
                "insights",
                "successStories",
                "gallery",
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
                "gallery",
                "instagram"
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
});
