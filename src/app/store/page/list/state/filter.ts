import { atom } from 'recoil';

export type Filter = '' | '한식' | '일식' | '중식';

export const filterAtom = atom<Filter>({
  key: 'filterAtom',
  default: '',
});
