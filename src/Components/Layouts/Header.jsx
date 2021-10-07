import React from "react";

const Header = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark navbar-bg-color">
        <div className="container">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#navID"
            aria-controls="navID"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navID">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              {/* TODO: dark mode switch */}
              {/* <li className="nav-item mx-auto">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                    defaultChecked={false}
                    onChange={(e) => console.log(e.target.checked)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  ></label>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
