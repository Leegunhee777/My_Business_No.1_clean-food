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
      navigate(PATH.auth.signIn);
    }
  }, [navigate, userInfo.username]);

  if (!userInfo.username) {
    return null;
  }

  return <>{children}</>;
};

export default UseAuthPermit;
