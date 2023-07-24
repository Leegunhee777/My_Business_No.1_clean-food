import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState } from '../context/auth-context-provider';
import { PATH } from '../routes/paths';

interface Props {
  children: ReactNode;
}

const UseAuthPermit = ({ children }: Props) => {
  const navigate = useNavigate();

  const { userInfo } = useAuthState();

  React.useEffect(() => {
    if (!userInfo.username) {
      //replace true로 해줘야 닫았을때 기존에 보고있던 화면을 다시 노출해줄수있다
      navigate(PATH.auth.signIn, { replace: true });
    }
  }, [navigate, userInfo.username]);

  if (!userInfo.username) {
    return null;
  }

  return <>{children}</>;
};

export default UseAuthPermit;
