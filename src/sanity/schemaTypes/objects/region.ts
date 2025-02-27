import { defineType, defineField } from "sanity";
import { LandPlot } from 'lucide-react';

export const regionType = defineType({
    name: "region",
    title: "Region",
    type: "object",
    icon: LandPlot,
    fields: [
        defineField({
            name: "title",
            title: "Title of the region",
            type: "string",
        }),
        defineField({
            name: 'countries',
            title: 'Countries',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'country' }] }]
        }),
        defineField({
            name: 'directors',
            title: 'Directors',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'director' }] }]
        })
    ],
});