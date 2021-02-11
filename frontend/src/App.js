
import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";

import Onboard1 from "./Onboard1";
import Onboard2 from "./Onboard2";
import Onboard3 from "./Onboard3";
import Hello from "./Hello";


class App extends Component {
  constructor() {
    super();
    this.state = {
      index: 1,
    };
  }


  // Adding Link to different pages
  // passing data to children components
  // Adding Route path
  render() {
    return (
      <div className="head">
        {/* <header>
        
          <Link to="/">Home</Link>

          <Link to="/login">Login</Link>
        </header> */}
        <main className="appmain">
          <Route path="/" exact render={() => <Home />} />
          <Route
            path="/login"
            exact
            render={() => <Login />}
          />

<Route
            path="/onboard1"
            exact
            render={() => <Onboard1 />}
          />
            <Route
            path="/onboard2"
            exact
            render={() => <Onboard2 />}
          />
            <Route
            path="/onboard3"
            exact
            render={() => <Onboard3 />}
          />
          <Route
            path="/hello"
            exact
            render={() => <Hello />}
          />
        </main>
      </div>
    );
  }
}

export default App;
