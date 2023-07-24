import styled, { css } from 'styled-components';

export const LocationFilterWrap = styled.div``;

export const FilterLocationOpenBtn = styled.div`
  display: inline-flex;
  align-items: center;
  line-height: 0px;
`;

interface SVGProps {
  widerLocationOpen: boolean;
}

export const SVGWrap = styled.div<SVGProps>`
  padding: 12px;
  > svg {
    transition: all ease 0.15s;

    ${({ widerLocationOpen }) =>
      widerLocationOpen &&
      css`
        transform: rotate(90deg);
      `}
  }
`;

export const SelectedLocaiton = styled.span``;

export const WiderLocationWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid rgba(128, 128, 128, 0.23);
  border-left: 1px solid rgba(128, 128, 128, 0.23);
  align-self: flex-start;
  background-color: rgb(224 224 224 / 23%);
`;

export const WiderLocation = styled.div<{ isActive: boolean }>`
  border-right: 1px solid rgba(128, 128, 128, 0.23);
  border-bottom: 1px solid rgba(128, 128, 128, 0.23);
  padding: 6px 20px;
  flex-grow: 1;
  text-align: center;
  color: rgb(0 0 0 / 78%);

  height: 20px;
  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.color.green.light};
      color: ${theme.color.green.main};
    `}
`;

export const NarrowLocationWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-content: start;
  border-left: 1px solid #0000002b;
`;

export const NarrowLocation = styled.div<{ isActive: boolean }>`
  padding: 8px 10px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 20px;
  border-right: 1px solid #0000002b;
  border-bottom: 1px solid #0000002b;
  color: rgba(0, 0, 0, 0.49);

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.color.green.light};
      color: ${theme.color.green.main};
    `}
`;
