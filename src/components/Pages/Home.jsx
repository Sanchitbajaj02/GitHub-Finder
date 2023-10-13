import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <React.Fragment>
      <div className="row home-grid-wrapper">
        <div className="col-md-6">
          <div className="card card-shadow">
            <Link
              to="/users"
              className="card-body link-card-highlight text-center"
            >
              <h4 className="card-title">User Search</h4>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-shadow">
            <Link
              to="/orgs"
              className="card-body link-card-highlight text-center"
            >
              <h4 className="card-title">Organization Search</h4>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
