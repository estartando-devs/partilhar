import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {  
    width: 100%;
    font-family: 'Roboto', sans-serif;
     /* font-family: 'Lato', sans-serif;  */    
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`;

export default GlobalStyle;
