import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../../Context/GithubContext";

import { MdArrowBackIos } from "react-icons/md";
import { BiMap, BiGlobe, BiNote } from "react-icons/bi";
import {
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaGithub,
} from "react-icons/fa";
import { getUserData } from "../../Data/axios";

import Repositories from "../Layouts/Repositories";

const UserProfile = (props) => {
  const [getGithubUser, setGithubUser] = useState({});
  const { store, setStore } = useContext(GithubContext);

  const { username } = useParams();

  useEffect(() => {
    getUserData(username)
      .then((resp) => {
        setGithubUser(resp);
      })
      .catch((err) => console.log(err));
  }, [username]);

  return (
    <React.Fragment>
      {/* back button */}
      <section className="my-3">
        {getGithubUser.type === "User" ? (
          <Link
            to="/users"
            type="button"
            className="btn  mt-4"
            onClick={() => {
              window.sessionStorage.clear();
              setStore("");
            }}
          >
            <MdArrowBackIos size={20} /> Back to Search
          </Link>
        ) : (
          <Link
            to="/orgs"
            type="button"
            className="btn  mt-4"
            onClick={() => {
              window.sessionStorage.clear();
              setStore("");
            }}
          >
            <MdArrowBackIos size={20} /> Back to Search
          </Link>
        )}
      </section>

      {/* profile section */}
      <section className="my-3">
        <article className="row mb-3">
          <div className="col-md-4 text-center my-2">
            <img
              src={getGithubUser?.avatar_url}
              alt={getGithubUser?.login}
              className="profile-card-img img-fluid overflow-hidden rounded-4 shadow-lg"
            />
          </div>
          <div className="col-md-8 my-2">
            <div className="d-flex align-items-center">
              <h2 className="me-3">{getGithubUser?.name}</h2>

              {getGithubUser?.hireable ? (
                <span className="badge bg-success text-light">Hireable</span>
              ) : getGithubUser?.type === "User" ? (
                <span className="badge bg-danger text-light">Not-Hireable</span>
              ) : null}
            </div>
            <h5 className="mb-3">@ {getGithubUser?.login}</h5>

            {getGithubUser.bio && (
              <h5 className="mb-3">
                <BiNote /> {getGithubUser?.bio}
              </h5>
            )}

            {getGithubUser.location && (
              <h5 className="mb-3">
                <BiMap /> {getGithubUser.location}
              </h5>
            )}
            {getGithubUser.blog && (
              <h5 className="mb-3">
                <BiGlobe />{" "}
                <a
                  href={getGithubUser.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getGithubUser.blog}
                </a>
              </h5>
            )}

            <div className="my-2">
              <a
                type="button"
                href={getGithubUser.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn profile-github-button"
              >
                <FaGithub size={22} /> Visit GitHub Profile
              </a>
            </div>
          </div>
        </article>

        <article className="row g-1 py-3 row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <FaUsers size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Followers</p>
              <p className="m-0 p-0 fw-bold fs-2">{getGithubUser?.followers}</p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <FaUserFriends size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Following</p>
              <p className="m-0 p-0 fw-bold fs-2">{getGithubUser?.following}</p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <FaCodepen size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Public Repos</p>
              <p className="m-0 p-0 fw-bold fs-2">
                {getGithubUser?.public_repos}
              </p>
            </div>
          </div>

          <div className="col d-flex align-items-center">
            <div className="icon-square text-bg-dark d-inline-flex align-items-center justify-content-center p-2 rounded me-3">
              <FaStore size={30} />
            </div>
            <div>
              <p className="m-0 p-0">Public Gists</p>
              <p className="m-0 p-0 fw-bold fs-2">
                {getGithubUser?.public_gists}
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="my-3">
        <div className="card card-cover shadow p-3">
          <section className="row">
            {getGithubUser?.type !== "Organization" ? (
              <article className="col-lg-7">
                <h4 className="text-center my-3 fw-bold">GitHub Statistics</h4>
                <figure>
                  <img
                    src={`https://github-readme-activity-graph.cyclic.app/graph?username=${getGithubUser?.login}&bg_color=ffffff&color=5194F0&line=5194F0&area=true&area_color=D5E5FA`}
                    alt="Github Activity Graph"
                    width="100%"
                    className="img-fluid"
                  />
                </figure>
                <figure>
                  <img
                    src={`https://github-profile-trophy.vercel.app/?username=${getGithubUser?.login}&row=1&column=7&margin-w=5&no-frame=false`}
                    alt="Github Trophies"
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

                <figure>
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${getGithubUser.login}&show_icons=true&count_private=true&include_all_commits=true`}
                    alt="Github Stats"
                    width="100%"
                    className="img-fluid"
                  />
                </figure>

                <figure>
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${getGithubUser.login}`}
                    alt="Github Streaks"
                    width="100%"
                    className="img-fluid"
                  />
                </figure>
              </article>
            ) : null}

            <article
              className={
                getGithubUser?.type !== "Organization"
                  ? "col-lg-5"
                  : "col-lg-12"
              }
            >
              <h4 className="text-center my-3 fw-bold">Latest Repositories</h4>

              <Repositories getGithubUser={getGithubUser} username={username} />
            </article>
          </section>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserProfile;
