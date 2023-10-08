import React from 'react'
import { Link } from 'react-router-dom'

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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navID">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/users" className="nav-link text-light">
                  User Search
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/orgs" className="nav-link text-light">
                  Organization Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
