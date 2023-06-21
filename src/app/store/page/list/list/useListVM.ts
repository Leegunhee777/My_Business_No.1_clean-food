import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filterAtom, listAtom } from '../state';
import { listUseCase } from '../../../di';
import { homeAtom } from '../../../../home/page/main/state';

export function useListVM() {
  const [listState, setListState] = useRecoilState(listAtom);
  const filterState = useRecoilValue(filterAtom);

  React.useEffect(() => {
    initData();
  }, []);

  async function initData() {
    const response = await listUseCase.getFilterdList(filterState);
    console.log(response);
    setListState(response);
  }

  return {
    listState,
  };
}
