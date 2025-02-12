import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { Users } from 'lucide-react';

export const consultatesSectionType = defineType({
    name: 'consultatesSection',
    title: 'Consultates Section',
    type: 'object',
    icon: Users,
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
            name: 'subtitle',
            title: 'Subtitle',
            type: 'blockSimple'
        }),
        defineField({
            name: 'consultates',
            title: 'Consultates',
            type: 'array',
            of: [{ type: 'consultate' }]
        }),
        defineField({
            name: 'variation',
            title: 'Variation',
            type: 'string',
            initialValue: 'offwhite',
            options: {
                list: [
                    { title: 'Offwhite', value: 'offwhite' },
                    { title: 'Dark', value: 'dark' },
                ]
            }
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',

        },
        prepare({ title }) {
            return {
                title: stringFromPortableText(title) || "Consultates Title",
                subtitle: "Consultates Section",
            }
        }
    }
})