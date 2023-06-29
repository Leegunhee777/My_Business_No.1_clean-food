import React from 'react';
import FilterComponent from './filter';
import ContentItem from './content-item';

import { HotContentWrap, Title } from './styled';
import { useHotContentVM } from './useHotContentVM';
const HotContentComponent = () => {
  const { hotContentList, filterList, activeFilter, isLoading, filterChange } =
    useHotContentVM();

  return (
    <HotContentWrap>
      <Title>인기 Top5</Title>
      <FilterComponent
        filterList={filterList}
        activeFilter={activeFilter}
        filterChange={filterChange}
      />

      {hotContentList.map((value, index) => {
        return <ContentItem value={value} key={index} />;
      })}
    </HotContentWrap>
  );
};

export default HotContentComponent;
