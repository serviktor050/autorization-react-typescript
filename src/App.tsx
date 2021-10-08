import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Login } from "./components/pages/Login/Login";
import { Main } from "./components/pages/Main";
import { LoginContextProvider } from "./components/pages/Login/contextLogin/LoginContext";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={Main} path="/" exact />
          </Switch>
        </BrowserRouter>
      </QueryClientProvider>
    </LoginContextProvider>
  );
};

export default App;
