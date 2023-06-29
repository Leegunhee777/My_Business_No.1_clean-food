import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import { searchAtom } from '../state';
export function useSearchVM() {
  const [searchAtomState, setSearchAtomState] = useRecoilState(searchAtom);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchAtomState(prev => ({
      ...prev,
      inputText: value,
    }));
  };

  return {
    onChangeInput,
    inputValue: searchAtomState.inputText,
  };
}
