import { Route } from 'react-router-dom';

function AuthenticatedRoute({ component: Component, auth, ...rest }: any) {
  return (
    <Route
      {...rest}
      // render={() => (
      //   auth
      //     ? <Component {...rest} />
      //     : <Redirect to="/signin" />

      // )}

      render={() => <Component {...rest} />}
    />
  );
}

export default AuthenticatedRoute;
