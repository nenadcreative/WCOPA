import { defineType, defineField } from 'sanity'
import { Component } from 'lucide-react';
import { stringFromPortableText } from 'src/utils/stringFromPT';

export const industryTestimonialType = defineType({
    name: 'industryTestimonial',
    title: 'Industry Testimonial',
    type: 'object',
    icon: Component,
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "occupation",
            title: "Job/Talent/Occupation",
            type: "string",
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'blockSimple',
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'blockSimple',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'occupation',
            media: 'image'
        },

    }
})