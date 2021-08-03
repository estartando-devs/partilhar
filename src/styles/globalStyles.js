import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
  width: 100vw;
  margin: 0;
  padding: 0;
}
body {
    
    box-sizing: border-box;
    width: 100%;
    font-family: 'Roboto', sans-serif;
     /* font-family: 'Lato', sans-serif;  */    
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
