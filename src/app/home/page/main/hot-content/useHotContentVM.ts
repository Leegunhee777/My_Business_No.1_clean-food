import React from 'react';
import { useRecoilState } from 'recoil';
import { hotContentListAtom } from '../state/hotContentList';
import ban1 from './images/ban1.png';
import ban2 from './images/ban2.png';
import ban3 from './images/ban3.png';
import ban4 from './images/ban4.png';
import ban5 from './images/ban5.png';

import gele1 from './images/gele1.png';
import gele2 from './images/gele2.png';
import gele3 from './images/gele3.png';
import gele4 from './images/gele4.png';
import gele5 from './images/gele5.png';

import su1 from './images/su1.png';
import su2 from './images/su2.png';
import su3 from './images/su3.png';
import su4 from './images/su4.png';
import su5 from './images/su5.png';

import nong1 from './images/nong1.png';
import nong2 from './images/nong2.png';
import nong3 from './images/nong3.png';
import nong4 from './images/nong4.png';
import nong5 from './images/nong5.png';

export const useHotContentVM = () => {
  const [hotContentListAtomState, setHotContentListAtomState] =
    useRecoilState(hotContentListAtom);
  const [isLoading, setIsLoading] = React.useState(false);

  const [activeFilter, setActiveFilter] = React.useState('반찬가게');

  React.useEffect(() => {
    getHotContent();
  }, [activeFilter]);

  const getHotContent = () => {
    setIsLoading(true);
    try {
      //UseCase HontContent가져와!
      const res = matchResponse();
      setHotContentListAtomState(res!);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const filterChange = (filterType: string) => {
    setActiveFilter(filterType);
  };

  const matchResponse = () => {
    switch (activeFilter) {
      case '반찬가게':
        return banList;

      case '재래시장':
        return geleList;

      case '전국농산물':
        return nongList;

      case '전국수산물':
        return suList;
    }
  };
  const filterList = ['반찬가게', '재래시장', '전국농산물', '전국수산물'];
  return {
    hotContentList: hotContentListAtomState,
    activeFilter,
    filterList,
    isLoading,
    filterChange,
  };
};

const banList = [
  {
    imageUrl: ban1,
    rate: 2.2,
    reviewCount: 2384,
    title: '진이찬방',
    location: '여수',
  },
  {
    imageUrl: ban2,
    rate: 3.8,
    reviewCount: 2384,
    title: '김수미 엄마손맛',
    location: '제주',
  },
  {
    imageUrl: ban3,
    rate: 5,
    reviewCount: 2384,
    title: '쿠사네반찬가게',
    location: '금천',
  },
  {
    imageUrl: ban4,
    rate: 3.7,
    reviewCount: 2384,
    title: '이찬방',
    location: '남양주',
  },
  {
    imageUrl: ban5,
    rate: 2.8,
    reviewCount: 2384,
    title: '소문난 반찬가게',
    location: '포천',
  },
];

const geleList = [
  {
    imageUrl: gele1,
    rate: 3.6,
    reviewCount: 2384,
    title: '수유재래시장',
    location: '수유',
  },
  {
    imageUrl: gele2,
    rate: 2.4,
    reviewCount: 1468,
    title: '죽도시장',
    location: '죽도',
  },
  {
    imageUrl: gele3,
    rate: 2.7,
    reviewCount: 364,
    title: '새마을 전통시장',
    location: '잠실',
  },
  {
    imageUrl: gele4,
    rate: 3.7,
    reviewCount: 75,
    title: '역전 전통시장',
    location: '파주',
  },
  {
    imageUrl: gele5,
    rate: 2.8,
    reviewCount: 13,
    title: '제주동문시장',
    location: '제주시',
  },
];

const suList = [
  {
    imageUrl: su1,
    rate: 4.8,
    reviewCount: 31,
    title: '마산어시장',
    location: '마산',
  },
  {
    imageUrl: su2,
    rate: 4.5,
    reviewCount: 3634,
    title: '제주동문수산시장',
    location: '제주시',
  },
  {
    imageUrl: su3,
    rate: 2.7,
    reviewCount: 524,
    title: '전주 수산시장',
    location: '전주',
  },
  {
    imageUrl: su4,
    rate: 3.7,
    reviewCount: 23,
    title: '삼천포 용궁 수산시장',
    location: '삼천포',
  },
  {
    imageUrl: su5,
    rate: 3.2,
    reviewCount: 253,
    title: '남당항 수산시장',
    location: '남당',
  },
];

const nongList = [
  {
    imageUrl: nong1,
    rate: 3.2,
    reviewCount: 31,
    title: '반여동산물도매시장',
    location: '반여',
  },
  {
    imageUrl: nong2,
    rate: 4.5,
    reviewCount: 3634,
    title: '김천 농산물 도매시장',
    location: '김천',
  },
  {
    imageUrl: nong5,
    rate: 3.2,
    reviewCount: 253,
    title: '농산물 동네슈퍼판매전',
    location: '춘천',
  },
  {
    imageUrl: nong3,
    rate: 2.7,
    reviewCount: 524,
    title: '원주시 농산물 공영 도매시장',
    location: '원주',
  },
  {
    imageUrl: nong4,
    rate: 3.7,
    reviewCount: 23,
    title: '바로마켓직거래',
    location: '경상북도점',
  },
];
