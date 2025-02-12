import { defineType, defineField } from 'sanity'

export const memberType = defineType({
    name: 'member',
    title: 'Member',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
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
            name: 'responsibilities',
            title: 'Responsibilities',
            type: 'array',
            of: [{ type: 'simpleListItem' }]
        })

    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'occupation',
            media: 'image',
        },
    }
})