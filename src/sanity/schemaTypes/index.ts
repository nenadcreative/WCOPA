import type { SchemaTypeDefinition } from "sanity";
import { pageType } from "./documents/page";
import { homeType } from "./singletons/home";
import { settingsType } from "./singletons/settings";
import { blockContentType } from "./objects/blockContent";
import { seoType } from "./objects/seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageType, settingsType, homeType, blockContentType, seoType],
};
