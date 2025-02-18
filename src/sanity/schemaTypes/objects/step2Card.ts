import { defineType, defineField } from 'sanity';

export const step2CardType = defineType({
    name: 'step2Card',
    title: 'Step 2 Card',
    type: 'object',
    fields: [
        defineField({
            name: 'cardType',
            title: "Card Type",
            type: 'string',
            options: {
                list: [{ value: 'type1', title: 'One Column Card' }, { value: 'type2', title: 'Two Column Card' }]
            },
            initialValue: 'type1'
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),

        defineField({
            name: 'listTitle',
            title: 'List Title',
            type: 'blockSimple',
            hidden: ({ parent }) => parent?.cardType !== 'type2'
        }),
        defineField({
            name: 'list',
            title: 'List Content',
            type: 'array',
            of: [{ type: 'simpleListItem' }],
            hidden: ({ parent }) => parent?.cardType !== 'type2'
        }),
    ],
});