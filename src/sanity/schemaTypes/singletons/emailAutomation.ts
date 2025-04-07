import { defineType, defineField } from "sanity";

export const emailAutomationType = defineType({
    name: "emailAutomation",
    title: "Email Automation",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",

        }),
        defineField({
            name: "emailsMapped",
            title: "Director - Country - Email",
            type: "array",
            of: [{ type: "emailsMapped" }],
        }),

    ]

});
