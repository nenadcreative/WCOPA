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

import mediaSectionType from "./sections/media";
import randomSectionType from "./sections/random";

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

    mediaSectionType,
    randomSectionType,
  ],
};
