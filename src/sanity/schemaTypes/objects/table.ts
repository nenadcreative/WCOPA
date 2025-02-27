import { defineType, defineField } from 'sanity'

export const tableType = defineType({
    name: 'table',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'columns',
            title: 'Table Columns',
            type: 'array',
            of: [{ type: 'tableColumn' }],
        }),

    ],
})