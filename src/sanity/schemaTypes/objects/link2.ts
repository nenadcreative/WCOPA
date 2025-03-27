import { defineType, defineField } from "sanity";

export const linkType = defineType({
  name: "link",
  title: "Link",
  description:
    "You can use this to create links to other pages or external sites.",
  type: "object",
  fields: [
    defineField({
      name: "hide",
      title: "Hide Link",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "linkText",
      title: "Link Text",
      type: "string",
    }),

    defineField({
      title: "Select the type of link",
      description:
        "External links go to other websites using the format `https://www.google.com`. Internal links are references to other pages.",
      name: "linkType",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "External", value: "external" },
          { title: "Internal", value: "internal" },
          { title: "File", value: "file" },
          { title: "Form Pop Up", value: "popup" },
        ],
        layout: "radio",
      },
      initialValue: 'none'
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http", "mailto", "tel"],
        }),
    }),
    defineField({
      title: "File",
      name: "file",
      type: "file",
      hidden: ({ parent }) => parent?.linkType !== "file", // hidden if link type is not file
    }),
    defineField({
      title: "Pick Form",
      name: "pickForm",
      type: "string",
      options: {
        list: [
          { title: "Testimonial Submission", value: "testimonial" },
          { title: "Nomination", value: "nomination" },

        ],
      },
      hidden: ({ parent }) => parent?.linkType !== "popup", // hidden if link type is not file
    }),
    defineField({
      title: "Open in new tab?",
      description: "Check this if you want for a link to open in a new tab",
      name: "blank",
      type: "boolean",
      hidden: ({ parent }) => parent?.linkType !== "external", // hidden if link type is not external
    }),
    defineField({
      name: "internalLink",
      type: "reference",
      title: "Internal Link",
      hidden: ({ parent }) => parent?.linkType !== "internal", // hidden if link type is not internal
      to: [{ type: "home" }, { type: "page" }],
    }),
  ],
});
