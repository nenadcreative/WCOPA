// schemas/portableText/overview.tsx

import { CharacterCountInputPTE } from "@sanity/components/CharacterCountInputPTE";
import { defineArrayMember, defineType } from "sanity";

/** ## `overview` Type - reduced Portable Text
 *
 * The height of the input is reduced to 2 lines.
 *
 * @name overview
 * @type {PortableTextBlock[]}
 * @validation {Rule} - Required, max 280 characters
 * @description Used both for the <meta> description tag for SEO, and the personal website subheader.
 *
 * ### Blocks
 * - **Decorators**: `em`, `strong`
 * - **Annotations**: none
 * - **Styles**: none
 * - **Lists**: none
 *
 *
 */
export default defineType({
  name: "blockSimple",

  title: "Block Simple",
  type: "array",
  // You can override the max values from the schema by setting a validation on the field

  components: {
    input: CharacterCountInputPTE,
  },
  of: [
    // Paragraphs
    defineArrayMember({
      lists: [],
      marks: {
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
            ],
          },
        ],
        decorators: [
          {
            title: "Italic",
            value: "em",
          },
          {
            title: "Strong",
            value: "strong",
          },
        ],
      },
      styles: [],
      type: "block",
    }),
  ],
});
