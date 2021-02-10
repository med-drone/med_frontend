
import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";


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
        </header> */}
        <main className="appmain">
          <Route path="/" exact render={() => <Home />} />
          <Route
            path="/login"
            exact
            render={() => <Login />}
          />
         
        </main>
      </div>
    );
  }
}

export default App;
