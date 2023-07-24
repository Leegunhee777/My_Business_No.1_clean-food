import React from 'react';
import { StoreListWrap } from './styled';

import ListComponent from './store-list';
import { useParams } from 'react-router-dom';
import LocationFilterComponent from './location-filter';
import { useListVM } from './useListVM';
import AdvertisementComponent from './advertisement';

const StoreListPage = () => {
  let { category } = useParams();
  const {
    isLocationOpen,
    tempWideLocaiton,
    selectedLocation,
    openLocationHandler,
    changeTempWideLocation,
    changeSelectedLocation,
  } = useListVM();

  return (
    <StoreListWrap>
      <div>
        <LocationFilterComponent
          isLocationOpen={isLocationOpen}
          openLocationHandler={openLocationHandler}
          tempWideLocaiton={tempWideLocaiton}
          changeTempWideLocation={changeTempWideLocation}
          selectedLocation={selectedLocation}
          changeSelectedLocation={changeSelectedLocation}
        />
        <AdvertisementComponent />
        <ListComponent category={category!} />
      </div>
    </StoreListWrap>
  );
};

export default StoreListPage;
