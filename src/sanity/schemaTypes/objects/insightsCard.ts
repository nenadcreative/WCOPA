import { defineType, defineField } from "sanity";

export default defineType({
    name: "insightsCard",
    title: "Insights Card",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Card Title",
            type: "string",
        }),
        
        defineField({
            name: "quote",
            title: "Quote",
            type: "simpleBlockContent",
          }),
          defineField({
            name: "name",
            title: "Name",
            description: "Name of the person",
            type: "string",
          }),
    ],
});