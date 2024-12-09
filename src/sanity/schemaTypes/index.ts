import type { SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/page";
import { homeType } from "./singletons/home";
import { settingsType } from "./singletons/settings";
import { blockContentType } from "./objects/blockContent";
import { simpleBlockContentType } from "./objects/simpleBlockContent";
import { seoType } from "./objects/seo";
import mediaCardType from "./objects/mediaCard";
import simpleLinkType from "./objects/simpleLink";
import linkType from "./objects/link";
import { simpleListItemType } from "./objects/simpleListItem";

import mediaSectionType from "./sections/media";
import randomSectionType from "./sections/random";
import featuredList1Type from "./sections/featuredList1";
import featuredList2Type from "./sections/featuredList2";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    settingsType,
    homeType,
    blockContentType,
    simpleBlockContentType,
    seoType,
    mediaCardType,
    simpleLinkType,
    linkType,
    simpleListItemType,

    mediaSectionType,
    randomSectionType,
    featuredList1Type,
    featuredList2Type,
  ],
};
