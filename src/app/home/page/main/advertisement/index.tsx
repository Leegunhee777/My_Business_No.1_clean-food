import React from 'react';
import { useAdvertisementVM } from './useAdvertisementVM';
import image from '../../../../../asset/123.png';
import {
  AdConatiner,
  ImageWrap,
  ImageItem,
} from './styled';


const AdvertisementComponent = () => {
  const {advertiseWrapDom }  = useAdvertisementVM();
  const imageList = [
    image,
    image,
    image,
    image,
    image,
  ]
  return (
    <AdConatiner ref={advertiseWrapDom} >
      {imageList.map((value, index)=> (
          <ImageWrap key={index} className='imageItem' >
            <ImageItem imgUrl={value}/>
          </ImageWrap>
        ))}
    </AdConatiner>
  )
}

export default AdvertisementComponent;