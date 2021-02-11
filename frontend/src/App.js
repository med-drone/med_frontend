
import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Med1 from "./Med1";
import Med2 from "./Med2";
import Med3 from "./Med3";
import Confirm from "./Confirm";
import Onboard1 from "./Onboard1";
import Onboard2 from "./Onboard2";
import Onboard3 from "./Onboard3";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Hello from "./Hello";


class App extends Component {



  // Adding Link to different pages
  // passing data to children components
  // Adding Route path
  render() {
    return (
      <div className="head">
       
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
           <Route
            path="/med1"
            exact
            render={() => <Med1 />}
          />
           <Route
            path="/med2"
            exact
            render={() => <Med2 />}
          />
           <Route
            path="/med3"
            exact
            render={() => <Med3 />}
          />
           <Route
            path="/confirm"
            exact
            render={() => <Confirm />}
          />
           <Route
            path="/graph1"
            exact
            render={() => <Graph1 />}
          />
           <Route
            path="/graph2"
            exact
            render={() => <Graph2 />}
          />
        </main>
      </div>
    );
  }
}

export default App;
