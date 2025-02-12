import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { UserCog } from 'lucide-react';

export const sponsorTestimonialsType = defineType({
    name: 'sponsorTestimonials',
    title: 'Sponsor Testimonials',
    type: 'object',
    icon: UserCog,
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
            name: 'sponsorTestimonials',
            title: 'Sponsor Testimonials',
            type: 'array',
            of: [{ type: 'sponsorTestimonial' }],
            group: 'content'
        }),
        defineField({
            name: "variation",
            title: "Variation",
            type: "string",
            options: {
                list: [
                    { title: "Lavander", value: "lavander" },
                    { title: "Dark", value: "dark" },
                ]
            },
            initialValue: "lavander",
        })
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',

        },
        prepare({ title }) {
            return {
                title: stringFromPortableText(title) || "Sponsor Testimonials Title",
                subtitle: "Sponsor Testimonials",
            }
        }
    }
})