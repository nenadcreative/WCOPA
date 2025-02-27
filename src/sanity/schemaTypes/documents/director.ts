import { defineType, defineField } from "sanity";

export const directorType = defineType({
    name: 'director',
    title: 'Director',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Director Name',
            type: 'string',
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Director Image',
            type: 'image',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'representing',
            title: 'Representing',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'country' }] }]
        })
    ]
})