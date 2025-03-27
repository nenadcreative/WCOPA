import { defineType, defineField } from 'sanity'

export const allEventsType = defineType({
    name: "allEvents",
    type: "object",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "variation",
            title: "Variations",
            type: "string",
            options: {
                list: [
                    { title: "White BG, Default Decoration", value: "whiteDefault" },
                    { title: "White BG, Offwhite Decoration", value: "whiteOffwhite" },
                    { title: "Dark BG, Lavander Decoration", value: "darkLavander" },
                    { title: "Dark BG, Offwhite Decoration", value: "darkOffwhite" },
                ],
            },
            initialValue: "whiteDefault",
        }),
    ]
});
