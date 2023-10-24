'use client'

import { Callout, Container } from "@radix-ui/themes";
import { FC } from "react";

const Footer: FC = () => (
  <Container py={"4"} width={"auto"}>
    <Callout.Root color="orange">
      <Callout.Text >
        Made by Juan Jesus Albarran Rodriguez for a Genesys interview.
      </Callout.Text>
    </Callout.Root>
  </Container>
);

export default Footer;