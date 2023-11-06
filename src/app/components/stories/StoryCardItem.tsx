import {
  UserIcon,
  ClockIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";
import { Flex, Text } from "@radix-ui/themes";
import { ItemType, getAlign } from "./utils";

interface StoryCardItemProps {
  type: 'time' | 'score' | 'user' | 'comment' | 'number',
  value: string,
}

export function StoryCardItem( props: StoryCardItemProps ) {

  const {type, value} = props;

  return (
    <Flex direction={"row"} gap={"2"} align={"center"} justify={getAlign(type)} >
      { getSvg(type) }
      <Text size={"1"} as="div" color="gray" weight={"light"}>
        {value}
      </Text>
    </Flex>
  )
}

function getSvg(type: string) {
  switch (type) {
    case ItemType.TIME:
      return <ClockIcon height={"15"}/>;
    case ItemType.SCORE:
      return <ChevronDoubleUpIcon height={"15"}/>;
    case ItemType.USER:
      return <UserIcon height={"15"}/>;
    case ItemType.COMMENT:
      return <ChatBubbleLeftIcon height={"15"}/>;
    case ItemType.NUMBER:
      return <DocumentTextIcon height={"15"} className="text-orange-400"/>;
  }
}