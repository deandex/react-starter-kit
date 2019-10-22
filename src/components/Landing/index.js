import React from "react";

import SEO from "../Seo";

import ImgLogo from "../../logo.svg";

const Landing = () => (
  <>
    <SEO title="Deansoft - Your Title" />
    <div
      style={{
        display: "flex",
        height: 350,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 50,
        paddingBottom: 50,
      }}
    >
      This is landing page
      <img src={ImgLogo} alt="" style={{ width: 300 }} />
    </div>
  </>
);

export default Landing;
