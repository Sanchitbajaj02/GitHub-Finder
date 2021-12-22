import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../Context/GithubContext";

import { MdDone, MdCancel, MdArrowBackIos } from "react-icons/md";

import { getUserData } from "../../Data/axios";

const UserProfile = (props) => {
  const [getGithubUser, setGithubUser] = useState({});
  const context = useContext(GithubContext);

  useEffect(() => {
    getUserData(props.match.params.username)
      .then((resp) => {
        setGithubUser(resp);
        // console.log(resp);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.username]);

  return (
    <React.Fragment>
      {/* back button */}
      <section className="my-3">
        <div className="row">
          <div className="col-md-6">
            <Link
              to="/users"
              type="button"
              className="btn btn-custom-color mt-4"
              onClick={() => {
                window.sessionStorage.clear();
                context.setCreds("");
              }}>
              <MdArrowBackIos size={20} /> Back to Search
            </Link>
          </div>
          <div className="col-md-6">
            <div className="btn btn-custom-color mt-4">
              Hireable:{" "}
              {getGithubUser.hireable ? (
                <MdDone size={20} />
              ) : (
                <MdCancel size={20} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* profile section */}
      <section className="my-3">
        <div className="card card-shadow">
          <div className="card-body">
            <article className="row">
              <div className="col-md-5 text-center my-2">
                <img
                  src={getGithubUser.avatar_url}
                  alt={getGithubUser.login}
                  className="profile-card-img img-fluid"
                />
                <h4 className="card-title mt-3">{getGithubUser.name}</h4>
                <p className="card-text">
                  Location:{" "}
                  {getGithubUser.location
                    ? getGithubUser.location
                    : "Not specified"}
                </p>
              </div>
              <div className="col-md-7 my-2">
                <div className="my-1">
                  <p className="card-text">
                    <strong>Bio: </strong>{" "}
                    {getGithubUser.bio ? getGithubUser.bio : "No specified"}
                  </p>

                  <p className="card-text">
                    <strong>Username: </strong>@{getGithubUser.login}
                  </p>

                  <p className="card-text">
                    <strong>Website: </strong>
                    {getGithubUser.blog ? (
                      <a
                        href={getGithubUser.blog}
                        target="_blank"
                        rel="noreferrer">
                        {getGithubUser.blog}
                      </a>
                    ) : (
                      "No url found"
                    )}
                  </p>
                </div>

                <div className="my-2">
                  <a
                    type="button"
                    href={getGithubUser.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn profile-github-button">
                    Visit GitHub Profile
                  </a>
                </div>

                <div className="my-3 flex-buttons">
                  <button className="btn btn-success  ">
                    <strong>Followers:</strong> {getGithubUser.followers}
                  </button>
                  <button className="btn btn-info  ">
                    <strong>Following:</strong> {getGithubUser.following}
                  </button>
                  <button className="btn btn-warning ">
                    <strong>Repos: {getGithubUser.public_repos}</strong>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="my-3"></section>
    </React.Fragment>
  );
};

export default UserProfile;
