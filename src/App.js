import React from "react";

import Header from "./Components/Layouts/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";

import GithubContext from "./Context/GithubContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <GithubContext.Provider>
      <Router>
        <Header />
        <div class="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </GithubContext.Provider>
  );
};

export default App;
