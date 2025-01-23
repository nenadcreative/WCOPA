import {defineType, defineField} from "sanity";
import { Images } from 'lucide-react';

export default defineType({
    name:'gallery',
    title:'Gallery',
    type:'object',
    icon:Images,
    fields:[
        defineField({
           name:'tagline',
           title:'Tagline',
           type:'string' 
        }),
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
        name:'galleries',
        title:'Galleries',
        type:'array',
        of:[{type:'photos'}]
     }),
     defineField({
        name:'videoHighligths',
        title:'Video Highlights',
        type:'videos'
     })
    ]
})