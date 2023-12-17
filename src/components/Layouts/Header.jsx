import React from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { VscGithub } from 'react-icons/vsc'
import { FaGithub } from 'react-icons/fa'

const Header = () => {
  const currLocation = useLocation()

  const navbarItems = [
    {
      id: 1,
      navItem: 'Home',
      slug: '/',
    },
    {
      id: 2,
      navItem: 'About',
      slug: '/about',
    },
    {
      id: 3,
      navItem: 'Search users',
      slug: '/users',
    },
    {
      id: 4,
      navItem: 'Search organizations',
      slug: '/orgs',
    },
    {
      id: 4,
      navItem: 'Docs',
      slug: '/docs',
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
                        className={`nav-link ${
                          currLocation.pathname === items.slug ? 'active' : ''
                        } `}
                      >
                        {items.navItem}
                      </Link>
                    </li>
                  )
                })}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={'https://github.com/Sanchitbajaj02/GitHub-Finder'}
                  target="_blank"
                >
                  <FaGithub size={20} />
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
