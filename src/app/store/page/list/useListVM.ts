import React from 'react';

export const useListVM = () => {
  const [isLocationOpen, setIsLocationOpen] = React.useState(false);

  const [selectedLocation, setSelectedLocation] = React.useState<{
    wideLocation: string;
    narrowLocation: string;
  }>({
    wideLocation: '',
    narrowLocation: '',
  });

  const openLocationHandler = () => {
    setIsLocationOpen(prev => !prev);
  };

  const [tempWideLocaiton, setTempWideLoction] = React.useState('');

  const changeTempWideLocation = (wideLocation: string) => {
    if (wideLocation === '') {
      setSelectedLocation({
        wideLocation: '',
        narrowLocation: '',
      });
      openLocationHandler();
    }

    setTempWideLoction(wideLocation);
  };

  const changeSelectedLocation = (
    narrowLocation: string,
    e: React.MouseEvent<HTMLElement>
  ) => {
    const target = e.target as HTMLElement;

    setSelectedLocation(prev => ({
      ...prev,
      wideLocation: tempWideLocaiton,
      [target.id]: narrowLocation,
    }));

    openLocationHandler();
  };

  return {
    isLocationOpen,
    openLocationHandler,
    tempWideLocaiton,
    changeTempWideLocation,
    selectedLocation,
    changeSelectedLocation,
  };
};
