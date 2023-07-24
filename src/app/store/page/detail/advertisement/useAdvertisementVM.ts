import { useEffect, useRef, useState } from 'react';
import detail1 from '../../../../../asset/detail1.png';
import detail2 from '../../../../../asset/detail2.png';
import detail3 from '../../../../../asset/detail3.png';
import detail4 from '../../../../../asset/detail4.png';
import { parse, stringify } from '../../../../../utils/parse-stringify';
import { useLocation, useNavigate } from 'react-router-dom';

const data = [
  {
    value: '1',
    color: 'red',
    img: detail1,
  },
  {
    value: '2',
    color: 'blue',
    img: detail2,
  },
  {
    value: '3',
    color: 'orange',
    img: detail3,
  },
  {
    value: '4',
    color: 'yellow',
    img: detail4,
  },
];

export const useAdvertisementVM = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  const [imageList] = useState([data[data?.length - 1], ...data, data[0]]);

  const [currentImgIndex, setCurrentImgIndex] = useState(1);

  const [style, setStyle] = useState<{
    transform: string;
    transition?: string;
  }>({
    transform: `translateX(calc(-${currentImgIndex}00% ))`,
  });

  const [openDetailImgScreen, setOpenDetailImgScreen] = useState({
    openStatus: false,
    isOpenHistory: false,
  });

  useEffect(() => {
    const { detail } = parse(location.search);
    if (detail) {
      setOpenDetailImgScreen({
        openStatus: true,
        isOpenHistory: true,
      });
    } else {
      setOpenDetailImgScreen(prev => ({
        ...prev,
        openStatus: false,
      }));
    }
  }, [location.search]);

  //replace true 옵션을 주면 history에 안쌓이는 navigate가 실행되기떄문에,
  //이전을 누르면 navigate함수발동 이전의 path로 바뀐다.
  //여기에 만약 replace true를 한다면, 이전버튼을 눌렀을때 팝업이 닫히는게아니라
  //홈화면으로 돌아가게될것이다.
  const clickImage = () => {
    return navigate({
      search: stringify({
        detail: true,
      }),
    });
  };

  const closeDetailScreen = () => {
    return navigate(-1);
  };

  const nextSlide = () => {
    setCurrentImgIndex(currentImgIndex + 1);

    if (currentImgIndex + 1 < imageList.length - 1) {
      setStyle({
        transform: `translateX(calc(-${currentImgIndex + 1}00% ))`,
      });
    } else {
      setCurrentImgIndex(1);
      //개빠르게 0위치고 옮겨놓고
      setStyle({
        transform: `translateX(0)`,
        transition: `all 0s`,
      });
      //거기서 그다음!!!swipe발동
      setTimeout(function () {
        setStyle({
          transform: `translateX(calc(-100%))`,
          transition: `all 0.4s`,
        });
      }, 0);
    }
  };

  const prevSlide = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    //정상
    if (currentImgIndex - 1 > 0) {
      setStyle({
        transform: `translateX(calc(-${currentImgIndex - 1}00% ))`,
      });
      //currentImageIndex가 1에서 0 으로 넘어가려할때 처리로직
    } else {
      setCurrentImgIndex(imageList.length - 2);
      //위치미리바꿔놓고!
      setStyle({
        transform: `translateX(calc(-${imageList.length - 1}00%)`,
        transition: `all 0s`,
      });
      //바꾼위치에서 스와이프적용
      setTimeout(function () {
        setStyle({
          transform: `translateX(calc(-${imageList.length - 2}00% ))`,
          transition: `all 0.4s`,
        });
      }, 0);
    }
  };
  useEffect(() => {
    const qwe = setInterval(() => {
      console.log(1);
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(qwe);
    };
  }, [currentImgIndex]);

  return {
    currentImgIndex,
    imageList,
    prevSlide,
    nextSlide,
    ref,
    style,
    data,
    openDetailImgScreen,
    clickImage,
    closeDetailScreen,
  };
};
