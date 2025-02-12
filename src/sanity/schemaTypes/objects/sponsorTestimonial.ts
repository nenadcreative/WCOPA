import { defineType, defineField } from 'sanity'
import { Component } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const sponsorTestimonialType = defineType({
    name: 'sponsorTestimonial',
    title: 'Sponsor Testimonial',
    type: 'object',
    icon: Component,
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'blockSimple',

        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'blockSimple',

        }),
        defineField({
            name: 'logo',
            title: "Client Logo",
            type: 'image',

        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo'
        },
        prepare({ title }) {

            return {
                title: stringFromPortableText(title) || "Sponsor Testimonial Title",

            }
        }
    }
})