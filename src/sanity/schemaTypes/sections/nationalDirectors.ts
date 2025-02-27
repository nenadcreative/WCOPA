import { defineType, defineField } from 'sanity'
import { Flag } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const nationalDirectorsType = defineType({
    name: 'nationalDirectors',
    type: 'document',
    title: 'National Directors',
    icon: Flag,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'blockSimple',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockSimple',
        }),

        defineField({
            name: 'regions',
            title: 'Regions',
            type: 'array',
            of: [{ type: 'region' }],
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: stringFromPortableText(title) || "National Directors Title",
                subtitle: "National Directors Section",
            };
        },
    },
})