import { defineType, defineField } from 'sanity'
import { BookMinus } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const ageDivisionsType = defineType({
    name: 'ageDivisions',
    title: 'Age Divisions',
    type: 'object',
    icon: BookMinus,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'blockSimple',
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'ageCard' }],
        }),
        defineField({
            name: 'variation',
            type: 'string',
            options: {
                list: [
                    { title: 'White', value: 'white' },
                    { title: 'Offwhite', value: 'offwhite' },
                    { title: 'Lavander', value: 'lavander' },
                    { title: 'Gradient', value: 'gradient' },
                    { title: 'Dark', value: 'dark' },
                    { title: 'Pattern', value: 'pattern' },
                ]
            },
            initialValue: 'white',
        })
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: stringFromPortableText(title) || "Age Divisions Title",
                subtitle: "Age Divisions Section",
            };
        },
    },
})