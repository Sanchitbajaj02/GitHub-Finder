import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ image, username, githubUrl, type }) => {
  return (
    <React.Fragment>
      <div className="card card-shadow">
        <img src={image} className="img-fluid card-img" alt={username} />
        <div className="card-body">
          <h5 className="card-title text-center">{username}</h5>
          {type === 'User' ? (
            <Link
              type="button"
              to={'/user/' + username}
              className="btn btn-custom-color my-1"
            >
              View More
            </Link>
          ) : (
            <Link
              type="button"
              to={'/org/' + username}
              className="btn btn-custom-color my-1"
            >
              View More
            </Link>
          )}
          <a
            type="button"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn github-button my-1"
          >
            View on Github
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserCard
