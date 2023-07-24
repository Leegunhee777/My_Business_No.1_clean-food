import { useEffect } from 'react';
import {
  SortContentWrap,
  SortFilterWrap,
  FilterWrap,
  FilterTitle,
  FilterItem,
  SvgWrap,
  FilterCloseBth,
} from './styled';
interface Props {
  closeSortFilter: () => void;
  openSortFilter: {
    openStatus: boolean;
    isOpenHistory: boolean;
  };
  selectedSortType: string;
  selectSortType: (type: 'REVIEW' | 'RATING' | 'SAVED' | '') => void;
}

const ListSortComponent = ({
  closeSortFilter,
  openSortFilter,
  selectedSortType,
  selectSortType,
}: Props) => {
  return (
    <SortFilterWrap
      openSortFilter={openSortFilter}
      className="background"
      onClick={e => {
        const dom = e.target as HTMLElement;
        if (dom.className.includes('background')) {
          closeSortFilter();
        }
      }}
    >
      <SortContentWrap
        style={{
          backgroundColor: 'white',
          position: 'absolute',
          bottom: '0px',
          left: '0',
          right: '0',
          height: '300px',
          borderTopRightRadius: '38px',
          borderTopLeftRadius: '38px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <FilterWrap>
          <FilterTitle>정렬</FilterTitle>
          <FilterItem
            className="item"
            isActive={selectedSortType === 'REVIEW'}
            onClick={selectSortType.bind(null, 'REVIEW')}
          >
            <span>후기 많은 순</span>

            <SvgWrap>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </SvgWrap>
          </FilterItem>
          <FilterItem
            className="item"
            isActive={selectedSortType === 'RATING'}
            onClick={selectSortType.bind(null, 'RATING')}
          >
            <span>별점 높은 순</span>

            <SvgWrap>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </SvgWrap>
          </FilterItem>
          <FilterItem
            className="item"
            isActive={selectedSortType === 'SAVED'}
            onClick={selectSortType.bind(null, 'SAVED')}
          >
            <span>찜 많은 순</span>

            <SvgWrap>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </SvgWrap>
          </FilterItem>
        </FilterWrap>

        <FilterCloseBth onClick={closeSortFilter}>닫기</FilterCloseBth>
      </SortContentWrap>
    </SortFilterWrap>
  );
};

export default ListSortComponent;
