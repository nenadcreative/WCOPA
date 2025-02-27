import { defineType, defineField } from "sanity";

export const ageCardType = defineType({
    name: 'ageCard',
    title: 'Age Card',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockSimple',
        }),
        defineField({
            name: 'ageCards',
            title: 'Age Cards',
            type: 'array',
            of: [{ type: 'contentCard' }],
        }),
    ],
});