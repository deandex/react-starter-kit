import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

function Navigation() {
  return (
    <div style={{ textAlign: "right", paddingRight: 20 }}>
      <Link to={ROUTES.LANDING} style={{ marginRight: 20 }}>
        Home
      </Link>
      <Link to={ROUTES.ABOUT}>About</Link>
    </div>
  );
}

export default Navigation;
