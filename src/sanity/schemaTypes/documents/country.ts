import { defineType, defineField } from "sanity";

export const countryType = defineType({
    name: 'country',
    title: 'Country',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Country Name',
            type: 'string',
        }),
        defineField({
            name: 'flag',
            title: 'Country Flag',
            type: 'image',
            description: 'Please upload image in svg format, 30x20'
        })
    ]
})