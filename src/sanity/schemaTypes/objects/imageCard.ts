import { defineType, defineField } from "sanity";

export const imageCardType = defineType({
    name: "imageCard",
    title: "Image Card",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "blockSimple",
        }),

        defineField({
            name: "titleSize",
            title: "Title Size",
            type: "string",
            options: {
                list: [
                    { title: "Small", value: "sm" },
                    { title: "Medium", value: "md" },
                    { title: "Large", value: "lg" },
                ],
            },
            initialValue: "md",
        }),
        defineField({
            name: 'imageMask',
            title: 'Image Mask',
            type: 'boolean',
            initialValue: false
        }),

        defineField({
            name: "body",
            title: "Card Content",
            type: "blockContent",
        }),
        defineField({
            name: "ctaLink",
            title: "Link",
            type: "link",
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        })
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    }
});
