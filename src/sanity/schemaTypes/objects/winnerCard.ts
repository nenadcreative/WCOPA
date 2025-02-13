import { defineType, defineField } from 'sanity'

export const winnerCardType = defineType({
    name: 'winnerCard',
    title: 'Winner Card',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'country',
            title: 'Country or Location',
            type: 'string'
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'blockSimple'
        })
    ]
})