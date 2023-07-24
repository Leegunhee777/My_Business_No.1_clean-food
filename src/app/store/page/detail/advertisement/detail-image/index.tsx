import { DetailImageWrap, CancelWrap, ImageWrap, ImageItem } from './styeld';

interface Props {
  openDetailImgScreen: {
    openStatus: boolean;
    isOpenHistory: boolean;
  };

  closeDetailScreen: () => void;
  data: {
    value: string;
    color: string;
    img: string;
  }[];
}
const DetailImageComponent = ({
  openDetailImgScreen,
  closeDetailScreen,
  data,
}: Props) => {
  return (
    <DetailImageWrap openDetailImgScreen={openDetailImgScreen}>
      <CancelWrap onClick={closeDetailScreen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </CancelWrap>
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        {data.map((value, index) => (
          <ImageWrap key={index}>
            <ImageItem imgUrl={value.img} />
          </ImageWrap>
        ))}
      </div>
    </DetailImageWrap>
  );
};

export default DetailImageComponent;
