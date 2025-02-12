import { defineType, defineField } from 'sanity'
import { Contact } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const teamSectionType = defineType({
    name: 'teamSection',
    type: 'object',
    icon: Contact,
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
            name: 'members',
            type: 'array',
            of: [{ type: 'member' }],
            group: 'content'
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
                ],
            },
            group: 'design'
        }),
        defineField({
            name: "layout",
            title: "Layout",
            type: "string",
            options: {
                list: [
                    { title: "Left", value: "left" },
                    { title: "Centered", value: "centered" },
                ],
            },
            initialValue: "left",
            group: 'design'
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',

        },
        prepare({ title }) {
            return {
                title: stringFromPortableText(title) || "Team Section Title",
                subtitle: "Team Section",
            }
        }
    }
})