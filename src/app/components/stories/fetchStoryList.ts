import { Story } from "./story";
import { checkResponse, handleError } from "./utils";

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

export async function fetchStoryList(start: number, end: number): Promise<Story[]> {
  try {
    const storyIds: number[] = await fetchStoryIds(start, end);
    const stories: Story[] = await Promise.all(storyIds.map(async (storyId: number) => {
      const story: Story = await fetchStory(storyId);
      return story;
    }));
    return stories;
  } catch (error: unknown) {
    throw new Error(handleError(error));
  }
}

export async function fetchStoryIds(start: number, end: number): Promise<number[]> {
  try {
    const response: Response = await fetch(topStoriesUrl);
    checkResponse(response);
    const data: number[] = await response.json();
    return data.slice(start, end);
  } catch (error: unknown) {
    throw new Error(handleError(error));
  }
}

export async function fetchStory(itemId: number): Promise<Story> {
  try{
    const response: Response = await fetch(getItemUrl(itemId));
    checkResponse(response);
    const data: any = await response.json();
    return fillStory(data);
  } catch (error: unknown) {
    throw new Error(handleError(error));
  }
}

export function fillStory(story: StoryDO): Story {
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
