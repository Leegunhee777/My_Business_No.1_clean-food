import React from 'react';
import { useAdvertisementVM } from './useAdvertisementVM';

import { AdConatiner, ImageWrap, ImageItem } from './styled';

const AdvertisementComponent = () => {
  const {
    ref,
    style,
    imageList,
    touch,
    currentImgIndex,
    setTouch,
    setStyle,
    prevSlide,
    nextSlide,
  } = useAdvertisementVM();

  return (
    <div>
      <AdConatiner
        onTouchStart={e => {
          //e.touches[0].pageX를 통해 터치시 화면에 보이는 x좌표를 구할수있음
          setTouch({
            ...touch,
            start: e.touches[0].pageX,
          });
        }}
        onTouchMove={e => {
          if (ref?.current) {
            const currentPosition =
              -(ref.current.clientWidth * currentImgIndex) + 10;
            const result =
              currentPosition + (e.targetTouches[0].pageX - touch.start);

            setStyle({
              transform: `translate3d(${result}px , 0px ,0px)`,
              transition: '0ms',
            });
          }
        }}
        onTouchEnd={e => {
          const end = e.changedTouches[0].pageX;
          if (touch.start > end) {
            nextSlide();
          } else if (touch.start < end) {
            prevSlide();
          }

          setTouch({
            ...touch,
            end,
          });
        }}
      >
        {imageList.map((value, index) => (
          <ImageWrap style={style} ref={ref} key={index} className="imageItem">
            <ImageItem imgUrl={value} />
          </ImageWrap>
        ))}
      </AdConatiner>
      <button onClick={prevSlide}>이전</button>
      <button onClick={nextSlide}>이후</button>
    </div>
  );
};

export default AdvertisementComponent;
