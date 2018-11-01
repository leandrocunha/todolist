import React from 'react';
import styled from 'styled-components';

const Notepad = styled.div`
  width: 450px;
`;

const Title = styled.h1`
  color: #111;
  font-size: 32px;
  font-weight: 600;
  margin: 50px 0 15px 0;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 15px 10px;
  width: 100%;
`;

const Main = () => (
  <Notepad>
    <Title>Re:Minder</Title>
    <Input placeholder="type your task..." />
  </Notepad>
);

export default Main;
