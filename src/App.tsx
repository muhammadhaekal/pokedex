import * as React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
    }
`;

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Route exact path="/" component={Homepage}></Route>
    </>
  );
};

export default App;
