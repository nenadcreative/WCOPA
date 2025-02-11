import { defineType, defineField } from "sanity";
import { stringFromPortableText } from "src/utils/stringFromPT";
import { Handshake } from 'lucide-react';


export const sponsorsType = defineType({
    name: "sponsors",
    title: "Sponsors",
    type: "object",
    icon: Handshake,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "blockSimple",
        }),
        defineField({
            name: "sponsors",
            title: "Sponsor Logos",
            description: "The number of logos should be at least 8, if there isn't enough logos, just duplicate existing ones",
            type: "array",
            of: [{ type: "sponsor" }],
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
                title: stringFromPortableText(title) ?? "Sponsors Title",
                subtitle: "Sponsors Section",
            };
        },
    },
});