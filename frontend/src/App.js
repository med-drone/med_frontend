
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";

import Onboard1 from "./Onboard1";
import Onboard2 from "./Onboard2";
import Onboard3 from "./Onboard3";


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
    };
  }

  // Fetching API
  componentDidMount() {
    fetch("")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ recipes: json.meals });
      });
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
<<<<<<< HEAD


          <Link to="/onboard1">onboard1</Link>
          <Link to="/onboard2">onboard2</Link>
          <Link to="/onboard3">onboard3</Link>
        </header>
=======
        </header> */}
>>>>>>> Added submit handler
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
         
        </main>
      </div>
    );
  }
}

export default App;
