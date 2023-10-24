import { Story } from "./story";

const topStoriesUrl: string = 'https://hacker-news.firebaseio.com/v0/newstories.json';

interface StoryDO {
  by: string,
  descendants: number,
  id: number,
  kids: number[],
  score: number,
  time: number,
  title: string,
  url: string,
}

function getItemUrl(itemId: number) {
  return `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`;
}

export async function fetchStoryList(): Promise<Story[]> {
  try {
    const storyIds: number[] = await fetchStoryIds();
    const stories: Story[] = await Promise.all(storyIds.map(async (storyId: number) => {
      const story: Story = await fetchStory(storyId);
      return story;
    }));
    return stories;
  } catch (error: any) {
    throw new Error("Error: ", error.message);
  }
}

async function fetchStoryIds(): Promise<number[]> {
  try {
    const response: Response = await fetch(topStoriesUrl);
    const data: number[] = await response.json();
    return data;
  } catch (error: any) {
    throw new Error("Error: ", error.message);
  }
}

async function fetchStory(itemId: number): Promise<Story> {
  try{
    const response: Response = await fetch(getItemUrl(itemId));
    const data: any = await response.json();
    return fillStory(data);
  } catch (error: any) {
    throw new Error("Error: ", error.message);
  }
}

function fillStory(story: StoryDO): Story {
  return {
    by: story.by,
    descendants: story.descendants,
    id: story.id,
    kids: story.kids,
    score: story.score,
    time: story.time,
    title: story.title,
    url: story.url,
  }
}
