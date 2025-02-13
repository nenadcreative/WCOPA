import { defineType, defineField } from "sanity";

export const steps3CardType = defineType({
    name: "steps3Card",
    title: "Steps 3 Card",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Card Title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "simpleBlockContent",
        }),


    ],
});
