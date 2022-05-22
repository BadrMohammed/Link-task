import './assets/sass/mainStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthenticatedRoute from './routing/AuthenticatedRoute';
import { changeLanguage, getLanguage } from './lang/local';
import AuthenticatedLayout from './routing/AuthenticatedLayout/AuthenticatedLayout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path='/' component={AuthenticatedLayout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
changeLanguage();
if (getLanguage() === 'en') {
  document.body.style.direction = 'ltr';
} else {
  document.body.style.direction = 'rtl';
}
export default App;
