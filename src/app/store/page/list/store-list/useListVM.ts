import axios from 'axios';
import React, { useEffect } from 'react';
import store from '../../../../../asset/overlay.png';
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../../../../routes/paths';

import ban1 from '../../../../home/page/main//hot-content/images/ban1.png';
import ban2 from '../../../../home/page/main//hot-content/images/ban2.png';
import ban3 from '../../../../home/page/main//hot-content/images/ban3.png';
import ban4 from '../../../../home/page/main//hot-content/images/ban4.png';
import ban5 from '../../../../home/page/main//hot-content/images/ban5.png';

import gele1 from '../../../../home/page/main//hot-content/images/gele1.png';
import gele2 from '../../../../home/page/main//hot-content/images/gele2.png';
import gele3 from '../../../../home/page/main//hot-content/images/gele3.png';
import gele4 from '../../../../home/page/main//hot-content/images/gele4.png';
import gele5 from '../../../../home/page/main//hot-content/images/gele5.png';

import su1 from '../../../../home/page/main//hot-content/images/su1.png';
import su2 from '../../../../home/page/main//hot-content/images/su2.png';
import su3 from '../../../../home/page/main//hot-content/images/su3.png';
import su4 from '../../../../home/page/main//hot-content/images/su4.png';
import su5 from '../../../../home/page/main//hot-content/images/su5.png';

import nong1 from '../../../../home/page/main//hot-content/images/nong1.png';
import nong2 from '../../../../home/page/main//hot-content/images/nong2.png';
import nong3 from '../../../../home/page/main//hot-content/images/nong3.png';
import nong4 from '../../../../home/page/main//hot-content/images/nong4.png';
import nong5 from '../../../../home/page/main//hot-content/images/nong5.png';
import { parse, stringify } from '../../../../../utils/parse-stringify';
import { useParams } from 'react-router-dom';
type List = {
  imageUrl: string;
  rate: number;
  reviewCount: number;
  title: string;
  location: string;
  detailLocation: string;
  description: string;
};
export function useListVM({
  input,
  page,
  category,
}: {
  input: string;
  page: number;
  category: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState<List[]>([]);
  const [openSortFilter, setOpenSortFilter] = React.useState({
    openStatus: false,
    isOpenHistory: false,
  });
  const [selectedSortType, setSeletedSortType] = React.useState<
    'REVIEW' | 'RATING' | 'SAVED' | ''
  >('');

  React.useEffect(() => {
    getList(input, page);
  }, [input, page]);

  React.useEffect(() => {
    const { tab } = parse(location.search);
    if (tab) {
      setOpenSortFilter({
        openStatus: true,
        isOpenHistory: true,
      });
    } else {
      setOpenSortFilter(prev => ({
        ...prev,
        openStatus: false,
      }));
    }
  }, [location.search]);

  async function getList(input: string, page: number) {
    try {
      setLoading(true);
      setError(false);
      // const response = await listUseCase.getFilterdList(filterState);
      // console.log(response);
      // setListState(response);
      //const res = await axios.get(`/${input}/${page}`);

      const result: any = await fakeFetch();
      setList(prev => [...prev, ...result]);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  function fakeFetch() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        const fakeList = getFakeList(category)!;
        resolve(fakeList);
      }, 500)
    );
  }
  function clickStore(id: number) {
    navigate(`/store/${category}/${id}`);
  }

  function getFakeList(category: string) {
    switch (category) {
      case 'dish':
        return banList;

      case 'localmarket':
        return geleList;

      case 'vegetable':
        return nongList;

      case 'seafood':
        return suList;

      default:
        break;
    }
  }

  //replace true 옵션을 주면 history에 안쌓이는 navigate가 실행되기떄문에,
  //이전을 누르면 navigate함수발동 이전의 path로 바뀐다.
  //여기에 만약 replace true를 한다면, 이전버튼을 눌렀을때 팝업이 닫히는게아니라
  //홈화면으로 돌아가게될것이다.
  const clickSortFilter = () => {
    return navigate({
      search: stringify({
        tab: true,
      }),
    });
  };

  const closeSortFilter = () => {
    return navigate(-1);
  };

  const selectSortType = (type: 'REVIEW' | 'RATING' | 'SAVED' | '') => {
    setSeletedSortType(type);
  };

  return {
    loading,
    error,
    list,
    openSortFilter,
    selectedSortType,
    clickStore,
    selectSortType,
    clickSortFilter,
    closeSortFilter,
  };
}

const storeList = [
  {
    title: '엄마네다',
    description:
      '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store,
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,
    imgUrl: store,
  },
  {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,
    imgUrl: store,
  },
  {
    title: '엄마네다',
    description:
      '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store,
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,
    imgUrl: store,
  },
  {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,
    imgUrl: store,
  },
  {
    title: '엄마네다',
    description:
      '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store,
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,
    imgUrl: store,
  },
  {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,
    imgUrl: store,
  },
  {
    title: '엄마네다',
    description:
      '엄마의 손맛이 정말 맛있고 누구보다 청결도를 중시하며 그 누구도 따리오지못하는 로직과 패턴',
    location: '경기도 성남시 수정구 태평3동',
    rating: 3.6,
    imgUrl: store,
  },
  {
    title: '아빠네다',
    description: '아빠의 손맛',
    location: '깅기도 성남시 분당구 서현동',
    rating: 4.2,
    imgUrl: store,
  },
  {
    title: '이모네다',
    description: '이모집',
    location: '경기도 성남시 하대원동',
    rating: 1.1,
    imgUrl: store,
  },
];

const banList = [
  {
    imageUrl: ban1,
    rate: 2.2,
    reviewCount: 2384,
    title: '진이찬방',
    location: '여수',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban2,
    rate: 3.8,
    reviewCount: 2384,
    title: '김수미 엄마손맛',
    location: '제주',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban3,
    rate: 5,
    reviewCount: 2384,
    title: '쿠사네반찬가게',
    location: '금천',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban4,
    rate: 3.7,
    reviewCount: 2384,
    title: '이찬방',
    location: '남양주',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban5,
    rate: 2.8,
    reviewCount: 2384,
    title: '소문난 반찬가게',
    location: '포천',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: ban1,
    rate: 2.2,
    reviewCount: 2384,
    title: '진이찬방',
    location: '여수',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban2,
    rate: 3.8,
    reviewCount: 2384,
    title: '김수미 엄마손맛',
    location: '제주',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban3,
    rate: 5,
    reviewCount: 2384,
    title: '쿠사네반찬가게',
    location: '금천',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban4,
    rate: 3.7,
    reviewCount: 2384,
    title: '이찬방',
    location: '남양주',
    detailLocation: '경기 성남시 하대원동 2533번지',
    description: '이곳의 반찬은 아주 청결하며 아주 야무지거든요',
  },
  {
    imageUrl: ban5,
    rate: 2.8,
    reviewCount: 2384,
    title: '소문난 반찬가게',
    location: '포천',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
];

const geleList = [
  {
    imageUrl: gele1,
    rate: 3.6,
    reviewCount: 2384,
    title: '수유재래시장',
    location: '수유',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele2,
    rate: 2.4,
    reviewCount: 1468,
    title: '죽도시장',
    location: '죽도',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele3,
    rate: 2.7,
    reviewCount: 364,
    title: '새마을 전통시장',
    location: '잠실',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele4,
    rate: 3.7,
    reviewCount: 75,
    title: '역전 전통시장',
    location: '파주',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele5,
    rate: 2.8,
    reviewCount: 13,
    title: '제주동문시장',
    location: '제주시',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele1,
    rate: 3.6,
    reviewCount: 2384,
    title: '수유재래시장',
    location: '수유',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele2,
    rate: 2.4,
    reviewCount: 1468,
    title: '죽도시장',
    location: '죽도',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele3,
    rate: 2.7,
    reviewCount: 364,
    title: '새마을 전통시장',
    location: '잠실',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele4,
    rate: 3.7,
    reviewCount: 75,
    title: '역전 전통시장',
    location: '파주',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: gele5,
    rate: 2.8,
    reviewCount: 13,
    title: '제주동문시장',
    location: '제주시',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
];

const suList = [
  {
    imageUrl: su1,
    rate: 4.8,
    reviewCount: 31,
    title: '마산어시장',
    location: '마산',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su2,
    rate: 4.5,
    reviewCount: 3634,
    title: '제주동문수산시장',
    location: '제주시',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su3,
    rate: 2.7,
    reviewCount: 524,
    title: '전주 수산시장',
    location: '전주',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su4,
    rate: 3.7,
    reviewCount: 23,
    title: '삼천포 용궁 수산시장',
    location: '삼천포',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su5,
    rate: 3.2,
    reviewCount: 253,
    title: '남당항 수산시장',
    location: '남당',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su1,
    rate: 4.8,
    reviewCount: 31,
    title: '마산어시장',
    location: '마산',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su2,
    rate: 4.5,
    reviewCount: 3634,
    title: '제주동문수산시장',
    location: '제주시',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su3,
    rate: 2.7,
    reviewCount: 524,
    title: '전주 수산시장',
    location: '전주',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su4,
    rate: 3.7,
    reviewCount: 23,
    title: '삼천포 용궁 수산시장',
    location: '삼천포',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: su5,
    rate: 3.2,
    reviewCount: 253,
    title: '남당항 수산시장',
    location: '남당',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
];

const nongList = [
  {
    imageUrl: nong1,
    rate: 3.2,
    reviewCount: 31,
    title: '반여동산물도매시장',
    location: '반여',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong2,
    rate: 4.5,
    reviewCount: 3634,
    title: '김천 농산물 도매시장',
    location: '김천',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong5,
    rate: 3.2,
    reviewCount: 253,
    title: '농산물 동네슈퍼판매전',
    location: '춘천',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong3,
    rate: 2.7,
    reviewCount: 524,
    title: '원주시 농산물 공영 도매시장',
    location: '원주',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong4,
    rate: 3.7,
    reviewCount: 23,
    title: '바로마켓직거래',
    location: '경상북도점',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong1,
    rate: 3.2,
    reviewCount: 31,
    title: '반여동산물도매시장',
    location: '반여',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong2,
    rate: 4.5,
    reviewCount: 3634,
    title: '김천 농산물 도매시장',
    location: '김천',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong5,
    rate: 3.2,
    reviewCount: 253,
    title: '농산물 동네슈퍼판매전',
    location: '춘천',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong3,
    rate: 2.7,
    reviewCount: 524,
    title: '원주시 농산물 공영 도매시장',
    location: '원주',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
  {
    imageUrl: nong4,
    rate: 3.7,
    reviewCount: 23,
    title: '바로마켓직거래',
    location: '경상북도점',
    detailLocation: '경기 포천 나누시 3938번지',
    description: '이곳은 포천에서 맑은 공기를 마시면서 뿌뿌뿌!',
  },
];
