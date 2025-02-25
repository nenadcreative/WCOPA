import { defineType, defineField } from "sanity";

export const judgeCardType = defineType({
    name: 'judgeCard',
    title: 'Judge Card',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'title',
            title: 'Title',
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
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [{ type: 'socialLink' }]
        })
    ],

    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image'
        }
    }
})