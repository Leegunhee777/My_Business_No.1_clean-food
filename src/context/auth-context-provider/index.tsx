import React, {
  createRef,
  ReactNode,
  useContext,
  useImperativeHandle,
  useReducer,
} from 'react';

import { AuthType, authInitState, authReducer } from './auth-reducer';

import { authUseCase } from '../../app/auth/di';

const ContextState = React.createContext<AuthType | null>(null);

export type ActionType = { type?: string; payload?: any };

const ContextDispatch = React.createContext<React.Dispatch<ActionType> | null>(
  null
);

interface Props {
  children: ReactNode;
}

const csrfRef = createRef();
const jwtTokenRef = createRef();

export const AuthContextProvider = ({ children }: Props) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);

  useImperativeHandle(csrfRef, () => authState.csrfToken);
  useImperativeHandle(jwtTokenRef, () =>
    authState.userInfo ? authState.userInfo.token : undefined
  );

  React.useEffect(() => {
    initCsrf();
  }, []);

  React.useEffect(() => {
    if (authState.csrfToken) {
      initUserInfo();
    }
  }, [authState.csrfToken]);

  async function initCsrf() {
    try {
      const res = await authUseCase.initCsrfToken();
      authDispatch({ type: 'UPDATE_CSRF_TOKEN', payload: res.csrfToken });
    } catch (error) {
      console.log(error);
    }
  }

  async function initUserInfo() {
    try {
      const userInfores = await authUseCase.initUserInfo();
      authDispatch({ type: 'UPDATE_USER_INFO', payload: userInfores });
    } catch (error) {
      console.log(error);
    }
  }
  //이런식으로 처리하면 존재하지 않는 경로는 싹다 SignInScreen로 보내줄있음
  // if (!authState.user ) {
  //   console.log('뻄!')
  //   return (
  //     <div>
  //       <SignInScreen />
  //     </div>
  //   )
  // }
  return (
    <ContextState.Provider value={authState}>
      <ContextDispatch.Provider value={authDispatch}>
        {children}
      </ContextDispatch.Provider>
    </ContextState.Provider>
  );
};

export const getCsrfToken = () => csrfRef.current;
export const getJwtToken = () => jwtTokenRef.current;

export const useAuthState = () => {
  const state = useContext(ContextState);
  if (!state) throw new Error('cannot find state');
  return state;
};

export const useAuthDispatch = () => {
  const dispatch = useContext(ContextDispatch);
  if (!dispatch) throw new Error('cannot find Dispatch');
  return dispatch;
};
