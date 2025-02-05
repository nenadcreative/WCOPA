import { defineType, defineField } from 'sanity'

export const contactInfoItem = defineType({
    name: 'contactInfoItem',
    title: 'Contact Info Item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'image'
        }),
        defineField({
            name: 'link',
            title: 'Info Link',
            type: 'simpleLink'
        })
    ]
})