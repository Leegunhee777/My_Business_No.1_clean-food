import { ActionType } from '.';

export type NavBarType = {
  isOpen: boolean;
  validPath: boolean;
};

const navBarInitState = {
  isOpen: false,
  validPath: false,
};

const navBarReducer = (state: NavBarType, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_OPEN_STATUS':
      return {
        ...state,
        isOpen: action.payload,
      };
    case 'CHANGE_PATH_VALIDATEION':
      return {
        ...state,
        validPath: !state.validPath,
      };
    default:
      throw new Error();
  }
};

export { navBarInitState, navBarReducer };

// 해당 nav-reducers는 global-context-provider에서 사용된다

// import { useState, useDispatch } from '../../../Context/GlobalContextProvider';
// const {navBarState} = useState();

// const { navBarDispatch } = useDispatch();

// const closeNavBar = (e: any) =>{
//   navBarDispatch({type:'CHANGE_OPEN_STATUS', payload: false})
// }
