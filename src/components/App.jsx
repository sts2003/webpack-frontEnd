import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import GlobalStyles from "../styles/GlobalStyles";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
