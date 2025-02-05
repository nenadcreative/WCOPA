import { defineType, defineField } from 'sanity'

export const contactInfoCard = defineType({
    name: 'contactInfoCard',
    title: "Contact Info Card",
    type: 'object',
    fields: [
        defineField({
            name: 'cardType',
            title: "Card Type",
            type: 'string',
            options: {
                list: [{ value: 'type1', title: 'Type 1, big accented icon' }, { value: 'type2', title: 'Type 2, smaller icons' }]
            },
            initialValue: 'type1'
        }),

        defineField({
            name: 'title',
            title: 'Title',
            type: 'blockSimple'
        }),

        defineField({
            name: 'cardIcon',
            title: 'Card Icon',
            type: 'image',
            hidden: ({ parent }) => parent?.cardType !== "type1",
        }),

        defineField({
            name: 'cardContent',
            title: 'Card Content',
            type: 'blockSimple',
            hidden: ({ parent }) => parent?.cardType !== 'type1'
        }),

        defineField({
            name: 'info',
            title: 'Info',
            type: 'array',
            of: [
                { type: 'contactInfoItem' }
            ],
            hidden: ({ parent }) => parent?.cardType !== 'type2'
        })

    ],
    preview: {
        select: {
            title: "title",
            media: 'cardIcon'
        },
    }
})