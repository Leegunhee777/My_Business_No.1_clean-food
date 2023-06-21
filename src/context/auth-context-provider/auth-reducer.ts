import { ActionType } from './index'

export type AuthType = {
    //userInfo의 토큰은, 서버에 의해 자동으로 쿠키에 박혀있는 토큰이므로 실질적으르 web에서 큰의미 없다. 모바일용이다.
    //token의 decoded에는 user의 db상의 고유 id가 들어있다.
    userInfo: {
      token: string;
      username: string;
    };
    //메모리에 두는 1차 검증용
    csrfToken: string;
}

const authInitState = {
  userInfo: {
    token: '',
    username: '',
  },
  csrfToken: ''
}

const authReducer = (state: AuthType, action: ActionType) => {
  switch(action.type){
    case "UPDATE_USER_INFO":
      return {
        ...state,
        userInfo : action.payload
      }
      
    case "UPDATE_CSRF_TOKEN":
      return {
        ...state,
        csrfToken: action.payload
      }

    default:
      throw new Error()
    }
}

export { authInitState, authReducer }


//실제 사용되는 곳에서 아래 처럼 쓰인다.

// import { useState, useDispatch } from '../../../Context/GlobalContextProvider';
// const {navBarState} = useState();

// const { navBarDispatch } = useDispatch();

// const closeNavBar = (e: any) =>{
//   navBarDispatch({type:'CHANGE_OPEN_STATUS', payload: false})
// }