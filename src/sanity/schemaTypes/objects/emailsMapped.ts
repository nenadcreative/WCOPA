import { defineType, defineField } from "sanity";

export const emailsMappedType = defineType({
    name: "emailsMapped",
    title: "Director - Country - Email",
    type: "object",
    fields: [
        defineField({
            name: "director",
            title: "Director",
            type: "reference",
            to: [{ type: "director" }],
        }),
        defineField({
            name: "country",
            title: "Country",
            type: "reference",
            to: [{ type: "country" }],
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        }),
    ],
    preview: {
        select: {
            title: "director.name",
            subtitle: "country.name",
            media: "country.flag",
        },
    },

});