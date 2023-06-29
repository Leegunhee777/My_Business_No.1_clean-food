import React from 'react';
import { SearchWrap, SearchInput } from './styled';
import { useSearchVM } from './useSearchVM';
const SearchComponent = () => {
  const { inputValue, onChangeInput } = useSearchVM();
  return (
    <SearchWrap>
      <SearchInput
        value={inputValue}
        onChange={onChangeInput}
        placeholder="키워드를 입력해보세요!"
      ></SearchInput>
    </SearchWrap>
  );
};

export default SearchComponent;
