import { defineType, defineField } from 'sanity'

export const memberType = defineType({
    name: 'member',
    title: 'Member',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'occupation',
            title: 'Occupation',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'blockSimple',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),

    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'occupation',
            media: 'image',
        },
    }
})