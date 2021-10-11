import React from "react";
import { NavLink } from "react-router-dom";

import { useLoginContext } from "../components/pages/Login/contextLogin/LoginContext";

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
                <NavLink to="/" activeClassName="active">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" activeClassName="active">
                  Пользователи
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className="navbar-logout"
                  activeClassName="active"
                  onClick={() => removeLogin()}
                >
                  Выйти
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
                  Авторизация
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
};
