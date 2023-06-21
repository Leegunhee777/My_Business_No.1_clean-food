import styled from "styled-components"

export const ListContainer = styled.div`
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
;
`;

export const ItemContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid green;
  padding: 8px;
  height: 120px;
  display: flex;
`;

interface ItemImagePoprs {
  imgUrl: string;
}

export const ItemImageWrap = styled.div`
  width: 100px;
`;

export const ItemImage = styled.div<ItemImagePoprs>`
   width: 100%;
   padding-top: 92.3%;
   border-radius: 24px;
   margin: 0 auto;
   background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
   background-size: cover;
`;


export const ContentWrap = styled.div`
  //가변으로 텍스트 길이를 노출시키고 싶으니 고정이미지값을 뺴주는 식으로 ㄱㄱ 
  width: calc(100% - 100px);
`;

export const Title = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden ;
  text-overflow: ellipsis;
`;

export const Rating = styled.span`
`;

export const Desc = styled.span`
  display: block;
  overflow: hidden ;
  border: 2px solid red;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Location = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden ;
  text-overflow: ellipsis;
`;


//아래는 반응형 반들때 이미지
// export const ItemImageWrap = styled.div`
//   width: 100%;
// `;

// export const ItemImage = styled.div<{
//   imgUrl: string;
// }>`
//   width: 100%;
//   padding-top: 53.428%;
//   border-radius: 24px;
//   margin: 0 auto;
//   background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
//   background-size: cover;
// `;
