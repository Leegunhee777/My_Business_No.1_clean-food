import { PATH } from '../../../routes/paths';
import { Link, useNavigate } from 'react-router-dom';
import {
  TopBarWrapper,
  UserWrap,
  ButtonWrap,
  LinkWrap,
  MoreIconWrap,
} from './styled';
import { ReactComponent as NavSVG } from '../../../Assets/hambuger.svg';
import { useAuthState } from '../../../context/auth-context-provider';
import { useTopBar } from './useTopBar';

function TopBar() {
  const { userInfo } = useAuthState();

  const { isNonExposed } = useTopBar();
  if (isNonExposed) return null;
  return (
    <TopBarWrapper>
      <div>
        {/* {userInfo.username ? (
          <LinkWrap>
            <Link to={PATH.home}>Home</Link>
            <Link to={PATH.store.list}>store</Link>
            <Link to={PATH.my.account}>profile</Link>
            <Link to={PATH.group.list}>group</Link>
          </LinkWrap>
        ) : (
          <LinkWrap>가나다라마바사</LinkWrap>
        )} */}

        {/* <MoreIconWrap>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </MoreIconWrap> */}
        {/* <UserWrap>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </UserWrap> */}
      </div>
    </TopBarWrapper>
  );
}

export default TopBar;
