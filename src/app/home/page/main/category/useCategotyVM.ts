import { useNavigate } from 'react-router-dom';

export const useCategoryVM = () => {
  const navigate = useNavigate();

  const onClickCategory = (categoryType: string) => {
    navigate(`/store/${categoryType}/list`);
  };

  return { onClickCategory };
};
