import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../Styles/Theme";
import AppRouter from "./AppRouter";
import GlobalStyles from "../styles/GlobalStyles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppRouter />
      <ToastContainer position={toast.POSITION.BOTTOM_CENTER} />
    </ThemeProvider>
  );
};

export default App;
