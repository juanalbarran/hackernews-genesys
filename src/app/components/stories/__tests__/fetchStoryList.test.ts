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

function mockFetchResolve(result: any) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(result),
    })
  ) as jest.Mock;
}

function mockFetchFail() {
  global.fetch = jest.fn(() => 
    Promise.resolve({
      ok: false,
      status: 500,
      json: Promise.resolve('Yo soy maelo el incomprendido'),
    })
  ) as jest.Mock;
}

describe('fetchStoryList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of number when fetchStoryIds is called', async () => {
    mockFetchResolve(mockIds);
    const ids: number[] = await fetchStoryIds(0, 1);
    expect(ids).toEqual(mockIds)
  });

  it('should throw an Error when fetchStoryIds is called', async () => {
    mockFetchFail()
    try {
      await fetchStoryIds(0,1);
    } catch (error) {
      expect(error instanceof Error).toBe(true);
    }
  });

  it('should return a story when fetchStory is called', async () => {
    mockFetchResolve(mockStory);
    const story: Story = await fetchStory(1);
    expect(story).toEqual(mockStory);
  });

  it('should throw an Error when fetchStory is called', async () => {
    mockFetchFail();
    try {
      await fetchStory(1);
    } catch (error) {
      expect(error instanceof Error).toBe(true);
    }
  });

});