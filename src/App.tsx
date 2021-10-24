import React, { createContext, useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import HomePage from "Pages/Home";
import { Theme, GlobalStyle } from "Theme";
import MainNav from "Components/Navigation/MainNav";
import Portfolio from "Pages/Portfolio/Index";
import ToDo from "Pages/Portfolio/ToDoApp/Index";

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
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/portfolio/todo" component={ToDo} />
            </Switch>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
