import './assets/sass/mainStyle.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthenticatedRoute from './routing/Layout';
import { changeLanguage, getLanguage } from './lang/local';
import Layout from './routing/Layout/Layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path='/' component={Layout} />
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
