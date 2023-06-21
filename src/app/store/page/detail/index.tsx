import React from 'react';
import { Container } from './styled';

import SwipeImageComponent from './swipe-image';
import TabComponent from './tab';

import MenuListComponent from './menu-list';
import ReViewListComponent from './review-list';
import CoBuyGroupListComponent from './co-buy-group-list';
import { useRecoilState } from 'recoil';
import { homeAtom } from '../../../home/page/main/state';

const StoreDetailScreen = () => {
  function switchRender(activeTab: string) {
    switch (activeTab) {
      case 'MENU':
        return <MenuListComponent />;

      case 'REVIEW':
        return <ReViewListComponent />;

      case 'COBUY':
        return <CoBuyGroupListComponent />;

      default:
        return <MenuListComponent />;
    }
  }

  return (
    <Container style={{ height: '100%' }}>
      <div>
        <SwipeImageComponent />
        <TabComponent />
        {switchRender('')}
      </div>
    </Container>
  );
};

export default StoreDetailScreen;
