import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./common/containers/App";
import "./styles/_main.scss";
import Routes from "./routes";
import ContextProvider from "./common/context/DarkMode";

ReactDOM.render(
  <AppContainer>
    <ContextProvider>
      <Routes />
    </ContextProvider>
  </AppContainer>,
  document.getElementById("root")
);
