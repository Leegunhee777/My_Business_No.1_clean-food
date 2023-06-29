import { FilterWrap, Chip } from './styled';

interface Props {
  filterList: string[];
  activeFilter: string;
  filterChange: (filterType: string) => void;
}
const FilterComponent = ({ filterList, activeFilter, filterChange }: Props) => {
  return (
    <FilterWrap>
      {filterList.map(value => (
        <Chip
          key={value}
          activeFilter={activeFilter}
          type={value}
          onClick={filterChange.bind(null, value)}
        >
          {value}
        </Chip>
      ))}
    </FilterWrap>
  );
};

export default FilterComponent;
