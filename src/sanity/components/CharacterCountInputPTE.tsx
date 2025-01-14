// CharacterCountInputPTE.tsx

import { Stack, Text } from "@sanity/ui";
import { toPlainText } from "@portabletext/react";
import type { PortableTextInputProps, StringInputProps } from "sanity";
import styled from "styled-components";

export function CharacterCountInputPTE(props: PortableTextInputProps) {
  // check if validations exist
  // @ts-ignore
  const validationRules = props.schemaType.validation[0]._rules || [];
  const characters = props.value ? toPlainText(props.value).length : 0;

  //check if max Character validation exists and get the value
  const max = validationRules
    .filter((rule) => rule.flag === "max")
    .map((rule) => rule.constraint)[0];

  return (
    <Stack space={3}>
      <Container id={"PTE-height-container"}>
        {props.renderDefault({
          ...props,
          // remove the need to activate the PTE
          initialActive: true,
        })}
      </Container>
      <Text muted align={"right"} size={1}>
        Characters: {characters}
        {max ? ` / ${max}` : ""}
      </Text>
    </Stack>
  );
}
// add a specific height to the PTE without losing the ability to resize it
const Container = styled.div`
  [data-testid="pt-editor"][data-fullscreen="false"] {
    height: 120px;
  }
`;
