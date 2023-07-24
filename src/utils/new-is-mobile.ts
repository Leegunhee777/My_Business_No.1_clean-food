import isBrowser from './is-browser';
/**
 * @description 모바일 기기인지 확인
 *
 * */

function isMobile() {
  if (!isBrowser()) return false;

  const agent = navigator.userAgent;
  if (agent === undefined) return false;

  const mobile1 = agent.match(
    /.*(iPhone|iPod|iPad|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson).*/g
  );
  const mobile2 = agent.match(/.*(LG|SAMSUNG|Samsung).*/g);

  return !!(mobile1 || mobile2);
}

export default isMobile;
