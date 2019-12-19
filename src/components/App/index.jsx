import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../../routes';

import ScrollToTop from '../ScrollToTop';
import ErrorBoundary from '../ErrorBoundary';
import Layout from '../../containers/Layout';

const NotMatch = lazy(() => import('../../pages/NotMatch'));

const loading = () => <div style={{ paddingTop: '2rem', textAlign: 'center' }}>Loading...</div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={loading()}>
          <Layout>
            <Switch>
              {routes.map(route => {
                return route.component ? (
                  <Route
                    key={route.key}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={() => <route.component />}
                  />
                ) : null;
              })}
              <Route exact component={NotMatch} />
            </Switch>
          </Layout>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
