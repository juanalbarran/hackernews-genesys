export const ITEM_TYPE = {
  TIME: 'time',
  SCORE: 'score',
  USER: 'user',
  COMMENT: 'comment',
  NUMBER: 'number',
}

export function getColSpan(type: string) {

  const COL_SPAN_TYPES = {
    COL_SPAN_1: 'col_span_1',
    COL_SPAN_2: 'col_span_2',
    COL_SPAN_3: 'col_span_3',
  }

  switch (type) {
    case ITEM_TYPE.NUMBER:
      return COL_SPAN_TYPES.COL_SPAN_1;
    case ITEM_TYPE.USER:
      return COL_SPAN_TYPES.COL_SPAN_3;
    case ITEM_TYPE.TIME:
      return COL_SPAN_TYPES.COL_SPAN_3;
    default:
      return COL_SPAN_TYPES.COL_SPAN_2;
  }
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