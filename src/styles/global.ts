import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  * {
    /* padding: 5px; */
    margin: 0;
    box-sizing: border-box;
  }

  html, body {
    scroll-behavior: smooth;
    /* height: 100%; */
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-family: 'Rubik', sans-serif;
  }

  buttons {
    background-color: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
    outline: none;
  }
`

export default globalStyle;