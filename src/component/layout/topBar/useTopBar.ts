import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuthState } from '../../../context/auth-context-provider';

export function useTopBar() {
  const { userInfo } = useAuthState();
  let { category } = useParams();

  const navigate = useNavigate();

  const nonExposedList = ['/'];
  const isNonExposed = nonExposedList.includes(window.location.pathname);

  return { isNonExposed, navigate, category };
}
