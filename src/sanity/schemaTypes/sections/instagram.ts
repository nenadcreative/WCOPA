import { defineType, defineField } from 'sanity'

export const instagramType = defineType({
    name: "instagram",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "blockSimple",
        }),

    ]
});
