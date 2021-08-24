import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Home,
  Login,
  Profile,
  Register,
  Search,
  Dandara,
  Izadora,
  OngDetails,
  About,
} from "./pages";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/perfil" component={Profile} />
        <Route exact path="/cadastro" component={Register} />
        <Route exact path="/busca" component={Search} />
        <Route exact path="/dandara" component={Dandara} />
        <Route exact path="/izadora" component={Izadora} />
        <Route exact path="/ong" component={OngDetails} />
        <Route exact path="/sobre" component={About} />
        <Route path="*">
          <h1>404. That’s an error.</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
