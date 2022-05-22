import React, { Suspense, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../routes';
import './Layout.scss';
import { useHistory } from 'react-router-dom';

const Header = React.lazy(() => import('../../components/Header/Header'));
const Sidebar = React.lazy(() => import('../../components/Sidebar/Sidebar'));

function AuthenticatedLayout() {
  const [collapsed, setCollapsed] = useState<boolean>(false);
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

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };
  const loading = () => (
    <div className='animated fadeIn pt-1 text-center'>{/* <Loader /> */}</div>
  );
  return (
    <>
      <Suspense fallback={loading()}>
        {/* <Header
          handleCollapsedChange={handleCollapsedChange}
          handleToggleSidebar={handleToggleSidebar}
          title={active}
        /> */}
        {/* <Sidebar toggled={toggled} handleToggleSidebar={handleToggleSidebar} /> */}
      </Suspense>

      <div className={`app ${toggled ? 'toggled' : ''}`}>
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

export default AuthenticatedLayout;
