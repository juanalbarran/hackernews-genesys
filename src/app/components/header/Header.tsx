'use client';

import { FC } from "react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/20/solid";
import { Container, Flex, Text, Avatar, Callout } from "@radix-ui/themes";

const Header: FC = () => {
  return (
    <>
      <Container pt={"4"} width={"auto"}>
        <Flex gap={"3"} direction={"row"}>
          <Avatar
            fallback="" 
            src="https://play-lh.googleusercontent.com/S-jC2RtBE_9A29myfMZgU22AwF-eITjCBBMEf4YIqXODDiazO6fOhzw243IFCxytLDE=w240-h480-rw"
          />
          <Text as="p" align="left" color={"orange"} size={"7"}>
            HackerNews
          </Text>            
        </Flex>
      </Container>
      <Container pb={"4"} width={"auto"}>
        <Callout.Root color="orange">
          <Callout.Icon>
            <ChatBubbleBottomCenterIcon height={"25"}/>
          </Callout.Icon>
          <Callout.Text>
            Welcome to this HackerNews clone :)
          </Callout.Text>
        </Callout.Root>
      </Container>
    </>
  );
}

export default Header;