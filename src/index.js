import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

//Customs
import App from "components/App";
import Root from "Root";

//Normally all the routes should be declared here. But it is a small project, it's in components/App
ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
