import { atom } from 'recoil';
import { Home } from '../../../model';

export const hotContentListAtom = atom<Home.MainHotContent[]>({
  key: 'hotContentListAtom',
  default: [],
});
