import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const currLocation = useLocation()

  const navbarItems = [
    {
      id: 1,
      navItem: 'Home',
      slug: '/',
    },
    {
      id: 1,
      navItem: 'About',
      slug: '/about',
    },
    {
      id: 1,
      navItem: 'Search user',
      slug: '/users',
    },
    {
      id: 1,
      navItem: 'Search organizations',
      slug: '/orgs',
    },
  ]

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark navbar-bg-color">
        <div className="container">
          <a className="navbar-brand fw-semibold" href="/">
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
              {navbarItems &&
                navbarItems.map((items, i) => {
                  return (
                    <li className="nav-item" key={i}>
                      <Link
                        to={items.slug}
                        className={`nav-link fw-medium ${
                          currLocation.pathname === items.slug ? 'active' : ''
                        } `}
                      >
                        {items.navItem}
                      </Link>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Header
