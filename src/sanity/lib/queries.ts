import groq from "groq";

export const homeQuery = groq`*[_type == "home"][0]{..., content[]{
(_type == 'homeHero')=>{..., 'links':links[]{...,'internalLink': internalLink->{slug, _type, category} }},

  (_type == 'featuredList1')=>{
  ...,
    'ctaLink':ctaLink{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}
  },
  (_type == 'homeMediaGrid')=>{
    ...,
    'list':list[]
  },
  (_type == 'featuredList2')=>{
  ...,
    'ctaLink':ctaLink{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}
  },
  (_type == 'steps')=>{...,'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type == 'centeredText')=>{...},
  (_type == 'centeredCard')=>{...,'card':card{...,'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } }},
  (_type == 'featuredEvents')=>{..., 'events':events[]->{...}},
  (_type == 'cta1')=>{...,
    'ctaCards':ctaCards[]{..., 'ctaLink':ctaLink{...,'fileUrl': file.asset->url,'internalLink':internalLink->{slug, _type, category}}}
  },
  (_type == 'mediaSection')=>{
     ...,
     'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='videoTestimonials')=>{...,'link': link{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category}} },
  (_type=='faqSection')=>{..., 'faqs':faqs[]->{...}, 'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='cta2')=>{..., 'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='scheduleSection')=>{..., 'scheduleItems':scheduleItems[]->{...}},
(_type=='cardsFeature2')=>{..., 'cards':cards[]{...,'link': link{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } } },
(_type=='cardsFeature1')=>{...,'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } },
(_type=='insights')=>{...},
(_type=='successStories')=>{...},
(_type=='gallery')=>{...},
(_type=='sponsors')=>{...},
(_type=='featuresSection')=>{...},
(_type=='teamSection')=>{...},
(_type=='sponsorTestimonials')=>{...},
(_type=='consultatesSection')=>{...},
(_type=='steps2')=>{...},
(_type=='steps3')=>{..., 'link':link{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}},
(_type=='winners')=>{...},
(_type=='winners2')=>{..., 'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
(_type=='contactInfo')=>{...},
(_type=='contactForm')=>{...},
(_type=='judges')=>{...},
(_type=='industryTestimonials')=>{...},
(_type=='auditionForm')=>{...},
(_type=='imageCards')=>{...,'ctaLinks':ctaLinks[]{...,'internalLink': internalLink->{slug, _type, category}, 'fileUrl': file.asset->url }},
(_type=='nationalDirectors')=>{..., 'regions':regions[]{...,'countries':countries[]->{...}, 'directors':directors[]->{..., 'representing':representing[]->{...}}},},
(_type=='ageDivisions')=>{...},
(_type=='tableSection')=>{...},
(_type=='fullContent')=>{...},
(_type=='instagram')=>{...},
},}`;
export const pagesQuery = groq`*[_type == "page" && category == 'none' || category == 'legal' ]`;
export const pageQuery = groq`*[_type=='page' && slug.current==$slug ][0]{...,content[]{
  (_type == 'hero')=>{
  ...
  },  
  (_type == 'featuredList1')=>{
  ...,
    'ctaLink':ctaLink{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}
  },
  
  (_type == 'featuredList2')=>{
  ...,
    'ctaLink':ctaLink{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}
  },
  (_type == 'steps')=>{...,'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type == 'centeredText')=>{...},
  (_type == 'centeredCard')=>{...,'card':card{...,'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } }},
  (_type == 'featuredEvents')=>{..., 'events':events[]->{...}},
  (_type == 'cta1')=>{...,
    'ctaCards':ctaCards[]{..., 'ctaLink':ctaLink{...,'fileUrl': file.asset->url,'internalLink':internalLink->{slug, _type, category}}}
  },
  (_type == 'mediaSection')=>{
     ...,
     'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='videoTestimonials')=>{...,'link': link{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category}} },
  (_type=='faqSection')=>{..., 'faqs':faqs[]->{...}, 'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='cta2')=>{..., 'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='scheduleSection')=>{..., 'scheduleItems':scheduleItems[]->{...}},
(_type=='cardsFeature2')=>{..., 'cards':cards[]{...,'link': link{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } } },
(_type=='cardsFeature1')=>{...,'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } },
(_type=='insights')=>{...},
(_type=='successStories')=>{...},
(_type=='gallery')=>{...},
(_type=='sponsors')=>{...},
(_type=='featuresSection')=>{...},
(_type=='teamSection')=>{...},
(_type=='sponsorTestimonials')=>{...},
(_type=='consultatesSection')=>{...},
(_type=='steps2')=>{...},
(_type=='steps3')=>{..., 'link':link{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}},
(_type=='winners')=>{...},
(_type=='winners2')=>{..., 'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
(_type=='contactInfo')=>{...},
(_type=='contactForm')=>{...},
(_type=='judges')=>{...},
(_type=='industryTestimonials')=>{...},
(_type=='auditionForm')=>{...},
(_type=='imageCards')=>{...,'ctaLinks':ctaLinks[]{...,'internalLink': internalLink->{slug, _type, category}, 'fileUrl': file.asset->url }},
(_type=='nationalDirectors')=>{..., 'regions':regions[]{...,'countries':countries[]->{...}, 'directors':directors[]->{..., 'representing':representing[]->{...}}},},
(_type=='ageDivisions')=>{...},
(_type=='tableSection')=>{...},
(_type=='fullContent')=>{...},
(_type=='instagram')=>{...},
},
}`;

export const categoryPageQuery = groq`*[_type=='page' && slug.current==$slug && category == $category][0]{...,content[]{
  (_type == 'hero')=>{
  ...
  },  
  (_type == 'featuredList1')=>{
  ...,
    'ctaLink':ctaLink{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}
  },
  (_type == 'allEvents')=>{...},
  (_type == 'featuredList2')=>{
  ...,
    'ctaLink':ctaLink{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}
  },
  (_type == 'steps')=>{...,'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type == 'centeredText')=>{...},
  (_type == 'centeredCard')=>{...,'card':card{...,'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } }},
  (_type == 'featuredEvents')=>{..., 'events':events[]->{...}},
  (_type == 'cta1')=>{...,
    'ctaCards':ctaCards[]{..., 'ctaLink':ctaLink{...,'fileUrl': file.asset->url,'internalLink':internalLink->{slug, _type, category}}}
  },
  (_type == 'mediaSection')=>{
     ...,
     'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='videoTestimonials')=>{...,'link': link{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category}} },
  (_type=='faqSection')=>{..., 'faqs':faqs[]->{...}, 'ctaLink': ctaLink{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='cta2')=>{..., 'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
  (_type=='scheduleSection')=>{..., 'scheduleItems':scheduleItems[]->{...}},
(_type=='cardsFeature2')=>{..., 'cards':cards[]{...,'link': link{
     ...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } } },
(_type=='cardsFeature1')=>{...,'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} } },
(_type=='insights')=>{...},
(_type=='successStories')=>{...},
(_type=='gallery')=>{...},
(_type=='sponsors')=>{...},
(_type=='featuresSection')=>{...},
(_type=='teamSection')=>{...},
(_type=='sponsorTestimonials')=>{...},
(_type=='consultatesSection')=>{...},
(_type=='steps2')=>{...},
(_type=='steps3')=>{..., 'link':link{..., 'fileUrl': file.asset->url,
    'internalLink':internalLink->{slug, _type, category}}},
(_type=='winners')=>{...},
(_type=='winners2')=>{..., 'ctaLinks':ctaLinks[]{...,'fileUrl': file.asset->url,'internalLink': internalLink->{slug, _type, category} }},
(_type=='contactInfo')=>{...},
(_type=='contactForm')=>{...},
(_type=='judges')=>{...},
(_type=='industryTestimonials')=>{...},
(_type=='auditionForm')=>{...},
(_type=='imageCards')=>{...,'ctaLinks':ctaLinks[]{...,'internalLink': internalLink->{slug, _type, category}, 'fileUrl': file.asset->url }},
(_type=='nationalDirectors')=>{..., 'regions':regions[]{...,'countries':countries[]->{...}, 'directors':directors[]->{..., 'representing':representing[]->{...}}},},
(_type=='ageDivisions')=>{...},
(_type=='tableSection')=>{...},
(_type=='fullContent')=>{...},
(_type=='instagram')=>{...},
},
}`;

export const settingsQuery = groq`*[_type == "settings"][0]{..., 
'mainHowToEnter':mainHowToEnter[]->{title, 'slug':slug.current, _id},
'mainCompetitions':mainCompetitions[]->{title, 'slug':slug.current, _id},
'mainScheduleOfEvents':mainScheduleOfEvents[]->{title, 'slug':slug.current, _id},
'mainVenues':mainVenues[]->{title, 'slug':slug.current, _id},
'mainTestimonials':mainTestimonials[]->{title, 'slug':slug.current, _id},
'mainComunitySupport':mainComunitySupport[]->{title, 'slug':slug.current, _id},
'mainMedia':mainMedia[]->{title, 'slug':slug.current, _id},
'mainPrizes':mainPrizes[]->{title, 'slug':slug.current, _id},
'mainAbout':mainAbout[]->{title, 'slug':slug.current, _id},
'footerHowToEnter':footerHowToEnter[]->{title, 'slug':slug.current, _id},
'footerEvents':footerEvents[]->{title, category, 'slug':slug.current, _id},
'footerResources':footerResources[]->{title, category, 'slug':slug.current, _id},
'footerAbout':footerAbout[]->{title, 'slug':slug.current, _id},
'footerContact':footerContact[]->{title, 'slug':slug.current, _id},
'footerLegal':footerLegal[]->{title, 'slug':slug.current, _id},

}`;

export const nationalDirectorsQuery = groq`*[_type == "nationalDirectors"][0]{..., 'regions':regions[]{...,'countries':countries[]->{...}, 'directors':directors[]->{..., 'representing':representing[]->{...}}},}`;
export const eventsQuery = groq`*[_type == "event"]| order(date asc){..., "pdfURL": pdf.asset->url}`;