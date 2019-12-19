import React from 'react';

import * as ROUTES_PATH from './global/routes';

const Landing = React.lazy(() => import('./pages/Landing'));
const About = React.lazy(() => import('./pages/About'));

const routes = [
  { key: 'route-home', path: ROUTES_PATH.LANDING, exact: true, name: 'Home', component: Landing },
  { key: 'route-about', path: ROUTES_PATH.ABOUT, name: 'About', component: About },
];

export default routes;
