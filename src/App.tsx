import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./components/pages/Login/Login";
import { Main } from "./components/pages/Main/Main";
import { LoginContextProvider } from "./components/pages/Login/contextLogin/LoginContext";
import { Users } from "./components/pages/Users/Users";
import { User } from "./components/pages/User/User";
import { Todos } from "./components/pages/Todos/Todos";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Route component={Todos} path="/todos" />
              <Route component={User} path="/users/user-:id" />
              <Route component={Users} path="/users" />
              <Route component={Login} path="/login" />
              <Route component={Main} path="/" exact />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </LoginContextProvider>
  );
};

export default App;
