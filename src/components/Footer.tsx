import React from "react";
import { NavLink } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <NavLink to="/">
              <h5 className="white-text">TS Tutorial</h5>
            </NavLink>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li>
                <NavLink to="/" className="grey-text text-lighten-3">
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink to="/users" className="grey-text text-lighten-3">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/todos" className="grey-text text-lighten-3">
                  Todos
                </NavLink>
              </li>
              <li>
                <NavLink to="/weather" className="grey-text text-lighten-3">
                  Weather
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 SerViktor</div>
      </div>
    </footer>
  );
};
