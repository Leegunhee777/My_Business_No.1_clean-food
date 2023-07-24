import React, { useRef, useState } from 'react';
import ad1 from '../../../../../asset/ad1.png';

import ad2 from '../../../../../asset/ad2.png';

import ad3 from '../../../../../asset/ad3.png';

import ad4 from '../../../../../asset/ad4.png';

export function useAdvertisementVM() {
  const ref = useRef<HTMLDivElement>(null);
  const imageFakeList = [ad1, ad2, ad3, ad4];

  const [imageList, setImageList] = React.useState([
    imageFakeList[imageFakeList?.length - 1],
    ...imageFakeList,
    imageFakeList[0],
  ]);

  const [currentImgIndex, setCurrentImgIndex] = React.useState(1);

  const [touch, setTouch] = useState({
    start: 0,
    end: 0,
  });

  const [style, setStyle] = useState({
    transform: `translateX(calc(-${currentImgIndex}00% + 10px))`,
    transition: `all 0.4s ease-in-out`,
  });

  const nextSlide = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(calc(-${currentImgIndex + 1}00% + 10px))`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const prevSlide = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setStyle({
      transform: `translateX(calc(-${currentImgIndex - 1}00% + 10px))`,
      transition: `all 0.4s ease-in-out`,
    });
  };
  React.useEffect(() => {
    //각각 끝지점에 도달하면, 바로위치를 초기화 시켜버린다.
    //근데 초기화 시켜줄때 티가 나지않도록 순식간에 transition.0ms로 바꿔버린다.
    //근데 0ms로 바뀌는게 티가나지않도록 swipe동작이 끝난시점에 맞춰서!! 싹 바꿔준다.
    //swipe가 tramistion 0.4에의해서 바뀌고있는 도중에
    //갑자기 setTimeout 0ms에의해서 확 초기화 되어버리면안되니까!!!!
    //하지만!!!!swipe 애니메이션의 이동속도가 0.4이다.
    //그렇기 때문에 초기화 해줄때의 스타일의 settimeout은 그것보다 살짝 더 빠른게 좋다 settimeout 350ms 처럼
    //같은 속도이거나 더 느리다면, 초기화될때!!! 그 순간에서야 이미지가 뜨는 어색함을 느끼게 될것이기때문이다.
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imageList.length - 2);
      setTimeout(function () {
        setStyle({
          transform: `translateX(calc(-${imageList.length - 2}00% + 10px))`,
          transition: '0ms',
        });
      }, 350);
    }

    if (currentImgIndex >= imageList?.length - 1) {
      setCurrentImgIndex(1);
      setTimeout(() => {
        setStyle({
          transform: `translateX(calc(-${1}00% + 10px))`,
          transition: '0ms',
        });
      }, 350);
    }
  }, [currentImgIndex, imageList.length]);

  return {
    ref,
    style,
    imageList,
    touch,
    currentImgIndex,
    setTouch,
    setStyle,
    nextSlide,
    prevSlide,
  };
}
