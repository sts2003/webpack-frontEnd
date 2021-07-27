import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Content from "../routers/layouts/content";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={Content} />
    </Router>
  );
};

export default AppRouter;
