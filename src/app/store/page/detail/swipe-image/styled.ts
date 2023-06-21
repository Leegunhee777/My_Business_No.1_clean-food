import styled from "styled-components";


export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
`;

interface ItemImagePoprs {
  imgUrl: string;
}

export const Image = styled.div<ItemImagePoprs>`
   width: 100%;
   padding-top: 52.77%; // 높이/너비
   border-radius: 24px;
   margin: 0 auto;
   background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
   background-size: cover;
`;

export const Count = styled.span`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
