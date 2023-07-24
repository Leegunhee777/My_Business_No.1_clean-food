import React from 'react';
import { DescriptionWrap } from './styled';
const DescriptionComponent = () => {
  return (
    <DescriptionWrap>
      <h3>순이네 치킨집</h3>
      <p>우리는 이런것들을 정말로 전무적으로 하는집니에요</p>
      <p>위치: 서울시 이태원동</p>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>문의:01-1239-0123</p>
        <p> rate:4.5</p>
      </div>
    </DescriptionWrap>
  );
};

export default DescriptionComponent;
