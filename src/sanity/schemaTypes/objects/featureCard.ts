import { defineType, defineField } from 'sanity';

export const featureCard = defineType({
    name: 'featureCard',
    title: 'Feature Card',
    type: 'object',
    fields: [
        defineField({
            name: 'cardType',
            title: "Card Type",
            type: 'string',
            options: {
                list: [{ value: 'type1', title: 'Content Card' }, { value: 'type2', title: 'Image Card' }]
            },
            initialValue: 'type1'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            hidden: ({ parent }) => parent?.cardType !== 'type2'
        }),
    ],
});