import styled from 'styled-components';

export const CategoryWrap = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 42px;
  grid-row-gap: 20px;
  justify-items: stretch;
  justify-content: center;
  justify-items: center;
`;

export const CategoryItem = styled.div`
  border: 2px solid ${({ theme }) => theme.color.green.light};
  border-radius: 12px;
  width: 120px;
  height: 120px;
  text-align: center;
  justify-self: flex-end;
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px;
  &:nth-child(2n) {
    justify-self: flex-start;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    line-height: 6px;
    color: #0d580d;
    font-weight: 500;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;

export const Fish = styled.div`
  > svg {
    fill: #0188fb;
  }
`;

export const Dish = styled.div`
  > svg {
    fill: #5a9f16;
  }
`;

export const Market = styled.div`
  > svg {
    fill: #d58c05;
  }
`;

export const Veget = styled.div`
  > svg {
    fill: #f5560a;
  }
`;
