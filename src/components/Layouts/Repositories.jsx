import React, { useEffect, useState } from 'react'
import RepoCard from './RepoCard'

import { getUserRepos } from '../../utils/axios'

const Repositories = ({ getGithubUser, username }) => {
  const [getGithubRepos, setGithubRepos] = useState([])

  useEffect(() => {
    getUserRepos(username)
      .then((resp) => {
        setGithubRepos(resp)
      })
      .catch((err) => console.log(err))
  }, [username])

  console.log('data', getGithubRepos)

  return (
    <>
      {getGithubUser.type === 'User' ? (
        getGithubRepos.map((repo, i) => {
          return (
            <div className="mb-3" key={i}>
              <RepoCard repo={repo} />
            </div>
          )
        })
      ) : (
        <div className="row">
          {getGithubRepos.map((repo, i) => {
            return (
              <div className="col-md-4 mb-3" key={i}>
                <RepoCard repo={repo} />
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Repositories
