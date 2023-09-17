import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
font-family: 'Manrope', sans-serif; 
color: #dddddd;
background-color: black;
font-size: 12px;
font-weight: 400;
line-height: 1.5; 
}

 ::-webkit-scrollbar {
      width: 15px;
  }

  ::-webkit-scrollbar-track{
    background-color: #ff0000;
  }

  ::-webkit-scrollbar-thumb{
     background-color: black;
     border-radius: 8px;
     border: 3px solid #FFF;
  }

  ::-webkit-scrollbar-thumb:hover {
      background-color: #252525;
  }

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {text-decoration: none;
 }
 
 a:focus,
button:focus {
  outline: 1px solid transparent;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
