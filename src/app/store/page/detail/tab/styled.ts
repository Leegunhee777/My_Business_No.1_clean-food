import styled, { css } from 'styled-components';

export const TabContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid #0000002e;
  display: flex;
`;

export const TabItem = styled.button<{
  isActive: boolean;
}>`
  border: none;
  background-color: transparent;
  flex-grow: 1;
  padding: 20px 0px;

  ${({ isActive }) => {
    if (isActive)
      return css`
        border-bottom: 1px solid red;
      `;
  }}
`;
