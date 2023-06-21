import { PATH } from '../../../routes/paths';
import { Link, useNavigate } from 'react-router-dom';
import { TopBarWrapper, ButtonWrap, LinkWrap, MoreIconWrap } from './styled';
import { ReactComponent as NavSVG } from '../../../Assets/hambuger.svg';
import { useAuthState } from '../../../context/auth-context-provider';
function TopBar() {
  const { userInfo } = useAuthState();

  return (
    <TopBarWrapper>
      <div>
        <div>
          {userInfo.username ? (
            <LinkWrap>
              <Link to={PATH.home}>Home</Link>
              <Link to={PATH.store.list}>store</Link>
              <Link to={PATH.my.account}>profile</Link>
              <Link to={PATH.group.list}>group</Link>
            </LinkWrap>
          ) : (
            <LinkWrap>가나다라마바사</LinkWrap>
          )}

          <MoreIconWrap>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </MoreIconWrap>
        </div>
      </div>
    </TopBarWrapper>
  );
}

export default TopBar;
