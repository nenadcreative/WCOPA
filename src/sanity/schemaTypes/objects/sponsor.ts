import { defineType, defineField } from "sanity";



export const sponsorType = defineType({
    name: "sponsor",
    title: "Sponsor",
    type: "object",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: "link",
            title: "Link",
            type: "url",
        })
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "link",
            media: "image",
        },
        prepare({ subtitle, media }) {
            return {
                title: "Sponsor",
                subtitle: `Link: ${subtitle}`,
            };
        },
    },
});