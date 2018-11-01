import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <h1>Re:Minder</h1>
  </Fragment>
);

export default App;
