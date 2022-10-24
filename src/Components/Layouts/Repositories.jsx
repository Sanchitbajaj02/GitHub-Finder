import React, { useEffect, useState } from "react";
import RepoCard from "./RepoCard";

import { getUserRepos } from "../../Data/axios";

const Repositories = ({ username }) => {
  const [getGithubRepos, setGithubRepos] = useState([]);

  useEffect(() => {
    getUserRepos(username)
      .then((resp) => {
        setGithubRepos(resp);
      })
      .catch((err) => console.log(err));
  }, [username]);

  console.log("data", getGithubRepos);

  return (
    <>
      {getGithubRepos.map((repo, i) => {
        return <div className="mb-3" key={i}><RepoCard repo={repo} /></div>;
      })}
    </>
  );
};

export default Repositories;
