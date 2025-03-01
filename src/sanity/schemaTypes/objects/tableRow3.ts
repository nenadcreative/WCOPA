import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT'
import { Grid3x3 } from 'lucide-react';

export const tableRow3Type = defineType({
    name: 'tableRow3',
    title: 'Table Row',
    type: 'object',
    icon: Grid3x3,
    fields: [
        defineField({
            name: 'rowValues',
            title: 'Row Values',
            type: 'array',
            of: [{ type: 'simpleListItem' }],
            validation: (Rule) => Rule.min(3).max(3),
        })
    ],
    preview: {
        select: {
            row1: 'rowValues[0].text',
            row2: 'rowValues[1].text',
            row3: 'rowValues[2].text',
            subtitle: '',
        },
        prepare(selection) {
            const { row1, row2, subtitle, row3 } = selection
            return {
                title: `Values: ${stringFromPortableText(row1)}, ${stringFromPortableText(row2)}, ${stringFromPortableText(row3)}`,
                subtitle: 'Table Row',
            }
        }
    },
})