import { FC } from 'react';
import { fetchStoryList } from './fetchStoryList';
import { Story } from './story';
import { Container } from '@radix-ui/themes';

const StoryList: FC = async () => {

  const stories: Story[] = await fetchStoryList();

  return (
    <>
      {stories?.map((story: Story) => (
        <Container width={"auto"}>
          {story.title}
        </Container>
      ))}
    </>
  )
}

export default StoryList;