import styled, { css, keyframes } from 'styled-components';

const openAnimation = keyframes`
    0% {
    transform: translateY(100%);

    }
    100% {
    transform: translateY(0px);

    }
`;

const closeAnimation = keyframes`
    0% {
    transform: translateY(0px);
    visibility: visible;
    }
    100% {
      transform: translateY(100%);
      visibility: hidden;
    }
`;

interface Props {
  openDetailImgScreen: {
    openStatus: boolean;
    isOpenHistory: boolean;
  };
}
export const DetailImageWrap = styled.div<Props>`
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: none;
  ${({ openDetailImgScreen }) => {
    if (openDetailImgScreen.openStatus && openDetailImgScreen.isOpenHistory) {
      return css`
        visibility: visible;
        display: block;

        animation: ${openAnimation} 0.18s linear;
      `;
      //openSortFilter.isOpenHistory 없으면
      //처음 페이지 진입시 openStatus값이 false여서
      //closeAnimation이 발동함
      //모달은 연 후의 닫는 상황이 아닌데도,
      //그냥 처음진입상황에서 모달 닫는 animation이 발동하는거임
      //그래서 처음 진입과 모달연후 닫는상황을 구분하기위해서
      //isOpenHistory를 쓰는것임
    } else if (
      !openDetailImgScreen.openStatus &&
      openDetailImgScreen.isOpenHistory
    ) {
      return css`
        display: block;
        visibility: hidden;
        animation: ${closeAnimation} 0.18s linear;
      `;
    }
  }}
`;

export const CancelWrap = styled.div`
  padding: 10px 4px;
  height: 36px;
  width: 36px;
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrap = styled.div`
  height: 300px;
  width: 100%;
`;

export const ImageItem = styled.div<{
  imgUrl: string;
}>`
  width: 100%;
  padding-top: 60%;
  margin: 0 auto;
  background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
  background-size: cover;
`;
