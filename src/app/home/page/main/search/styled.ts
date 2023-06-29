import styled from 'styled-components';
import { theme } from '../../../../../style/theme';

export const SearchWrap = styled.div`
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eaeaea;
  background-color: rgb(238 199 83 / 12%);
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 42px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 24px;
  padding: 0 20px;
  border: 2px solid ${({ theme }) => theme.color.green.main};
  box-shadow: rgb(0 0 0 / 15%) 0px 10px 20px;
  ::-webkit-input-placeholder {
    text-align: center;
    color: ${({ theme }) => theme.color.gray.dark};
  }
`;
