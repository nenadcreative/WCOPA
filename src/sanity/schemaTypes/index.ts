import type { SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/page";
import eventType from "./documents/event";
import { homeType } from "./singletons/home";
import { settingsType } from "./singletons/settings";
import { blockContentType } from "./objects/blockContent";
import { simpleBlockContentType } from "./objects/simpleBlockContent";
import { seoType } from "./objects/seo";
import mediaCardType from "./objects/mediaCard";
import simpleLinkType from "./objects/simpleLink";
import { linkType } from "./objects/link2";
import { simpleListItemType } from "./objects/simpleListItem";
import { listItemType } from "./objects/listItem";
import stepsCard from "./objects/stepsCard";

// sections
import mediaSectionType from "./sections/mediaSection";
import featuredList1Type from "./sections/featuredList1";
import featuredList2Type from "./sections/featuredList2";
import stepsType from "./sections/steps";
import centeredText from "./sections/centeredText";
import hero from "./sections/hero";
import featuredEvents from "./sections/featuredEvents";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    eventType,
    settingsType,
    homeType,
    blockContentType,
    simpleBlockContentType,
    seoType,
    mediaCardType,
    stepsCard,
    simpleLinkType,
    linkType,

    simpleListItemType,
    listItemType,

    //sections
    mediaSectionType,
    featuredList1Type,
    featuredList2Type,
    stepsType,
    centeredText,
    hero,
    featuredEvents,
  ],
};
