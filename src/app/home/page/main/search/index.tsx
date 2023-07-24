import { useSearchVM } from './useSearchVM';
import { SearchWrap, SearchInput } from './styled';

const SearchComponent = () => {
  const { searchInput, onChangeInput } = useSearchVM();
  return (
    <SearchWrap>
      <SearchInput
        value={searchInput}
        onChange={onChangeInput}
        placeholder="키워드를 입력해보세요!"
      />
    </SearchWrap>
  );
};

export default SearchComponent;
