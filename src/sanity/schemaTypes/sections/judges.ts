import { defineType, defineField } from 'sanity'
import { UserCog } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const judgesType = defineType({
    name: 'judges',
    title: 'Judges',
    type: 'object',
    icon: UserCog,
    fields: [
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),
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
            name: 'contentCard',
            title: 'Content Card',
            type: 'contentCard',
        }),



        defineField({
            name: 'judges',
            title: 'Judges',
            type: 'array',
            of: [{ type: 'judgeCard' }]
        }),
        defineField({
            name: "variation",
            title: "Variation",
            description:
                "Variation of the section. Mainly influences the color scheme.",
            type: "string",
            initialValue: "dark",

            options: {
                list: [
                    { title: "Lavander", value: "lavander" },
                    { title: "Dark", value: "dark" },
                ],
            },
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
                title: stringFromPortableText(title) || "Judges Section Title",
                subtitle: "Judges Section",
            };
        },
    },
})