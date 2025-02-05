import { defineType, defineField } from "sanity";

export const videoType = defineType({
    name: "video",
    title: "Video",
    type: "object",
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
            name: "videoThumbnail",
            title: "Video Thumbnail",
            type: "image",
        }),
        defineField({
            name: "video",
            title: "Video",
            type: "url",
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "videoThumbnail",
        },
    },
});