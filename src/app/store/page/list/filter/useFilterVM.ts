import React from 'react';
import { useRecoilState } from 'recoil';
import { filterAtom } from '../state';

export function useFilterVM() {
  
  const [filterState, setFilterState] =  useRecoilState(filterAtom);
  //active한 필터값

  //필터 변경 메소드



  return {
    
  }
}