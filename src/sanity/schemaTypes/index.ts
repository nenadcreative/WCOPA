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
import scheduleItem from "./objects/scheduleItem";
import simpleCard from "./objects/simpleCard";
import insightsCard from "./objects/insightsCard";
import successCard from "./objects/successCard";
import videos from "./objects/videos";
import photos from "./objects/photos";
import { videoType } from "./objects/video";
import { contactInfoCard } from './objects/contactInfoCard';
import { contactInfoItem } from "./objects/contactInfoItem";
import { featureCard } from './objects/featureCard';
import { sponsorType } from './objects/sponsor';
import { memberType } from './objects/member'
import { sponsorTestimonialType } from "./objects/sponsorTestimonial";
import { consultateType } from "./objects/consultate";
import { step2CardType } from "./objects/step2Card";
import { steps3CardType } from "./objects/steps3Card";
import { winnerCardType } from "./objects/winnerCard";

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
import scheduleSection from "./sections/scheduleSection";
import cardsFeature2 from "./sections/cardsFeature2";
import insights from "./sections/insights";
import success from "./sections/success";
import gallery from "./sections/gallery";
import { contactInfo } from './sections/contactInfo';
import { cardsFeature1 } from './sections/cardsFeature1';
import { sponsorsType } from "./sections/sponsors";
import { featuresSectionType } from "./sections/features";
import { teamSectionType } from './sections/teamSection'
import { sponsorTestimonialsType } from "./sections/sponsorTestimonials";
import { consultatesSectionType } from "./sections/consultatesSection";
import { steps2Type } from './sections/steps2';
import { steps3Type } from './sections/steps3';
import { winnersType } from "./sections/winners";
import { winners2Type } from "./sections/winners2";

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
    scheduleItem,
    simpleCard,
    insightsCard,
    successCard,
    videos,
    photos,
    videoType,
    contactInfoCard,
    contactInfoItem,
    featureCard,
    sponsorType,
    memberType,
    sponsorTestimonialType,
    consultateType,
    step2CardType,
    steps3CardType,
    winnerCardType,

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
    scheduleSection,
    cardsFeature2,
    insights,
    success,
    gallery,
    contactInfo,
    cardsFeature1,
    sponsorsType,
    featuresSectionType,
    teamSectionType,
    sponsorTestimonialsType,
    consultatesSectionType,
    steps2Type,
    steps3Type,
    winnersType,
    winners2Type
  ],
};
