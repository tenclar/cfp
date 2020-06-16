import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Poppins:300,300i,400,700&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;

}

html {
  position: relative;
  height: 100vh;
}

body{
  background: #dadada;
  color: #444;
  -webkit-font-smoothing: antialiazed;
  margin-bottom:60px;
}

body, input, button {
  font-family: 'Poppins', serif;
  font-size: 14x;
}

h1, h2, h3, h4, h5,h6 {
  font-weight: 500;
}

button {
  cursor: pointer;

}

a {
    text-decoration: none;
    &:active  {
    color: #000;
    }
  }
`;
