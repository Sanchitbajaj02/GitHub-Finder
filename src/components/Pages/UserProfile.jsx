import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import GithubContext from '../../Context/GithubContext'
import { useGithubContext } from '../../hooks/useGithubContext'
import { getUserData } from '../../utils/axios'
import Repositories from '../Layouts/Repositories'
import GitHubCalendar from 'react-github-calendar'

// icons
import { MdArrowBackIos } from 'react-icons/md'
import { BsGithub, BsTwitter } from 'react-icons/bs'

import {
  GoPeople,
  GoOrganization,
  GoLocation,
  GoLink,
  GoRepo,
  GoLog,
  GoPersonAdd,
  GoCodeSquare,
} from 'react-icons/go'

export default function UserProfile() {
  const [getGithubUser, setGithubUser] = useState({})
  const [activityBarLoader, setActivityBarLoader] = useState(true)

  const { store, setStore } = useGithubContext()

  const { username } = useParams()

  useEffect(() => {
    getUserData(username)
      .then((resp) => {
        setGithubUser(resp)
        setActivityBarLoader(false)
      })
      .catch((err) => console.log(err))
  }, [username])

  if (store.loading) {
    return <h1>Loading...</h1>
  }

  console.log(getGithubUser)

  return (
    <React.Fragment>
      {/* back button */}
      <section className="mt-3">
        {getGithubUser.type === 'User' ? (
          <Link
            to="/users"
            type="button"
            className="btn fw-medium"
            onClick={() => {
              window.sessionStorage.clear()
              setStore({
                username: '',
                error: false,
                loading: true,
              })
            }}
          >
            <MdArrowBackIos size={20} /> Back to Search
          </Link>
        ) : (
          <Link
            to="/orgs"
            type="button"
            className="btn fw-medium"
            onClick={() => {
              window.sessionStorage.clear()
              setStore({
                username: '',
                error: false,
                loading: true,
              })
            }}
          >
            <MdArrowBackIos size={20} /> Back to Search
          </Link>
        )}
      </section>

      {/* profile section */}
      <section className="mt-4">
        <article className="row mb-3">
          <div className="col-md-4 text-center my-3">
            <img
              src={getGithubUser?.avatar_url}
              alt={getGithubUser?.login}
              className="img-fluid overflow-hidden rounded-2 shadow-lg"
              width={'65%'}
            />
          </div>
          <div className="col-md-8 my-2">
            <div className="d-flex gap-3 align-items-center">
              <h1 className="h2 fw-bold mb-0">
                {getGithubUser?.name ? getGithubUser?.name : 'NA'}
              </h1>

              {getGithubUser?.type === 'User' ? (
                getGithubUser?.hireable ? (
                  <span className="badge bg-success text-light">Hireable</span>
                ) : (
                  <span className="badge bg-danger text-light">
                    Not-Hireable
                  </span>
                )
              ) : null}

              <a
                type="button"
                href={getGithubUser.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn profile-github-button fw-medium"
                title="visit github"
              >
                <BsGithub size={20} />
              </a>
            </div>
            <p className="fw-medium">@{getGithubUser?.login}</p>

            {getGithubUser.bio && (
              <p className="fw-medium">
                <GoLog /> {getGithubUser?.bio}
              </p>
            )}

            {getGithubUser.company && (
              <p className="fw-medium">
                <GoOrganization /> {getGithubUser.company}
              </p>
            )}
            {getGithubUser.location && (
              <p className="fw-medium">
                <GoLocation /> {getGithubUser.location}
              </p>
            )}

            {getGithubUser.blog && (
              <p className="fw-medium">
                <GoLink />{' '}
                <a
                  href={getGithubUser.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getGithubUser.blog}
                </a>
              </p>
            )}

            {getGithubUser.twitter_username && (
              <p className="fw-medium">
                <BsTwitter />{' '}
                <a
                  href={`https://twitter.com/${getGithubUser.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-card-highlight"
                >
                  {getGithubUser.twitter_username}
                </a>
              </p>
            )}
          </div>
        </article>

        <article className="row g-1 py-3 row-cols-2 row-cols-lg-4">
          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <GoPeople size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Followers</p>
              <p className="m-0 p-0 fw-bold fs-3">{getGithubUser?.followers}</p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <GoPersonAdd size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Following</p>
              <p className="m-0 p-0 fw-bold fs-3">{getGithubUser?.following}</p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <GoRepo size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Public Repos</p>
              <p className="m-0 p-0 fw-bold fs-3">
                {getGithubUser?.public_repos}
              </p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <GoCodeSquare size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Public Gists</p>
              <p className="m-0 p-0 fw-bold fs-3">
                {getGithubUser?.public_gists}
              </p>
            </div>
          </div>
        </article>
      </section>

      {getGithubUser.type && getGithubUser?.type === 'User' && (
        <section className="card card-shadow p-3 my-4">
          <h2 className="h3 text-center fw-bold mb-4">
            @{getGithubUser?.login}&#39;s Statistics
          </h2>

          <div className="github-activity-calender-container">
            <GitHubCalendar
              username={getGithubUser?.login}
              colorScheme="light"
              blockSize={14}
              loading={activityBarLoader}
            />
          </div>

          <div className="row">
            <div className="col-12">
              <figure>
                <img
                  src={`https://github-profile-trophy.vercel.app/?username=${getGithubUser?.login}&row=1&margin-w=5&no-frame=false`}
                  alt="Github Trophies"
                  width="100%"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-12 col-md-6">
              <figure>
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${getGithubUser?.login}&bg_color=ffffff&color=000111&line=5194F0&point=000000&area=true&area_color=5194F0&hide_border=true`}
                  alt="Github Activity Graph"
                  width="100%"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-12 col-md-6">
              <figure>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${getGithubUser.login}&ring=5194F0&currStreakLabel=5194F0`}
                  alt="Github Streaks"
                  width="100%"
                  className="img-fluid"
                />
              </figure>
            </div>
            <div className="col-12 col-md-6">
              <figure>
                <img
                  src={`https://github-contributor-stats.vercel.app/api?username=${getGithubUser.login}&limit=15&combine_all_yearly_contributions=true`}
                  alt="Github Contribution Statistics"
                  width="100%"
                  className="img-fluid"
                />
              </figure>
            </div>

            <div className="col-12 col-md-6">
              <figure>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${getGithubUser.login}&show_icons=true&count_private=true&include_all_commits=true&show=reviews,prs_merged,prs_merged_percentage`}
                  alt="Github Overall Statistics"
                  width="100%"
                  className="img-fluid"
                />
              </figure>
              <figure>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${getGithubUser.login}&count_private=true&include_all_commits=true&layout=compact`}
                  alt="Github Top Languages"
                  className="img-fluid"
                  width="100%"
                />
              </figure>
            </div>
          </div>
        </section>
      )}

      <section className="card card-shadow p-3 my-4">
        <h2 className="h3 text-center fw-bold mb-4">
          @{getGithubUser?.login}&#39;s Latest Repositories
        </h2>

        <Repositories getGithubUser={getGithubUser} username={username} />
      </section>
    </React.Fragment>
  )
}
