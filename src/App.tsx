import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Navbar } from "./components/Navbar";
import { Login } from "./components/pages/Login/Login";
import { Main } from "./components/pages/Main/Main";
import { LoginContextProvider } from "./components/pages/Login/contextLogin/LoginContext";
import { Users } from "./components/pages/Users/Users";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route component={Users} path="/users" />
              <Route component={Login} path="/login" />
              <Route component={Main} path="/" exact />
            </Switch>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </LoginContextProvider>
  );
};

export default App;
