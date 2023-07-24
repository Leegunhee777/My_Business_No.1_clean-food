import React, { ChangeEvent, useCallback, useEffect } from 'react';
import store from '../../../../../asset/overlay.png';

import { ListContainer, SortButton } from './styled';
import { useListVM } from './useListVM';
import StoreItem from './store-item';
import ListSortComponent from './list-sort';

interface ListComponent {
  category: string;
}
const ListComponent = ({ category }: ListComponent) => {
  const [input, setInput] = React.useState('');
  const [page, setPage] = React.useState(1);
  const {
    loading,
    error,
    list,
    openSortFilter,
    selectedSortType,
    selectSortType,
    clickStore,
    clickSortFilter,
    closeSortFilter,
  } = useListVM({
    input,
    page,
    category,
  });

  const loader = React.useRef(null);
  const Container = React.useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      //스크롤이 명시되어있는 놈에게 root를적용해야지, 스크롤안에있는 item이 보였을때 발동하게됨
      root: document.querySelector('.contentWrap'),
      //ref=loader Dom이 등장하기 92px 이전에 데이터를 패칭함으로써,
      //스크롤의 끝에 닿기전에 데이터패팅을 하게해준다.
      rootMargin: '0px 0px 92px 0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <div style={{ border: '2px solid red' }}>
      <SortButton style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          style={{
            backgroundColor: 'white',
            padding: '12px 24px',

            outline: 'none',
            border: '1px solid black',
          }}
          onClick={clickSortFilter}
        >
          필터
        </button>
      </SortButton>

      <ListContainer>
        {list.map((store, index) => {
          return (
            <>
              <StoreItem key={index} store={store} clickStore={clickStore} />
            </>
          );
        })}
        {/* {error && <p>Error</p>} */}
        <div ref={loader} style={{ backgroundColor: 'gray', height: '92px' }}>
          로딩중...
        </div>
      </ListContainer>

      <ListSortComponent
        selectedSortType={selectedSortType}
        selectSortType={selectSortType}
        openSortFilter={openSortFilter}
        closeSortFilter={closeSortFilter}
      />
    </div>
  );
};

export default ListComponent;
