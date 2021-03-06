import React from "react";
import { NavLink } from "react-router-dom";

import { useLoginContext } from "../components/pages/Login/contextLogin/LoginContext";
import { Time } from "./Time";
import { GoogleSignIn } from "../components/GoogleSignIn";

export const Navbar: React.FC = () => {
  const userTokenLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const googleIdLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("googleId"))
  );

  const isAuth = userTokenLocalStorage || googleIdLocalStorage;

  const { removeLogin } = useLoginContext();

  return (
    <>
      {!isAuth && (
        <nav>
          <div className="nav-wrapper #0288d1 light-blue darken-2">
            <NavLink to="/" className="brand-logo">
              TS Tutorial
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <GoogleSignIn />
              </li>
            </ul>
          </div>
        </nav>
      )}
      {isAuth && (
        <nav>
          <div className="nav-wrapper #0288d1 light-blue darken-2">
            <NavLink to="/" className="brand-logo">
              TS Tutorial
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Time />
              </li>
              <li>
                <NavLink to="/" activeClassName="active">
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="active">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/todos" activeClassName="active">
                  Todos
                </NavLink>
              </li>
              <li>
                <NavLink to="/weather" activeClassName="active">
                  Weather
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="navbar-logout"
                  activeClassName="active"
                  onClick={() => removeLogin()}
                >
                  Go away
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
