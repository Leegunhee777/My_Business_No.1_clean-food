import { atom } from "recoil";
import { Store } from "../../type";

const initListAtom: Store.ListItem[] = [];

export const listAtom = atom<Store.ListItem[]>({
  key:'listAtom',
  default: initListAtom
});

const initFilterAtom: Store.Filter = '';

export const filterAtom = atom<Store.Filter>({
  key:'filterAtom',
  default: initFilterAtom
})