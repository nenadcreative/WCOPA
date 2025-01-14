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
import homeHero from "./sections/homeHero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    eventType,
    settingsType,
    homeType,

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
    homeHero,
  ],
};
