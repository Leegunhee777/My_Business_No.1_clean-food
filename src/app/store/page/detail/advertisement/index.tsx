import DetailImageComponent from './detail-image';
import { InfiniteSwipeWrap, ImageItem, Item, CountWrap } from './styled';
import { useAdvertisementVM } from './useAdvertisementVM';

const InfiniteSwipeComponent = () => {
  const {
    currentImgIndex,
    imageList,
    ref,
    style,
    openDetailImgScreen,
    clickImage,
    closeDetailScreen,
    prevSlide,
    nextSlide,
    data,
  } = useAdvertisementVM();
  return (
    <div>
      <InfiniteSwipeWrap onTouchStart={clickImage}>
        {imageList?.map((value, index) => {
          return (
            <Item ref={ref} style={style} key={index}>
              <ImageItem imgUrl={value.img} />
            </Item>
          );
        })}
        <CountWrap>
          {currentImgIndex} / {imageList.length - 2}
        </CountWrap>
      </InfiniteSwipeWrap>

      <DetailImageComponent
        data={data}
        openDetailImgScreen={openDetailImgScreen}
        closeDetailScreen={closeDetailScreen}
      />
    </div>
  );
};

export default InfiniteSwipeComponent;
