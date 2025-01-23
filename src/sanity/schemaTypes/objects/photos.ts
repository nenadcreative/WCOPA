import {defineType, defineField} from "sanity";

export default defineType({
    name:'photos',
    title:'Photos',
    type:'object',
    fields:[
        
     defineField({
        name:'title',
        title:'Title',
        type:'blockSimple'
     }),
     defineField({
        name:'description',
        title:'Description',
        type:'blockSimple'
     }),
     defineField({
        name:'images',
        title:'Images',
        type:'array',
        of:[{type:'image'}]
     })
    ]
})