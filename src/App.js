import React, { useState } from "react";

import Header from "./Components/Layouts/Header";
import Users from "./Components/Pages/Users";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";
import UserProfile from "./Components/Pages/UserProfile";
import Organization from "./Components/Pages/Organization";

import GithubContext from "./Context/GithubContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const username = window.sessionStorage.getItem("username");

const App = () => {
  const [creds, setCreds] = useState({
    username: username || "",
  });

  return (
    <GithubContext.Provider value={{ creds, setCreds }}>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route path="/user/:username" component={UserProfile} />
            <Route path="/orgs" component={Organization} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubContext.Provider>
  );
};

export default App;
