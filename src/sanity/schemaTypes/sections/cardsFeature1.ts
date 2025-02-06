import { defineType, defineField } from "sanity";
import { AlignStartHorizontal } from 'lucide-react';
import { stringFromPortableText } from "@/utils/stringFromPT";

export const cardsFeature1 = defineType({
    name: "cardsFeature1",
    title: "Cards Feature 1",
    type: "object",
    icon: AlignStartHorizontal,
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
            name: "tagline",
            title: "Tagline",
            type: "string",
            group: "content",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "blockSimple",
            group: "content",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "blockContent",
            group: "content",
        }),



        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'featureCard' }],
            validation: (Rule) => Rule.min(2),
            group: 'content'
        }),

        defineField({
            name: "ctaText",
            title: "CTA Text",
            type: "blockContent",
            fieldset: "cta",
        }),
        defineField({
            name: "ctaLinks",
            title: "Link",
            type: "array",
            of: [{ type: "link" }],
            validation: (Rule) => Rule.max(2),
            fieldset: "cta",
        }),

        defineField({
            name: "variation",
            title: "Variation",
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
                    { title: 'Image', value: 'image' }
                ],
            },
            group: 'design'
        }),
        defineField({
            name: "bgImage",
            title: "Background Image",
            type: "image",
            group: "design",
            hidden: ({ parent }) => parent?.variation !== "image"
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
                title: stringFromPortableText(title) || "Cards Feature 1 Section Title",
                subtitle: "Cards Feature 1 Section",
            };
        },
    },
});
