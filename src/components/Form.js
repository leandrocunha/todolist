import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border: #cecece 1px solid;
  border-radius: 100px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  padding: 12px 20px;
  width: 100%;
`;

const Form = ({ submit }) => (
  <form onSubmit={e => submit(e)}>
    <Input name="task" placeholder="type your task..." />
  </form>
);

export default Form;
