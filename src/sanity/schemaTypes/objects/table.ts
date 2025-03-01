import { defineType, defineField } from 'sanity'

export const tableType = defineType({
    name: 'table',
    title: 'Table',
    type: 'object',
    fields: [
        defineField({
            name: 'columns',
            title: 'Table Columns',
            type: 'string',
            options: {
                list: [
                    { title: '2 Columns', value: '2 Columns' },
                    { title: '3 Columns', value: '3 Columns' },
                ]
            },
            initialValue: '2 Columns'

        }),
        defineField({
            name: 'rows2',
            title: 'Table Rows',
            type: 'array',
            of: [{ type: 'tableRow2' }],
            hidden: ({ parent }) => parent?.columns !== '2 Columns',
        }),
        defineField({
            name: 'rows3',
            title: 'Table Rows',
            type: 'array',
            of: [{ type: 'tableRow3' }],
            hidden: ({ parent }) => parent?.columns !== '3 Columns',
        }),
    ],
})