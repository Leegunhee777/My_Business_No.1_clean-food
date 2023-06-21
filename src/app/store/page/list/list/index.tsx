import React from 'react';
import { useListVM } from './useListVM';
const ListComponent = () => {
  const { listState } = useListVM();
  console.log(listState);
  return (
    <div>
      리스트 컴포넌트
    </div>
  )
}

export default ListComponent;