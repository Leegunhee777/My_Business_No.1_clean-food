import { atom } from 'recoil';
import { Store } from '../../../model';

const initListAtom: Store.ListItem[] = [];

export const listAtom = atom<Store.ListItem[]>({
  key: 'listAtom',
  default: initListAtom,
});
