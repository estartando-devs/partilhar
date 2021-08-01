import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300;1,400;1,500;1,700&display=swap');


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
    /* font-family: 'Lato', sans-serif; 
    font-family: 'Poppins', sans-serif; */
    
  }
`;

export default GlobalStyle;
