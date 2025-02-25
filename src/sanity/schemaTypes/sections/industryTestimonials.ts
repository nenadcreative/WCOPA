import { defineType, defineField } from "sanity";
import { UserPlus } from 'lucide-react';
import { stringFromPortableText } from "@/utils/stringFromPT";

export const industryTestimonialsType = defineType({
    name: "industryTestimonials",
    title: "Industry Testimonials",
    type: "object",
    icon: UserPlus,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "blockSimple",
        }),
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [{ type: "industryTestimonial" }],
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
                title: stringFromPortableText(title) || "Industry Testimonials Title",
                subtitle: "Industry Testimonials Section",
            };
        },
    },
});