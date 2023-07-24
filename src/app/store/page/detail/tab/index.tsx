import React, { useRef } from 'react';
import { TabContainer, TabItem } from './styled';

interface Props {
  clickTabValue: (value: string) => void;
  activeTab: string;
}
const TabComponent = ({ clickTabValue, activeTab }: Props) => {
  const tabList = [
    {
      value: 'MENU',
      label: '메뉴',
    },
    {
      value: 'REVIEW',
      label: '후기',
    },
    {
      value: 'COBUY',
      label: '공동신청',
    },
  ];

  return (
    <TabContainer>
      {tabList?.map((value, index) => (
        <TabItem
          key={index}
          onClick={clickTabValue.bind(null, value.value)}
          isActive={activeTab === value.value}
        >
          {value.label}
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default TabComponent;
