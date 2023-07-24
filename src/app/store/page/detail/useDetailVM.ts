import React from 'react';

export const useDetailVM = () => {
  const [activeTab, setActiveTab] = React.useState('MENU');

  const clickTabValue = (value: string) => {
    setActiveTab(value);
  };

  return { activeTab, clickTabValue };
};
