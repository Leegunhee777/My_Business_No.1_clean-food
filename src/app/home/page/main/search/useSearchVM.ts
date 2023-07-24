import React from 'react';
import { ChangeEvent } from 'react';

export function useSearchVM() {
  const [searchInput, setSearchInput] = React.useState('');

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
  };

  return {
    onChangeInput,
    searchInput,
  };
}
