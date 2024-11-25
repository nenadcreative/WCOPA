import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schemaTypes";
import { CogIcon } from "@sanity/icons";
import { HomeIcon } from "@sanity/icons";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["home", "settings"]);

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_PROJECT_DATASET,
  plugins: isDev
    ? [
        structureTool({
          structure: (S) =>
            S.list()
              .title("Content")
              .items([
                // Our singleton type has a list item with a custom child
                S.listItem()
                  .title("Home")
                  .id("132f2662-58c6-4916-886d-d1a517f675f9")
                  .icon(HomeIcon)
                  .child(
                    // Instead of rendering a list of documents, we render a single
                    // document, specifying the `documentId` manually to ensure
                    // that we're editing the single instance of the document
                    S.document()
                      .schemaType("home")
                      .documentId("132f2662-58c6-4916-886d-d1a517f675f9")
                  ),
                S.divider(),

                // Regular document types
                S.documentTypeListItem("page").title("Pages"),

                S.divider(),
                S.listItem()
                  .title("Website Settings")
                  .id("65e93031-3a43-4907-8bf9-1bd2ff2d9b08")
                  .icon(CogIcon)
                  .child(
                    // Instead of rendering a list of documents, we render a single
                    // document, specifying the `documentId` manually to ensure
                    // that we're editing the single instance of the document
                    S.document()
                      .schemaType("settings")
                      .documentId("65e93031-3a43-4907-8bf9-1bd2ff2d9b08")
                  ),
              ]),
        }),
        visionTool(),
      ]
    : [structureTool()],

  schema: {
    types: schema.types,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
