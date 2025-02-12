import { defineType, defineField } from 'sanity'

export const consultateType = defineType({
    name: 'consultate',
    title: 'Consultate',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
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
            media: 'image',
        },
    }
})