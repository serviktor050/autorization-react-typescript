import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { LoginContextProvider } from "./components/pages/Login/contextLogin/LoginContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Login } from "./components/pages/Login/Login";
import { Main } from "./components/pages/Main/Main";
import { Users } from "./components/pages/Users/Users";
import { User } from "./components/pages/User/User";
import { Todos } from "./components/pages/Todos/Todos";
import { Weather } from "./components/pages/Weather/Weather";
import { WeatherContextProvider } from "./components/pages/Weather/contextWeather/WeatherContext";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <LoginContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/weather">
                <WeatherContextProvider>
                  <Weather />
                </WeatherContextProvider>
              </Route>

              <Route component={Todos} path="/todos" />
              <Route component={User} path="/users/user-:id" />
              <Route component={Users} path="/users" />
              <Route component={Login} path="/login" />
              <Route component={Main} path="/" exact />
            </Switch>
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </LoginContextProvider>
  );
};

export default App;
