import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    overflow-y: scroll; /* Enable scrolling */
  }

  /* Hide the scrollbar for Webkit browsers */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
