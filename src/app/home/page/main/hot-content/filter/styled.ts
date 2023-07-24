import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

interface ChipProps {
  type: string;
  activeFilter: string;
}
export const Chip = styled.div<ChipProps>`
  display: inline-block;
  padding: 6px 10px;

  background-color: ${({ type, activeFilter }) =>
    matchColor(type, activeFilter)};
  border-radius: 24px;
  color: white;
`;

function matchColor(type: string, activeFilter: string) {
  switch (type) {
    case '반찬가게':
      return `rgb(90, 159, 22, ${activeFilter === '반찬가게' ? 1 : 0.3})`;

    case '재래시장':
      return `rgb(213, 140, 5, ${activeFilter === '재래시장' ? 1 : 0.3})`;

    case '전국농산물':
      return `rgb(241, 111, 48, ${activeFilter === '전국농산물' ? 1 : 0.3})`;

    case '전국수산물':
      return `rgb(1, 136, 251, ${activeFilter === '전국수산물' ? 1 : 0.3})`;
  }
}
