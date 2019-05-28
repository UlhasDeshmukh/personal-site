import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const TestWebSite = () => (
  <div className="not-found" id="testsite">
    <Helmet title="Test web page" />
    <h1>This web page to test your automation skills</h1>
    <p>Return to <Link to="/">index</Link>.</p>
  </div>
);

export default TestWebSite;
