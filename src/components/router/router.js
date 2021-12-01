import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/privateroute";

import login from "../login/login";
import CrudSimple from "../crudSimple";
import Home from "../pages/home/home";
import SignInSide from "../sign-in-side/signInSide";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/"]} component={Home} />
        <Route exact path={["/login"]} component={login} />
        <Route exact path={["/signinside"]} component={SignInSide} />
        <PrivateRoute exact path="/crudSimple" component={CrudSimple} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Pagina no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
