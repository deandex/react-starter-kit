import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NotMatchPage from "../NotMatch";
import Navigation from "../Navigation";
import Footer from "../Footer";
import LandingPage from "../Landing";
import AboutPage from "../About";

import * as ROUTES from "../../constants/routes";

function App() {
  return (
    <Router forceRefresh>
      <Navigation />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.ABOUT} component={AboutPage} />
        <Route exact component={NotMatchPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
