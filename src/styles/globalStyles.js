import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
  width: 100vw;
  margin: 0;
  padding: 0;
}
body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: 'Roboto', sans-serif;
     /* font-family: 'Lato', sans-serif;  */    
  }
`;

export default GlobalStyle;
