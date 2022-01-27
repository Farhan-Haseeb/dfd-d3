import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "containers/Home";
import NotFound from "containers/NotFound";

const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
