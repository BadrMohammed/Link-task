import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import './Layout.scss';
import { useHistory } from 'react-router-dom';

const Header = React.lazy(() => import('../../components/Header/Header'));
const Sidebar = React.lazy(() => import('../../components/Sidebar/Sidebar'));

function Layout() {
  const [toggled, setToggled] = useState<boolean>(false);
  const history = useHistory();
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    setActive(
      history.location.pathname.split('/')[
        history.location.pathname.split('/').length - 1
      ]
    );
  }, []);


  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };
  const loading = () => (
    <div className='animated fadeIn pt-1 text-center'>{/* <Loader /> */}</div>
  );
  return (
    <>
      <Suspense fallback={loading()}>
        <Header
          handleToggleSidebar={handleToggleSidebar}
          title={active}
        />
      </Suspense>

      <div className={`app ${toggled ? 'toggled' : ''}`}>
      <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
        <main>
          <div className='block'>
            <Switch>
              {routes.map((route) =>
                route.component ? (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact
                  />
                ) : null
              )}
            </Switch>
          </div>
        </main>
      </div>
    </>
  );
}

export default Layout;
