import React, { ChangeEvent, useCallback, useEffect } from 'react';
import store from '../../../../../asset/overlay.png';

import {
  ListContainer,
  ContentWrap,
  ItemContainer,
  ItemImageWrap,
  ItemImage,
  Title,
  Rating,
  Desc,
  Location,
} from './styled';
import { useListVM } from './useListVM';

interface ItemProps {
  store: {
    title: string;
    description: string;
    location: string;
    rating: number;
    imgUrl: string;
  };
  clickStore: () => void;
}

const Item = ({ store, clickStore }: ItemProps) => {
  return (
    <ItemContainer onClick={clickStore}>
      <ItemImageWrap>
        <ItemImage imgUrl={store.imgUrl} />
      </ItemImageWrap>

      <ContentWrap style={{ border: '1px solid blue' }}>
        <Title>
          {store.title}
          <Rating>{store.rating}</Rating>
        </Title>
        <Desc>{store.description}</Desc>

        <Location>{store.location}</Location>
      </ContentWrap>
    </ItemContainer>
  );
};

const ListComponent = () => {
  const [input, setInput] = React.useState('');
  const [page, setPage] = React.useState(1);
  const { loading, error, list, clickStore } = useListVM({ input, page });

  const loader = React.useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      console.log('들어왔다');
      setPage(prev => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      //상단 topBar와 하단 bottomBar영역을 제외한 영역에 대해 관찰하고싶었기 때문에, rootMargin을 아래처럼 설정하였다!
      rootMargin: '-80px 0px -100px 0px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [handleObserver]);

  return (
    <div style={{ border: '2px solid red' }}>
      <input placeholder="입력" />
      <ListContainer>
        {list.map((store, index) => {
          return <Item key={index} store={store} clickStore={clickStore} />;
        })}
        {loading && <p>Loading....</p>}
        {error && <p>Error</p>}
        <div
          ref={loader}
          style={{ background: '2px solid black', height: '20px' }}
        >
          가나다!
        </div>
      </ListContainer>
    </div>
  );
};

export default ListComponent;

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
