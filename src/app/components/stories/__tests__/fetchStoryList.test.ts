import { fetchStory, fetchStoryIds, fetchStoryList } from '../fetchStoryList';
import { Story } from "../story";

const mockStory: Story = {
  by: 'juan',
  id: 1,
  url: 'kek.com',
  kids: [2,3,4],
  descendants: 0,
  score: 300,
  time: 37123323,
  title: 'How to do one pushup: the programmer guide',
};
const mockIds: number[] = [1];

describe('fetchStoryList', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of number', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockIds),
      })
    ) as jest.Mock;
    const ids: number[] = await fetchStoryIds(0, 1);
    expect(ids).toEqual(mockIds)
  });

  it('should return a story', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockStory),
      })
    ) as jest.Mock;
    const story: Story = await fetchStory(1);
    expect(story).toEqual(mockStory);
  });

});