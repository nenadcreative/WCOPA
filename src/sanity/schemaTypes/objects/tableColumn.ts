import { defineType, defineField } from "sanity";

export const tableColumnType = defineType({
    name: 'tableColumn',
    title: 'Table Column',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'data',
            title: 'data',
            type: 'array',
            of: [{ type: 'string' }]
        }),
    ],
})