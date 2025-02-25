import { defineField, defineType } from "sanity";

export const socialLinkType = defineType({
    name: 'socialLink',
    title: 'Social Link',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Facebook', value: 'facebook' },
                    { title: 'Instagram', value: 'instagram' },
                    { title: 'LinkedIn', value: 'linkedin' },
                    { title: 'Twitter(X)', value: 'twitter' },
                    { title: 'YouTube', value: 'youtube' },
                ]
            }
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        })
    ]
})