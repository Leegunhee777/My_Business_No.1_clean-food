import styled from 'styled-components';
export const ContentItemWrap = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  height: 92px;
  position: relative;
  & + & {
    margin-top: 14px;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    margin: 0 auto;
    top: calc(-6px);
    height: 1px;
    background-color: rgb(179 178 178 / 18%);
  }
`;

export const ImageWrap = styled.div`
  width: 92px;
`;

export const ImageItem = styled.div<{
  imgUrl: string;
}>`
  width: 100%;
  padding-top: 100%;
  border-radius: 24px;
  margin: 0 auto;
  background: url(${({ imgUrl }) => imgUrl}) center center no-repeat;
  background-size: cover;
`;

export const DescWrap = styled.div`
  padding: 4px 10px;
  flex-grow: 1;
`;

export const Title = styled.div`
  color: #505050bd;
  font-weight: 500;
`;
export const Rate = styled.div`
  display: flex;
  justify-content: flex-end;

  > svg {
    width: 12px;
    fill: #e9de23;
    margin-right: 4px;
  }
  > span {
    font-size: 14px;
    color: #00000099;
  }
`;

export const Review = styled.p`
  font-size: 12px;
  color: #00000099;
  text-align: end;
`;
