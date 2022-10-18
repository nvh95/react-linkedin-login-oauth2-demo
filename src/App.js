import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LinkedInCallback } from "react-linkedin-login-oauth2";
import LinkedInPage from "./LinkedInPage";

function App() {
  const typeOfLogin = ["GMAIL", "LINKEDIN"];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/linkedin" component={LinkedInCallback} />
        <Route path="/" render={() =><LinkedInPage typeOfLogin={typeOfLogin} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
