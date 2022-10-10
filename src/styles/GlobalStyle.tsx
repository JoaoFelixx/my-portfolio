import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Sriracha', cursive;
  }

  ::-webkit-scrollbar { width: 15px; }

  ::-webkit-scrollbar-track {
    background-color: #4400AA;
    border-radius: 30px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background-color: #000;
  }
`;