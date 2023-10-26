export const ITEM_TYPE = {
  TIME: 'time',
  SCORE: 'score',
  USER: 'user',
  COMMENT: 'comment',
  NUMBER: 'number',
}

export function getAlign(type: string) {

  const CENTER = 'center';
  const START = 'start';

  switch(type) {
    case ITEM_TYPE.SCORE:
      return CENTER;
    case ITEM_TYPE.COMMENT:
      return CENTER;
    case ITEM_TYPE.TIME:
      return CENTER;
    default:
      return START;
  }
}