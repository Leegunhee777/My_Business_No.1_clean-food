import styled from 'styled-components';

export const AdConatiner = styled.div`
  display: flex;
  overflow: hidden;
  padding: 20px 0px;
`;

export const ImageWrap = styled.div`
  min-width: 92%;
  padding: 0px 2px;
`;

export const ImageItem = styled.div<{
  imgUrl: string;
}>`
  width: 100%;
  padding-top: 46%;
  border-radius: 24px;
  margin: 0 auto;
  background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
  background-size: cover;
`;

interface Props {
  width: number;
  height: number;
  imgUrl: string;
}

export const BGWrap = styled.div<Props>`
  width: 100%;
  padding-top: ${({ width, height }) => `${(height / width) * 100}%`};
  border-top: none;
  border-bottom: none;
  box-sizing: border-box;
  background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
  background-size: cover;
  position: relative;
`;

export const CleanSignUpBtn = styled.button`
  border: none;
  box-sizing: border-box;
  background: transparent;
  position: absolute;
  width: 78.31%;
  top: 35.8%;
  left: 10.845%;
  height: 2.8%;
`;
