import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-top: 1px solid #eaeaea;
  box-sizing: border-box;
  background-color: white;

  .content {
    max-width: 1200px;
    padding: 12px 24px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const iconSize = css`
  width: 32px;
  height: 32px;
`;

export const HomeIconWrap = styled.div`
  ${iconSize}
  > svg {
    width: 100%;
    height: 100%;
    /* fill: white;
    stroke: black;
    stroke-width: 10; */
  }
`;

export const BucketIconWrap = styled.div`
  ${iconSize}
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const StoreIconWrap = styled.div`
  ${iconSize}
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const FavorIconWrap = styled.div`
  ${iconSize}
  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const GroupIconWrap = styled.div`
  width: 36px;
  height: 36px;
  > svg {
    width: 100%;
    height: 100%;
  }
`;
