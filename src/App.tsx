import React, { createContext, useContext, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import HomePage from "Pages/Home";
import { Theme, GlobalStyle, Dark } from "Theme";
import MainNav from "Components/Navigation/MainNav";
import ContactUsPage from "Pages/ContactUs";
import Button from "Components/Buttons/Button";

const App = () => {
  const [siteTheme, setSiteTheme] = useState(Theme);

  const handleThemeChange = () => {
    switch (siteTheme) {
      case Theme:
        setSiteTheme(Dark);
        break;
      case Dark:
        setSiteTheme(Theme);
        break;
      default:
        setSiteTheme(Theme);
        break;
    }
  };
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={siteTheme}>
        <BrowserRouter>
          <header>
            <MainNav />
            <Button action={handleThemeChange} label={"Change Theme"} color="primary" isOutlined={false} />
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/connect" component={ContactUsPage} />
            </Switch>
          </main>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
