import React, { useEffect } from 'react';
import { Container } from './styled';

import SearchComponent from './search';
import AdvertisementComponent from './advertisement';
import FilterComponent from './filter';
import ListComponent from './list';
import NewsComponent from './news';
import { homeAtom } from './state';
import { useRecoilState } from 'recoil';

const HomeMainScreen = () => {
  return (
    <Container>
      <div>
        <SearchComponent />
        <AdvertisementComponent />
        <FilterComponent />
        <ListComponent />
        <NewsComponent />
      </div>
    </Container>
  );
};

export default HomeMainScreen;
