import React, { createContext, useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import HomePage from "Pages/Home";
import { Theme, GlobalStyle } from "Theme";
import MainNav from "Components/Navigation/MainNav";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <header>
            <MainNav />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={HomePage} />
            </Switch>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
