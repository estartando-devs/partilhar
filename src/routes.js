import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
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
import { onAuthStateChange } from "./services/auth.service";

const lazyInitialize = () => {
  const key = `firebase:authUser:${process.env.REACT_APP_API_KEY}:[DEFAULT]`;
  const userData = JSON.parse(window.sessionStorage.getItem(key));
  if (userData) return { loggedIn: true };

  return { loggedIn: false };
};

export default function Routes() {
  const [user, setUser] = useState(lazyInitialize);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);

    return () => unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          <Login />
          {user.loggedIn && <Redirect to="/" />}
        </Route>
        <Route exact path="/cadastro">
          <Register />
          {user.loggedIn && <Redirect to="/" />}
        </Route>
        <Route exact path="/perfil" component={Profile} />
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
