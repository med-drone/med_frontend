
// import React from "react";
// import ReactDOM from "react-dom";
// import "./App";
// import "./index.css";
// import App from "./App";
// import reducer, { initialState } from "./reducer";
// import { StateProvider } from "./StateProvider";
// import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <StateProvider initialState={initialState} reducer={reducer}>
//       <App />
//     </StateProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);