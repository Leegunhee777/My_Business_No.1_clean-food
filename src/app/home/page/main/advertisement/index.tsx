import React from 'react';
import { useAdvertisementVM } from './useAdvertisementVM';

import ad1 from '../../../../../asset/ad1.png';

import ad2 from '../../../../../asset/ad2.png';

import ad3 from '../../../../../asset/ad3.png';

import ad4 from '../../../../../asset/ad4.png';

import { AdConatiner, ImageWrap, ImageItem } from './styled';

const AdvertisementComponent = () => {
  const { advertiseWrapDom } = useAdvertisementVM();
  const imageList = [ad1, ad2, ad3, ad4];
  return (
    <AdConatiner ref={advertiseWrapDom}>
      {imageList.map((value, index) => (
        <ImageWrap key={index} className="imageItem">
          <ImageItem imgUrl={value} />
        </ImageWrap>
      ))}
    </AdConatiner>
  );
};

export default AdvertisementComponent;
