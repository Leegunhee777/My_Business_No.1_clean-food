import React from 'react';
import { useNavigate } from 'react-router-dom';

export function useFooterBar() {
  const navigate = useNavigate();
  const historyStack = window.history;

  const nonExposedList = ['/auth/sign-in'];
  const isNonExposed = nonExposedList.includes(window.location.pathname);

  React.useEffect(() => {
    //홈화면인데, idx가 0보다 큰경우는 이질적인 경우다
    //홈화면이면 idx가 0이여야 이전을 눌렀을때 엉뚱한 화면으로 가는게아니라
    //앱이 닫히기떄문에, -qwe.state.idx를 해준다.
    if (window.location.pathname === '/' && historyStack.state.idx > 0) {
      //히스토리 없는 초기시점으로 이동할수있음
      navigate(-historyStack.state.idx);
    }
  }, []);

  return { isNonExposed, navigate };
}
