import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { Main } from "./components/pages/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Main} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
