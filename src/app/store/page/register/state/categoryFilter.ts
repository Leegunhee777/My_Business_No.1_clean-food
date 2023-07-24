import { atom } from 'recoil';

export type CategoryFilterType = {
  consult: boolean;
  contract: boolean;
  interimPayment: boolean;
  balance: boolean;
  visit: boolean;
  etc: boolean;
  [index: string]: any;
};
const initState: CategoryFilterType = {
  consult: true,
  contract: true,
  interimPayment: true,
  balance: true,
  visit: true,
  etc: true,
};

export const categoryFilterAtom = atom<CategoryFilterType>({
  key: 'categoryFilterAtom',
  default: initState,
});
