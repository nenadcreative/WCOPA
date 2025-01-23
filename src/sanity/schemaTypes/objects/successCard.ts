import {defineType, defineField} from 'sanity';

export default defineType({
    name: "successCard",
    title: "Success Card",
    type: "object",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
          }),
          defineField({
            name: "occupation",
            title: "Job/Talent/Occupation",
            type: "string",
          }),
          defineField({
            name: "image",
            title: "Image",
            type: "image",
          }),
          defineField({
            name: "story",
            title: "Story",
            type: "blockSimple",
          }),
    ],
});