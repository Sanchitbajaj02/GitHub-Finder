import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark navbar-bg-color">
        <div className="container">
          <a className="navbar-brand" href="/">
            GitHub Finder
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navID"
            aria-controls="navID"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navID">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a href="/users" className="nav-link active">
                  User Search
                </a>
              </li>
              <li className="nav-item ">
                <a href="/orgs" className="nav-link active">
                  Organization Search
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
