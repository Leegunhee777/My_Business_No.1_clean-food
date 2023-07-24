import React from 'react';
import { StoreDetailWrap } from './styled';

import TabComponent from './tab';

import MenuListComponent from './render-type/menu-list';
import ReViewListComponent from './render-type/review-list';
import CoBuyGroupListComponent from './render-type/co-buy-group-list';
import AdvertisementComponent from './advertisement';
import DescriptionComponent from './description';
import { useDetailVM } from './useDetailVM';
const StoreDetailPage = () => {
  const { activeTab, clickTabValue } = useDetailVM();
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
    <StoreDetailWrap>
      <div>
        <AdvertisementComponent />
        <DescriptionComponent />

        <TabComponent clickTabValue={clickTabValue} activeTab={activeTab} />

        {switchRender(activeTab)}
      </div>
    </StoreDetailWrap>
  );
};

export default StoreDetailPage;
