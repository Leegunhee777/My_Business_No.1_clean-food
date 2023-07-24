import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../../../../../style/theme';

interface Props {
  openSortFilter: {
    openStatus: boolean;
    isOpenHistory: boolean;
  };
}

const openAnimation = keyframes`
    0% {
    transform: translateY(100px);
    visibility: hidden
    }
    100% {
    transform: translateY(0px);
    visibility: visible;
    }
`;

const closeAnimation = keyframes`
    0% {
    transform: translateY(0px);
    visibility: visible;
    }
    100% {
    transform: translateY(100px);
        visibility: hidden;
    }
`;
export const SortFilterWrap = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 2;
  display: none;
  ${({ openSortFilter }) => {
    if (openSortFilter.openStatus && openSortFilter.isOpenHistory) {
      return css`
        visibility: visible;
        display: block;
        > div {
          animation: ${openAnimation} 0.1s linear;
        }
      `;
      //openSortFilter.isOpenHistory 없으면
      //처음 페이지 진입시 openStatus값이 false여서
      //closeAnimation이 발동함
      //모달은 연 후의 닫는 상황이 아닌데도,
      //그냥 처음진입상황에서 모달 닫는 animation이 발동하는거임
      //그래서 처음 진입과 모달연후 닫는상황을 구분하기위해서
      //isOpenHistory를 쓰는것임
    } else if (!openSortFilter.openStatus && openSortFilter.isOpenHistory) {
      return css`
        visibility: hidden;
        display: block;
        > div {
          animation: ${closeAnimation} 0.1s linear;
        }
      `;
    }
  }}
`;

export const SortContentWrap = styled.div``;

export const FilterWrap = styled.div`
  padding: 16px 20px;
`;

export const FilterTitle = styled.h4`
  text-align: center;
  line-height: 0;
`;

export const FilterItem = styled.div<{
  isActive: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  > span {
    color: #0000009e;
  }
  > div {
    display: none;
  }
  ${({ theme, isActive }) => {
    if (isActive)
      return css`
        span {
          color: ${theme.color.green.dark};
          font-weight: 500;
        }
        > div {
          display: block;
        }
      `;
  }}
`;

export const SvgWrap = styled.div`
  height: 20px;
  width: 20px;

  > svg {
    width: 100%;
    height: 100%;
    fill: ${theme.color.green.main};
  }
`;

export const FilterCloseBth = styled.button`
  padding: 20px;
  color: #0000009e;
  border: 1px solid #00000021;
  text-align: center;
  background-color: white;
`;
