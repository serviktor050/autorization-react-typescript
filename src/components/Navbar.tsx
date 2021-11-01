import React from "react";
import { NavLink } from "react-router-dom";

import { useLoginContext } from "../components/pages/Login/contextLogin/LoginContext";
import { Time } from "./Time";

export const Navbar: React.FC = () => {
  const { removeLogin } = useLoginContext();

  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  return (
    <>
      {userTokenLocalStorage && (
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

      {!userTokenLocalStorage && (
        <nav>
          <div className="nav-wrapper #0288d1 light-blue darken-2">
            <NavLink to="/" className="brand-logo">
              TS Tutorial
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/login" activeClassName="active">
                  Authorization
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
