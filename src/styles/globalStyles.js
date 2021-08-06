import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
