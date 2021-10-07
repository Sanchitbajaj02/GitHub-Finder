import React, { useState, useEffect, useContext } from "react";
import Search from "../Layouts/Search";
import UserCard from "../Layouts/UserCard";

import searchUsers from "../../Data/axios";

import GithubContext from "../../Context/GithubContext";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const context = useContext(GithubContext);
  useEffect(() => {
    searchUsers(context.creds.username)
      .then((res) => {
        console.log(res);
        setUserData(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }, [context.creds?.username]);

  console.log(userData);

  return (
    <React.Fragment>
      <Search />
      <br />
      <section>
        <div className="container">
          {userData.length === 1 ? (
            <h6 className="text-secondary">{userData.length} result</h6>
          ) : (
            <h6 className="text-secondary">{userData.length} results</h6>
          )}
          <div className="row">
            {userData &&
              userData.map((data, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <UserCard
                      image={data.avatar_url}
                      username={data.login}
                      url={data.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
