import React from 'react';
import styled from 'styled-components';

const StyledEmpty = styled.div`
  color: #cecece;
  font-size: 12px;
  padding: 30px 0;
  text-transform: uppercase;
  text-align: center;
`;

const Empty = ({ message }) => <StyledEmpty>{message}</StyledEmpty>;

export default Empty;
