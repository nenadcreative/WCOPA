import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { Contact } from 'lucide-react';

export const auditionFormType = defineType({
    name: 'auditionForm',
    title: 'Audition Form',
    type: 'object',
    icon: Contact,
    fields: [
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

    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: stringFromPortableText(title) || "Audition Form Title",
                subtitle: "Audition Form Section",
            };
        },
    },
})