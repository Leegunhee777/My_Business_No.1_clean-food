import styled, { css } from 'styled-components';

export const TopBarWrapper = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 2;
  width: 100%;

  > div {
    margin: 0 auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    box-sizing: border-box;
  }
`;

//box sizing border-box로 하고 width 1260하고 padding 좌우60px
export const ButtonWrap = styled.div`
  cursor: pointer;
  display: block;
  margin-right: 20px;

  svg {
    path {
      fill: gray;
    }
  }
  @media (min-width: 1651px) {
    display: none;
  }
`;

export const LinkWrap = styled.div`
  a {
    text-decoration: none;
    margin-right: 6px;
    color: #979799;
  }

  a:hover {
    color: green;
  }

  a + a::before {
    content: '|';
    margin-right: 6px;
  }
`;

export const MoreIconWrap = styled.div`
  width: 24px;
  height: 24px;
  > svg {
    width: 100%;
    height: 100%;
    color: red;
    path {
      fill: gray;
    }
  }
`;
const iconSize = css`
  width: 24px;
  height: 24px;
`;
export const UserWrap = styled.div`
  ${iconSize}

  > svg {
    width: 100%;
    height: 100%;

    /* fill: white;
    stroke: black;
    stroke-width: 10; */
  }
`;
