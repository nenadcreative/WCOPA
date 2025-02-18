import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { Trophy } from 'lucide-react';

export const winners2Type = defineType({
    name: 'winners2',
    title: 'Winners 2',
    type: 'object',
    icon: Trophy,
    groups: [
        { title: "Content", name: "content" },
        { title: "Design", name: "design" },
    ],
    fieldsets: [
        {
            name: "cta",
            title: "CTA",
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
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
            name: 'winners',
            title: 'Winners',
            type: 'array',
            of: [{ type: 'winnerCard' }],
            group: 'content'
        }),
        defineField({
            name: "ctaText",
            title: "CTA Text",
            type: "blockSimple",
            fieldset: "cta",
            group: "content",
        }),
        defineField({
            name: "ctaLinks",
            title: "Links",
            type: "array",
            of: [{ type: "link" }],
            validation: (Rule) => Rule.max(2),
            fieldset: "cta",
            group: "content",
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
                title: stringFromPortableText(title) || "Winners 2 Title",
                subtitle: "Winners 2 Section",
            };
        },
    },
})