import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Main from './Main';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }

  body {
    background-color: #F2F2F2;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Main />
  </Container>
);

export default App;
