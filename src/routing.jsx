import React from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router-dom";
import LandingPage from "./pages/landing";
import PageOne from "./pages/pageOne";
export const HomeRoute = "/";
export const ProjectsRoute = "/projects/";

const Routing = () => {
  return (
    <Switch>
      <Route path="/one" component={PageOne} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};
export default withRouter(Routing);
