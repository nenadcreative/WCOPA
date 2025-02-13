import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { Medal } from 'lucide-react';

export const winnersType = defineType({
    name: 'winners',
    title: 'Winners',
    type: 'object',
    icon: Medal,
    groups: [
        { title: "Content", name: "content" },
        { title: "Design", name: "design" },
    ],
    fields: [
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            group: 'content'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'blockSimple',
            group: 'content'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockSimple',
            group: 'content'
        }),
        defineField({
            name: 'winnerCard',
            title: 'Winner Card',
            type: 'winnerCard',
            group: 'content'
        }),
        defineField({
            name: "variation",
            title: "Variation",
            description:
                "Variation of the section. Mainly influences the color scheme.",
            type: "string",
            initialValue: "white",
            group: "design",
            options: {
                list: [
                    { title: "White", value: "white" },
                    { title: "Offwhite", value: "offwhite" },
                    { title: "Lavander", value: "lavander" },
                    { title: "Gradient", value: "gradient" },
                    { title: "Dark", value: "dark" },
                    { title: 'Pattern', value: 'pattern' }
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
                title: stringFromPortableText(title) || "Winners Title",
                subtitle: "Winners Section",
            };
        },
    },
})