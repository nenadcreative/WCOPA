import { defineType, defineField } from 'sanity';
import { Waypoints } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const steps3Type = defineType({
    name: 'steps3',
    title: 'Steps 3',
    type: 'object',
    icon: Waypoints,
    groups: [
        { name: 'content', title: 'Content' },
        { name: 'design', title: 'Design' },
    ],
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
            name: 'link',
            title: 'Link',
            type: 'link'
        }),
        defineField({
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [{ type: 'steps3Card' }]
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
                ],
            },
            group: "design",
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
                title: stringFromPortableText(title) || "Steps 3 Section Title",
                subtitle: "Steps 3 Section",
            };
        },
    },
})