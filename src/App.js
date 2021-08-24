import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";

import { Theme, GlobalStyle } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
