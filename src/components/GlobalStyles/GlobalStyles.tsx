import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');

 body {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px; 
    background-color: #EFF5FF; 
 }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
* {
   box-sizing: border-box;
}

`;

export default GlobalStyle;

