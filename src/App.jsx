import React, { useState } from "react";

import Header from "./Components/Layouts/Header";

import {
  About,
  Home,
  NotFound,
  Organization,
  UserProfile,
  Users,
} from "./Components/pages.index";

import GithubContext from "./Context/GithubContext";

import { Route, Routes, Navigate } from "react-router-dom";

const username = window.sessionStorage.getItem("username");

const App = () => {
  const [store, setStore] = useState({
    username: username || null,
  });

  return (
    <GithubContext.Provider value={{ store, setStore }}>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:username" element={<UserProfile />} />
          <Route path="/org/:username" element={<UserProfile />} />
          <Route path="/orgs" element={<Organization />} />
          <Route path="/page-not-found" element={<NotFound />} />
          <Route
            path="*"
            element={<Navigate to="/page-not-found" replace={true} />}
          />
        </Routes>
      </div>
    </GithubContext.Provider>
  );
};

export default App;
