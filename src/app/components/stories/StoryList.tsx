import { FC } from 'react';
import dayjs, { Dayjs } from "dayjs";
import { Box, Card, Container, Flex, Grid, Text } from '@radix-ui/themes';
import relativeTime from 'dayjs/plugin/relativeTime';

import { fetchStoryList } from './fetchStoryList';
import { Story } from './story';
import { StoryCardItem } from './StoryCardItem';
import Pagination from './Pagination';

interface StoryListProps {
  start: number;
  end: number;
}

const StoryList: FC<StoryListProps> = async ({ start, end }) => {

  const stories: Story[] = await fetchStoryList(start, end);

  return (
    <Flex direction={"column"} gap={"5"}>
      <Container width={"auto"}>
        <Flex direction={"row-reverse"}>
          <Pagination hasNextPage={end < 500} hasPrevPage={start > 0}/>
        </Flex>
      </Container>
      <Container width={"auto"} >
        <Grid align={"center"} gap={"3"} columns={"1"} width={"auto"}>
          {stories?.map((story: Story, index: number) => {

            dayjs.extend(relativeTime);
            const timestamp: Dayjs = dayjs(story.time * 1000);
            const humanDate: string = timestamp.fromNow();
            const comments: string = story.kids ? `${story.kids.length}` : '0';

            return (
              <Card asChild key={story.id} style={{flex: 1, padding: 5}}>
                <a href={story.url}>
                  <table className='table-layout: auto min-w-full'>
                    <tbody>
                      <tr>
                        <td className='story-item-column'><StoryCardItem type="number" value={`${index + start + 1}`}/></td>
                        <td className='story-item-column-title truncate'>
                          <Box>
                            <Text size={"2"} as="div" weight={"regular"}>
                              {story.title}
                            </Text>
                          </Box>
                        </td>                      
                        <td className='story-item-column-user'><StoryCardItem type="user" value={story.by}/></td>
                        <td className='story-item-column-time'><StoryCardItem type="time" value={humanDate}/></td>
                        <td className='story-item-column'><StoryCardItem type="score" value={`${story.score}`}/></td>
                        <td className='story-item-column'><StoryCardItem type="comment" value={comments}/></td>
                      </tr>
                    </tbody>
                  </table>
                </a>
              </Card>
            )
          })}
        </Grid>
      </Container>
      <Container width={"auto"}>
        <Flex direction={"row-reverse"}>
          <Pagination hasNextPage={end < 500} hasPrevPage={start > 0}/>
        </Flex>
      </Container>
    </Flex>
  )
}

export default StoryList;