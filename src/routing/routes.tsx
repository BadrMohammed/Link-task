import { HomeController } from '../modules/Home/HomeController';
import { NewsController } from '../modules/News/NewsController';
const routes = [
  { component: HomeController, name: 'Home', path: '/', toAside: true },
  { component: NewsController, name: 'News', path: '/news', toAside: true },
];

export default routes;
