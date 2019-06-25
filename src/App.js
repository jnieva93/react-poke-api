import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Body from "./components/Body";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Home />
            </div>
          )}
        />
        <Route
          path="/table"
          exact
          render={() => (
            <div>
              <NavigationBar goto="Card version" />
              <Body />
            </div>
          )}
        />
        <Route
          path="/card"
          exact
          render={() => (
            <div>
              <NavigationBar goto="Table version" />
              <Body />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
