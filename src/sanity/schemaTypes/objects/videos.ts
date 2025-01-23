import {defineType, defineField} from "sanity";

export default defineType({
    name:'videos',
    title:'Videos',
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
        name:'videos',
        title:'Videos',
        type:'array',
        of:[{type:'url', title:'Video Link'}]
     })
    ]
})