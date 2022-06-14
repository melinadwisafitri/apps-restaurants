import detail from '../views/pages/detail';
import favorites from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/': Home,
  '/detail/:id': detail,
  '/favorite': favorites,
};

export default routes;
