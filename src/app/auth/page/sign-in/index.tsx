import React, { RefObject } from 'react';
import { 
  Container,
} from './styled';
import image from '../../asset/123.png';

const SignInScreen = () => {
  
  const [state, setState] = React.useState({
    userName: '',
    password: '',
  })
  
  return (
    <Container>
      <div>
        <input />
        <input />
        <div style={{backgroundColor:'beige', height: '200px'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige', height: '200px'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige', height: '200px'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige', height: '200px'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige'}}>
          이것은 로그인 화면이다.
        </div>
        <div style={{backgroundColor:'beige'}}>
          이것은 로그인 화면이다.
        </div>

      </div>
    </Container>
  )
}

export default SignInScreen;