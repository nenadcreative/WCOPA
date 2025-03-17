import { defineType, defineField } from "sanity";
import { LayoutPanelTop } from 'lucide-react';

export const homeMediaGridType = defineType({
    name: "homeMediaGrid",
    title: "Home Media Grid",
    type: "object",
    icon: LayoutPanelTop,
    fields: [
        defineField({
            name: "list",
            title: "Images and Videos List",
            type: "array",
            of: [{ type: "image" }, { type: "video" }],
            validation: Rule => Rule.required().min(2).max(8),
        }),

    ],
    preview: {

        prepare() {

            return {
                title: "Home Media Grid",
            };
        },
    },
});