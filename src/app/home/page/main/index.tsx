import { Container } from './styled';

import SearchComponent from './search';
import AdvertisementComponent from './advertisement';
import CategoryComponent from './category';
import NewsComponent from './news';
import HotContentComponent from './hot-content';

const HomeMainPage = () => {
  return (
    <Container>
      <div>
        <SearchComponent />
        <AdvertisementComponent />
        <CategoryComponent />
        <HotContentComponent />
        <NewsComponent />
      </div>
    </Container>
  );
};

export default HomeMainPage;
