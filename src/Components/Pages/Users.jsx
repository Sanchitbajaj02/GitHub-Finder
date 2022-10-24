import React, { useState, useEffect } from "react";
import Search from "../Layouts/Search";
import UserCard from "../Layouts/UserCard";

import { searchUsers } from "../../Data/axios";

import { AiOutlineOrderedList } from "react-icons/ai";
import { BsFillGridFill } from "react-icons/bs";

const Home = () => {
  const [userData, setUserData] = useState([]);

  const [username, setUsername] = useState(null);

  useEffect(() => {
    if (username !== null) {
      searchUsers(username)
        .then((res) => {
          console.log(res);
          setUserData(res);
        })
        .catch((err) => console.log(err));
    }
  }, [username]);

  console.log(userData);

  return (
    <React.Fragment>
      <section>
        <h2 className="text-center mt-4">Search for User</h2>
      </section>
      <Search username={username} setUsername={setUsername} />
      <section>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {userData.length === 1 ? (
            <h6 className="text-secondary">{userData.length} result</h6>
          ) : (
            <h6 className="text-secondary">{userData.length} results</h6>
          )}
          <div>
            <button className="btn px-1">
              <AiOutlineOrderedList size={20} />
            </button>
            <button className="btn px-1">
              <BsFillGridFill size={20} />
            </button>
          </div>
        </div>
        {userData.length === 0 ? (
          <div className="row justify-content-center mt-4">
            <h5 className="text-secondary ">No results found</h5>
          </div>
        ) : (
          <div className="row">
            {userData?.map((data, index) => {
              return (
                <div className="col-lg-4 col-md-6" key={index}>
                  <UserCard
                    image={data.avatar_url}
                    username={data.login}
                    githubUrl={data.html_url}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </React.Fragment>
  );
};

export default Home;
