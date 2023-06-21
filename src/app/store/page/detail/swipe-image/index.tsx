import React from 'react';
import { 
  ImageWrap, Image,
  Count,
} from './styled';
import store from '../../../../../asset/123.png';

const SwipeImageComponent = () => {
  return (
    <div>
      <ImageWrap>
        <Image imgUrl={store} />
        <Count>4/15</Count>
      </ImageWrap>

      <button>모든 사진보기</button>
    </div>
  )
}

export default SwipeImageComponent;
