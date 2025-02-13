import groq from "groq";

export const homeQuery = groq`*[_type == "home"][0]{..., content[]{
(_type == 'homeHero')=>{...},

 (_type == 'featuredList1')=>{
  ...,
    'ctaLink':ctaLink{..., 
    'internalLink':internalLink->{slug}}
  },
  
  (_type == 'featuredList2')=>{
  ...,
    'ctaLink':ctaLink{..., 
    'internalLink':internalLink->{slug}}
  },
  (_type == 'steps')=>{...},
  (_type == 'centeredText')=>{...},
  (_type == 'centeredCard')=>{...},
  (_type == 'featuredEvents')=>{..., 'events':events[]->{...}},
  (_type == 'cta1')=>{...,
    'ctaCards':ctaCards[]{..., 'ctaLink':ctaLink{...,'internalLink':internalLink->{slug,title}}}
  },
  (_type == 'mediaSection')=>{
     ...,
     'ctaLink': ctaLink{
     ...,'internalLink': internalLink->{slug} }},
  (_type=='videoTestimonials')=>{...},
  (_type=='faqSection')=>{..., 'faqs':faqs[]->{...}},
  (_type=='cta2')=>{..., 'ctaLinks':ctaLinks[]{...,'internalLink': internalLink->{slug} }},
  (_type=='scheduleSection')=>{..., 'scheduleItems':scheduleItems[]->{...}},
(_type=='cardsFeature2')=>{..., },
(_type=='insights')=>{...},
(_type=='successStories')=>{...},

}}`;
export const pagesQuery = groq`*[_type == "page"]`;
export const pageQuery = groq`*[_type=='page' && slug.current==$slug][0]{...,content[]{
  (_type == 'hero')=>{
  ...
  },  
  (_type == 'featuredList1')=>{
  ...,
    'ctaLink':ctaLink{..., 
    'internalLink':internalLink->{slug}}
  },
  
  (_type == 'featuredList2')=>{
  ...,
    'ctaLink':ctaLink{..., 
    'internalLink':internalLink->{slug}}
  },
  (_type == 'steps')=>{...},
  (_type == 'centeredText')=>{...},
  (_type == 'centeredCard')=>{...},
  (_type == 'featuredEvents')=>{..., 'events':events[]->{...}},
  (_type == 'cta1')=>{...,
    'ctaCards':ctaCards[]{..., 'ctaLink':ctaLink{...,'internalLink':internalLink->{slug,title}}}
  },
  (_type == 'mediaSection')=>{
     ...,
     'ctaLink': ctaLink{
     ...,'internalLink': internalLink->{slug} }},
  (_type=='videoTestimonials')=>{...},
  (_type=='faqSection')=>{..., 'faqs':faqs[]->{...}},
  (_type=='cta2')=>{..., 'ctaLinks':ctaLinks[]{...,'internalLink': internalLink->{slug} }},
  (_type=='scheduleSection')=>{..., 'scheduleItems':scheduleItems[]->{...}},
(_type=='cardsFeature2')=>{..., },
(_type=='cardsFeature1')=>{..., },
(_type=='insights')=>{...},
(_type=='successStories')=>{...},
(_type=='gallery')=>{...},
(_type=='sponsors')=>{...},
(_type=='featuresSection')=>{...},
(_type=='teamSection')=>{...},
(_type=='sponsorTestimonials')=>{...},
(_type=='consultatesSection')=>{...},
(_type=='steps3')=>{...},
(_type=='contactInfo')=>{...}
},
}`;
export const settingsQuery = groq`*[_type == "settings"][0]`;
