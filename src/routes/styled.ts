import styled from 'styled-components';

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ContentWrap = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;
