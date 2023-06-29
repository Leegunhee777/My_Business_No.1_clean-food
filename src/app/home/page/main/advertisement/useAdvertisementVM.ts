import React from 'react';

export function useAdvertisementVM() {
  const advertiseWrapDom = React.useRef<HTMLDivElement>(null);

  const [swipePosition, setSwipePosition] = React.useState({
    initX: 0,
    movedX: 0,
  });

  React.useEffect(() => {
    const imageList = document.querySelectorAll('.imageItem');
    imageList.forEach(item => {
      const itemDom = item as HTMLDivElement;

      itemDom.style.transform = `translateX(${swipePosition.movedX}px)`;
    });
  }, [swipePosition.movedX]);

  React.useEffect(() => {
    if (advertiseWrapDom.current) {
      // advertiseWrapDom.current.style.backgroundColor='green';

      advertiseWrapDom.current.addEventListener('touchstart', (e: any) => {
        console.log('touch 시작!');
        setSwipePosition(prev => ({
          ...prev,
          initX: e.targetTouches[0].clientX,
        }));
      });

      advertiseWrapDom.current.addEventListener('touchend', (e: any) => {
        setSwipePosition(prev => ({
          ...prev,
          initX: 0,
          movedX: prev.movedX,
        }));
      });
    }
  }, []);

  React.useEffect(() => {
    if (advertiseWrapDom.current) {
      advertiseWrapDom.current.addEventListener('touchmove', (e: any) => {
        const offset = -swipePosition.initX + e.targetTouches[0].clientX;

        console.log(swipePosition.movedX + offset, 'offset');

        setSwipePosition(prev => ({
          ...prev,
          movedX: swipePosition.movedX + offset,
        }));
      });
    }
  }, [swipePosition.initX]);

  return {
    advertiseWrapDom,
  };
}
