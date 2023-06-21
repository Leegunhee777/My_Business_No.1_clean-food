import styled from "styled-components";

export const AdConatiner = styled.div`
  display: flex;
  overflow: hidden;


  //script도 처리안하고 css를 이용해볼수도있음
  //overflow: scroll; 
  //아래는 스크롤바를 삭제해주기위한 용도
  //&::-webkit-scrollbar {
  //display: none;
  //-ms-overflow-style: none; /* 인터넷 익스플로러 */
  //scrollbar-width: none; 
  //}
`;

export const ImageWrap = styled.div`
  width: 100%;
  min-width: 300px;
  & + & {
    margin-left: 8px;
  }
`;

export const ImageItem = styled.div<{
  imgUrl: string;
}>`
  width: 100%;
  padding-top: 53.428%;
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