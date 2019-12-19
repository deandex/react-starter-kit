import React from 'react';

import SEO from '../../components/Seo';

const NotMatch = () => (
  <>
    <SEO title="Not Found" description="404 - Not FOund" />
    <div className="section-hero">
      <div className="wrapper w-clearfix" style={{ width: 450 }}>
        <img src="https://d3e54v103j8qbb.cloudfront.net/static/page-not-found.211a85e40c.svg" alt="" />
        <h2>Page not found</h2>
        <div>The page you are looking for doesn&#x27;t exist or has been moved.</div>
      </div>
    </div>
  </>
);

export default NotMatch;
