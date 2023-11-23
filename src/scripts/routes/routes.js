import Restaurant from '../views/pages/restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Restaurant,
  '/favorite': Like,
  '/detail/:id': Detail,
};

export default routes;
