import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT'
import { Grid2x2 } from 'lucide-react';

export const tableRow2Type = defineType({
    name: 'tableRow2',
    title: 'Table Row',
    type: 'object',
    icon: Grid2x2,
    fields: [
        defineField({
            name: 'rowValues',
            title: 'Row Values',
            type: 'array',
            of: [{ type: 'simpleListItem' }],
            validation: (Rule) => Rule.min(2).max(2),
        })
    ],
    preview: {
        select: {
            title: 'rowValues[0].text',
            subtitle: 'rowValues[1].text',
        },
        prepare(selection) {
            const { title, subtitle } = selection
            return {
                title: `Values: ${stringFromPortableText(title)}, ${stringFromPortableText(subtitle)}`,
                subtitle: 'Table Row',
            }
        }
    },
})