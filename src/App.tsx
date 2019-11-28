import * as React from "react";
import { Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { createGlobalStyle } from "styled-components";
import DetailInfoPage from "./pages/DetailInfoPage/DetailInfoPage";

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
      <Route
        exact
        path="/pokemon/:pokemonName"
        component={DetailInfoPage}
      ></Route>
    </>
  );
};

export default App;
