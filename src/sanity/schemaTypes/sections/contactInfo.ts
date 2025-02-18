import { defineType, defineField } from "sanity";
import { MailCheck } from 'lucide-react';
import { stringFromPortableText } from "@/utils/stringFromPT";

export const contactInfo = defineType({
    name: 'contactInfo',
    title: 'Contact Info ',
    type: 'object',
    icon: MailCheck,
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
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{ type: 'contactInfoCard' }]
        }),

        defineField({
            name: 'ctaText',
            title: 'CTA Text',
            type: 'blockSimple',
            group: 'content'
        }),
        defineField({
            name: "variation",
            title: "Variation",
            type: "string",
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
            initialValue: "white",
            group: 'design'
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
                title: stringFromPortableText(title) || "Contact Info Title",
                subtitle: "Contact Info Section",
            };
        },
    },
})