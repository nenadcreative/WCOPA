import { defineType, defineField } from 'sanity'
import { Images } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const imageCardsType = defineType({
    name: 'imageCards',
    title: 'Image Cards',
    type: 'object',
    icon: Images,
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
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'imageCard' }],
        }),
        defineField({
            name: "ctaText",
            title: "CTA Text",
            type: "blockSimple",
            fieldset: "cta",

        }),
        defineField({
            name: "ctaLinks",
            title: "Links",
            type: "array",
            of: [{ type: "link" }],
            validation: (Rule) => Rule.max(2),
            fieldset: "cta",

        }),
        defineField({
            name: "variation",
            title: "Variation",
            description:
                "Variation of the section. Mainly influences the color scheme.",
            type: "string",
            initialValue: "white",

            options: {
                list: [
                    { title: "White", value: "white" },
                    { title: "Offwhite", value: "offwhite" },
                    { title: "Lavander", value: "lavander" },
                    { title: "Gradient", value: "gradient" },
                    { title: "Dark", value: "dark" },
                    { title: "Pattern", value: "pattern" },
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
                title: stringFromPortableText(title) || "Image Cards Title",
                subtitle: "Image Cards Section",
            };
        },
    },
})