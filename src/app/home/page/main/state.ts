import { atom } from 'recoil';

export const homeAtom = atom<any>({
  key: 'homeAtom',
  default: {
    home: 7,
  },
});

export type Search = {
  inputText: string;
};

export const searchAtom = atom<Search>({
  key: 'searchAtom',
  default: {
    inputText: '',
  },
});

export type HotContent = {
  imageUrl: string;
  rate: number;
  reviewCount: number;
  title: string;
  location: string;
};

export const hotContentListAtom = atom<HotContent[]>({
  key: 'hotContentListAtom',
  default: [],
});
