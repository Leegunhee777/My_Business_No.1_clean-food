import React from 'react';
import { atom } from 'recoil';

export const homeAtom = atom<any>({
  key:'homeAtom',
  default: {
    home: 7,
  }
});