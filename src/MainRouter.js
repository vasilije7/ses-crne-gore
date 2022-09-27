import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  HomePage,
  ONama,
  Takmicenja,
  Igrice,
  Partneri,
  Vijesti,
  Kontakt,
} from "./components";
const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/onama" component={ONama} />
      <Route exact path="/takmicenja" component={Takmicenja} />
      <Route exact path="/igrice" component={Igrice} />
      <Route exact path="/partneri" component={Partneri} />
      <Route exact path="/vijesti" component={Vijesti} />
      <Route exact path="/kontakt" component={Kontakt} />
    </Switch>
  );
};

export default MainRouter;
