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
        { type: "insights" },
        { type: "successStories" },
        { type: "gallery" },
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
