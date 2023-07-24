import styled from 'styled-components';

export const InfiniteSwipeWrap = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

export const Item = styled.div`
  flex: none;
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  transition: all 0.4s;
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

export const CountWrap = styled.div`
  color: white;
  background-color: black;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 4px 14px;
  font-size: 12px;
`;
