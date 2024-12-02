import groq from "groq";

export const homeQuery = groq`*[_type == "home"][0]`;
export const pagesQuery = groq`*[_type == "page"]`;
export const pageQuery = groq`*[_type=='page' && slug.current==$slug][0]{...,content[]{...,
     (_type == 'media')=>{
    ...,
    'ctaLink': ctaLink{
     ...,'internalLink': internalLink->{slug} }}
},
}`;
export const settingsQuery = groq`*[_type == "settings"][0]`;
