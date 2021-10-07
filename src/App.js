import React, { useState } from "react";

import Header from "./Components/Layouts/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";

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
            {/* <Route path="/user/:username" component={About} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubContext.Provider>
  );
};

export default App;
