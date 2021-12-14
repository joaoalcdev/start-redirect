import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  /* Selection */
  h1::selection {
    color: #5600e1;
    background: white;
  }

  span::selection {
    color: #5600e1;
    background: white;
  }

  p::selection {
    color: #5600e1;
    background: white;
  }

  /* Custom Scroll */
  ::-webkit-scrollbar-track {
  background-color: #222222;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: #333333;
  }
  scroll-behavior: smooth;
`
