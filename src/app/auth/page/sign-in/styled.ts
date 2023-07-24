import styled from 'styled-components';
import { mobileContentWrapper } from '../../../../style/theme';

export const Container = styled.div`
  ${mobileContentWrapper}
  background-color: ${({ theme }) => theme.color.green.main};
  height: 100%;
`;
