import { defineType, defineField } from 'sanity'
import { stringFromPortableText } from 'src/utils/stringFromPT';
import { ClipboardList } from "lucide-react";

export const steps2Type = defineType({
    name: "steps2",
    title: "Steps 2",
    type: "object",
    icon: ClipboardList,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "blockSimple",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "blockSimple",
        }),
        defineField({
            name: "steps",
            title: "Steps",
            type: "array",
            of: [{ type: "step2Card" }],
        }),
        defineField({
            name: 'variation',
            title: 'Variation',
            type: 'string',
            initialValue: 'gradient',
            options: {
                list: [
                    { title: "Gradient", value: "gradient" },
                    { title: "Dark", value: "dark" },
                ],
            },
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
                title: stringFromPortableText(title) || "Steps 2 Section Title",
                subtitle: "Steps 2 Section",
            };
        },
    },
})