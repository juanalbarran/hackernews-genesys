import {
  UserIcon,
  ClockIcon,
  DocumentTextIcon,
  ChatBubbleLeftIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/20/solid";
import { Flex, Text } from "@radix-ui/themes";
import { COMMENT, NUMBER, SCORE, TIME, USER, getAlign, getColSpan } from "./utils";

interface StoryCardItemProps {
  type: 'time' | 'score' | 'user' | 'comment' | 'number',
  value: string,
}

export function StoryCardItem( props: StoryCardItemProps ) {

  const {type, value} = props;

  return (
    <Flex direction={"row"} gap={"2"} align={"center"} justify={getAlign(type)} className={getColSpan(type)}>
      { getSvg(type) }
      <Text size={"1"} as="div" color="gray" weight={"light"}>
        {value}
      </Text>
    </Flex>
  )
}

export function getSvg(type: string) {
  switch (type) {
    case TIME:
      return <ClockIcon height={"15"}/>;
    case SCORE:
      return <ChevronDoubleUpIcon height={"15"}/>;
    case USER:
      return <UserIcon height={"15"}/>;
    case COMMENT:
      return <ChatBubbleLeftIcon height={"15"}/>;
    case NUMBER:
      return <DocumentTextIcon height={"15"} className="text-orange-400"/>;
  }
}