export enum ItemType {
  TIME = 'time',
  SCORE = 'score',
  USER = 'user',
  COMMENT = 'comment',
  NUMBER = 'number',
}

export function getAlign(type: string) {

  const CENTER = 'center';
  const START = 'start';

  switch(type) {
    case ItemType.SCORE:
      return CENTER;
    case ItemType.COMMENT:
      return CENTER;
    case ItemType.TIME:
      return CENTER;
    default:
      return START;
  }
}

export function checkResponse(response: Response) {
  if (response.status === 404) {
    throw new Error('Not found');
  } else if (response.status === 500) {
    throw new Error('Server Error');        
  } else if (!response.ok) {
    throw new Error(`Something bad happened: ${response.status}`);
  }
}

export function handleError(error: unknown): string {
  let message: string;
  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something bad happened';
  }
  return message;
}