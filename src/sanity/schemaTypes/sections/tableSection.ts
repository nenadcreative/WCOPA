import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { Table } from 'lucide-react';

export const tableSectionType = defineType({
    name: 'tableSection',
    title: 'Table Section',
    type: 'object',
    icon: Table,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'blockSimple'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockSimple'
        }),
        defineField({
            name: 'table',
            title: 'Table',
            type: 'table'
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'contentCard' }],
        }),

        defineField({
            name: 'variation',
            title: 'Variation',
            type: 'string',
            options: {
                list: [
                    { title: 'Gradient', value: 'gradient' },
                    { title: 'Dark', value: 'dark' },
                ]
            },
            initialValue: 'gradient'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',

        },
        prepare({ title }) {
            return {
                title: stringFromPortableText(title) || "Table Section Title",
                subtitle: "Table Section",
            }
        }
    }
})