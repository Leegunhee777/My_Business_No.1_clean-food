import React from 'react';
import {
  LocationFilterWrap,
  FilterLocationOpenBtn,
  SVGWrap,
  SelectedLocaiton,
  WiderLocationWrap,
  WiderLocation,
  NarrowLocationWrap,
  NarrowLocation,
} from './styled';

interface Props {
  isLocationOpen: boolean;
  openLocationHandler: () => void;
  tempWideLocaiton: string;
  changeTempWideLocation: (value: string) => void;
  selectedLocation: {
    wideLocation: string;
    narrowLocation: string;
  };
  changeSelectedLocation: (
    value: string,
    e: React.MouseEvent<HTMLElement>
  ) => void;
}
const LocationFilterComponent = ({
  isLocationOpen,
  openLocationHandler,
  tempWideLocaiton,
  changeTempWideLocation,
  selectedLocation,
  changeSelectedLocation,
}: Props) => {
  return (
    <LocationFilterWrap>
      <div>
        <FilterLocationOpenBtn onClick={openLocationHandler}>
          <span>지역선택</span>
          <SVGWrap widerLocationOpen={isLocationOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
            </svg>
          </SVGWrap>
        </FilterLocationOpenBtn>

        <SelectedLocaiton>
          {selectedLocation.wideLocation === ''
            ? '전체'
            : selectedLocation.wideLocation}

          {selectedLocation.narrowLocation && (
            <span>({selectedLocation.narrowLocation})</span>
          )}
        </SelectedLocaiton>
      </div>

      {isLocationOpen && (
        <div>
          <WiderLocationWrap>
            {WiderGroup.map((value, index) => (
              <WiderLocation
                isActive={tempWideLocaiton === value}
                id="wideLocation"
                onClick={changeTempWideLocation.bind(null, value)}
              >
                {value === '' ? '전체' : value}
              </WiderLocation>
            ))}
          </WiderLocationWrap>

          <NarrowLocationWrap>
            {getNarrowLocation(tempWideLocaiton)?.map((value, index) => (
              <NarrowLocation
                isActive={selectedLocation.narrowLocation === value}
                id="narrowLocation"
                onClick={changeSelectedLocation.bind(null, value)}
              >
                {value}
              </NarrowLocation>
            ))}
          </NarrowLocationWrap>
        </div>
      )}
    </LocationFilterWrap>
  );
};

export default LocationFilterComponent;

const getNarrowLocation = (widerLocation: string) => {
  switch (widerLocation) {
    case '서울':
      return 서울;
    case '부산':
      return 부산;
    case '제주':
      return 제주;
    case '경기':
      return 경기;
    case '인천':
      return 인천;
    case '강원':
      return 강원;
    case '경상':
      return 경상;

    case '전라':
      return 전라;
    case '충청':
      return 충청;

    default:
      break;
  }
};
const WiderGroup = [
  '',
  '서울',
  '부산',
  '제주',
  '경기',
  '인천',
  '강원',
  '경상',
  '전라',
  '충청',
];

const 서울 = [
  '서울전체',
  '강남/역삼/삼성',
  '신사/청담/압구정',
  '서초/교대/사당',
  '잠실/송파/강동',
  '을지로/명동/중구/동대문',
  '서울역/이태원/용산',
  '종로/인사동',
  '홍대/합정/마포/서대문',
  '여의도',
  '영등포',
  '구로/신도림/금천',
  '김포공항/염창/강서',
  '건대입구/성수/왕십리',
  '성북/강북/노원/도봉',
];

const 부산 = [
  '부산전체',
  '해운대/마린시티',
  '벡스코/센텀시티',
  '송정/기장/정관',
  '광안리/경성대',
  '부산역',
  '자갈치/남포동/영도',
  '송도/다대포',
  '서면/연산/범일',
  '동래/온천/금정구',
  '사상/강서/김해공항',
];

const 제주 = [
  '제주전체',
  '제주시/제주국제공항',
  '서귀포시/모슬포',
  '애월/한림/협재',
  '중문',
  '표선/성산',
  '함덕/김녕/세화',
];

const 경기 = [
  '경기전체',
  '가평/청평/양평',
  '수원/화성',
  '고양/파주/김포',
  '의정부/포천/동두천',
  '용인/동탄',
  '오산/평택',
  '남양주/구리/성남/분당',
  '이천/광주/여주/하남',
  '부천/광명/시흥/안산',
  '안양/의왕/군포',
];

const 인천 = [
  '전체',
  '송도/소래포구',
  '인천국제공항/강화/을왕리',
  '영종도/월미도',
  '주안/간석/인천시청',
  '청라/계양/부평',
];

const 강원 = [
  '강원전체',
  '속조/양양/고성',
  '춘천/인제/철원',
  '강릉',
  '평창/정선/영월',
  '동해/삼척/태백',
  '홍천/횡성/원주',
];

const 경상 = [
  '경상전체',
  '대구/구미/안동/문경',
  '경주',
  '울산/양산',
  '거제/통영',
  '포항/영덕/울진/청송',
  '창원/마산/진해/김해/부곡',
  '남해/사천/하동/진주',
];

const 전라 = [
  '전라전체',
  '전주/완주',
  '광주/나주/함평',
  '여수',
  '순천/광양/담양/보성/화순',
  '남원/부안/정읍/고창/무주/구례',
  '군산/익산',
  '목포/신안/영광/진도/고흥/영암/완도/강진',
];

const 충청 = [
  '충청전체',
  '대전/세종',
  '천안/아산/도고',
  '안면도/태안/서산/덕산',
  '보령/대천/부여/공주/금산',
  '청주/음성/진천',
  '충주/제천/단양/괴산/증평',
];
