import { useTopBar } from './useTopBar';

import {
  TopBarWrapper,
  UserWrap,
  ButtonWrap,
  LinkWrap,
  MoreIconWrap,
} from './styled';

const TopBarComponent = () => {
  const { isNonExposed, category, navigate } = useTopBar();
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
        <div onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>

        {category && category}
      </div>
    </TopBarWrapper>
  );
};

export default TopBarComponent;
