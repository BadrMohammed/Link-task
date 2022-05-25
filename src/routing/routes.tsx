import { Index } from '../modules/Index';
import { NewDetailsController } from '../modules/News/NewDetails/NewDetailsController';
const routes = [
  { component: Index, name: 'Index', path: '/', toAside: true },
  { component: NewDetailsController, name: 'NewDetailsController', path: '/new-details', toAside: true },
];

export default routes;
