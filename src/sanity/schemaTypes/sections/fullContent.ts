import { defineType, defineField } from 'sanity'
import { FileText } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const fullContentType = defineType({
    name: 'fullContent',
    title: 'Full Content',
    type: 'object',
    icon: FileText,
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'blockSimple'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockSimple'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'blockContent',

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
                title: stringFromPortableText(title) || "Text Content ",
                subtitle: "Full Content",
            };
        },
    },
})