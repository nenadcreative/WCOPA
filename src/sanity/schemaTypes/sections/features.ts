import { defineType, defineField } from 'sanity';
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { Columns2 } from 'lucide-react';

export const featuresSectionType = defineType({
    name: 'featuresSection',
    title: 'Features Section',
    type: 'object',
    icon: Columns2,
    groups: [
        {
            name: "content",
            title: "Content",
        },
        {
            name: "design",
            title: "Design",
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
            type: 'blockContent',
            group: 'content'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
            group: 'content'
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
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
                    { title: "Pattern", value: "pattern" }
                ],
            },
        }),

    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
            media: 'image'
        },
        prepare({ title }) {
            return {
                title: stringFromPortableText(title) || "Features Section Title",
                subtitle: "Features Section",
            }
        }
    }
})