import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
