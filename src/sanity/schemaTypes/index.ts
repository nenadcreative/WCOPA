import type { SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/page";
import { homeType } from "./singletons/home";
import { settingsType } from "./singletons/settings";
import { blockContentType } from "./objects/blockContent";
import { seoType } from "./objects/seo";
import simpleLinkType from "./objects/simpleLink";
import LinkType from "./objects/Link";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    settingsType,
    homeType,
    blockContentType,
    seoType,
    simpleLinkType,
    LinkType,
  ],
};
