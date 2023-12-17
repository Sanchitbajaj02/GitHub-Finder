import { useEffect, useState } from 'react'
import RepoCard from './RepoCard'

import { getUserRepos } from '../../utils/axios'

const Repositories = ({ username }) => {
  const [getGithubRepos, setGithubRepos] = useState([])

  useEffect(() => {
    getUserRepos(username)
      .then((resp) => {
        setGithubRepos(resp)
      })
      .catch((err) => console.log(err))
  }, [username])

  return (
    <>
      <div className="row">
        {getGithubRepos.map((repo, i) => {
          return (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
              <RepoCard repo={repo} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Repositories
