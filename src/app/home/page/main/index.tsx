import React, { useEffect } from 'react';
import { Container } from './styled';

import SearchComponent from './search';
import AdvertisementComponent from './advertisement';
import FilterComponent from './hot-content';
import ListComponent from './list';
import NewsComponent from './news';
import { homeAtom } from './state';
import { useRecoilState } from 'recoil';
import CategoryComponent from './category';
import HotContentComponent from './hot-content';

const HomeMainScreen = () => {
  return (
    <Container>
      <div>
        <SearchComponent />
        <AdvertisementComponent />
        <CategoryComponent />
        <HotContentComponent />
        {/* <ListComponent /> */}
        <NewsComponent />
      </div>
    </Container>
  );
};

export default HomeMainScreen;
