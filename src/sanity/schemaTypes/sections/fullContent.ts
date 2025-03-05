import { defineType, defineField } from 'sanity'
import { FileText } from 'lucide-react';

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
    ]
})