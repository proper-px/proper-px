import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import HomePage from "Pages/Home";
import { Theme, GlobalStyle } from "Theme";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
