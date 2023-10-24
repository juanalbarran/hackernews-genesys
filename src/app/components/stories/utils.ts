export const TIME: string = 'time';
export const SCORE: string = 'score';
export const USER: string = 'user';
export const COMMENT: string = 'comment';
export const NUMBER: string = 'number';

export function getColSpan(type: string) {

  const COL_SPAN_3: string = 'col-span-3';

  switch (type) {
    case NUMBER:
      return 'col-span-1';
    case USER:
      return COL_SPAN_3;
    case TIME:
      return COL_SPAN_3;
    default:
      return 'col-span-2';
  }
}

export function getAlign(type: string) {

  const CENTER = 'center';
  const START = 'start';

  switch(type) {
    case SCORE:
      return CENTER;
    case COMMENT:
      return CENTER;
    case TIME:
      return CENTER;
    default:
      return START;
  }
}