import {
  UserIcon,
  ClockIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";
import { Flex, Text } from "@radix-ui/themes";
import { ITEM_TYPE, getAlign } from "./utils";

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
    case ITEM_TYPE.TIME:
      return <ClockIcon height={"15"}/>;
    case ITEM_TYPE.SCORE:
      return <ChevronDoubleUpIcon height={"15"}/>;
    case ITEM_TYPE.USER:
      return <UserIcon height={"15"}/>;
    case ITEM_TYPE.COMMENT:
      return <ChatBubbleLeftIcon height={"15"}/>;
    case ITEM_TYPE.NUMBER:
      return <DocumentTextIcon height={"15"} className="text-orange-400"/>;
  }
}