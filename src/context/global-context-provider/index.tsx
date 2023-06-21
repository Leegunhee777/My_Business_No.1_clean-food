import React, { ReactNode, useContext, useReducer } from 'react';

import { NavBarType, navBarInitState, navBarReducer } from './nav-reducer';

//State
type ContextStateType = {
  navBarState: NavBarType;
};
const ContextState = React.createContext<ContextStateType | null>(null);

//Dispatch
export type ActionType = { type?: string; payload?: any };
type ContextDispatchType = {
  navBarDispatch: React.Dispatch<ActionType>;
};
const ContextDispatch = React.createContext<ContextDispatchType | null>(null);

interface Props {
  children: ReactNode;
}
export const GlobalContextProvider = ({ children }: Props) => {
  const [navBarState, navBarDispatch] = useReducer(
    navBarReducer,
    navBarInitState
  );
  //다른 리듀서가 추가되면 여기에 똑같이 선언해주면된다.
  return (
    <ContextState.Provider value={{ navBarState }}>
      <ContextDispatch.Provider value={{ navBarDispatch }}>
        {children}
      </ContextDispatch.Provider>
    </ContextState.Provider>
  );
};

export const useState = () => {
  const state = useContext(ContextState);
  if (!state) throw new Error('cannot find state');
  return state;
};

export const useDispatch = () => {
  const dispatch = useContext(ContextDispatch);
  if (!dispatch) throw new Error('cannot find Dispatch');
  return dispatch;
};
