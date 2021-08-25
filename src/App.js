import { ThemeProvider } from "styled-components";
import { Theme, GlobalStyle } from "./styles";

import Routes from "./routes";
import "./config/firebase.config";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
