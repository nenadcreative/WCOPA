import type { SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/page";
import eventType from "./documents/event";
import { homeType } from "./singletons/home";
import { settingsType } from "./singletons/settings";

// objects
import { blockContentType } from "./objects/blockContent";
import { simpleBlockContentType } from "./objects/simpleBlockContent";
import { seoType } from "./objects/seo";
import mediaCardType from "./objects/mediaCard";
import simpleLinkType from "./objects/simpleLink";
import { linkType } from "./objects/link2";
import { simpleListItemType } from "./objects/simpleListItem";
import { listItemType } from "./objects/listItem";
import stepsCard from "./objects/stepsCard";
import contentCard from "./objects/contentCard";
import ctaCard from "./objects/ctaCard";
import blockSimple from "./objects/blockSimple";
import videoTestimonial from "./objects/videoTestimonial";

// sections
import mediaSectionType from "./sections/mediaSection";
import featuredList1Type from "./sections/featuredList1";
import featuredList2Type from "./sections/featuredList2";
import stepsType from "./sections/steps";
import centeredText from "./sections/centeredText";
import hero from "./sections/hero";
import featuredEvents from "./sections/featuredEvents";
import centeredCard from "./sections/centeredCard";
import cta1 from "./sections/cta1";
import cta2 from "./sections/cta2";
import homeHero from "./sections/homeHero";
import videoTestimonials from "./sections/videoTestimonials";
import faqType from "./documents/faq";
import faqSection from "./sections/faqSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //documents
    pageType,
    eventType,
    settingsType,
    homeType,
    faqType,

    //objects
    blockContentType,
    simpleBlockContentType,
    seoType,
    mediaCardType,
    stepsCard,
    simpleLinkType,
    linkType,
    simpleListItemType,
    listItemType,
    contentCard,
    ctaCard,
    blockSimple,
    videoTestimonial,
    faqSection,

    //sections
    mediaSectionType,
    featuredList1Type,
    featuredList2Type,
    stepsType,
    centeredText,
    centeredCard,
    hero,
    featuredEvents,
    cta1,
    cta2,
    homeHero,
    videoTestimonials,
  ],
};
