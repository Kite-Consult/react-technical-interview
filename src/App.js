import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeView from "./components/HomeView";

const App = props => (
  <Router>
    <Route path="/" exact component={HomeView} />
  </Router>
);

export default App;
