import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #111;
  font-size: 32px;
  font-weight: 600;
  margin: 50px 0 15px 0;
`;

const List = styled.div`
  background-color: #fff;
  padding: 10px;
`;

const Task = styled.div`
  border-bottom: #ccc 1px solid;
  padding: 10px;
  margin: 0 0 10px;
  text-decoration: line-through;

  &:last-of-type {
    border: none;
    margin: 0;
  }
`;

const Empty = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
`;

const Done = ({ tasks, uncomplete }) => (
  <div>
    <Title>Done</Title>
    <List>
      {tasks.length ? (
        tasks.map((task, index) => (
          <Task key={index}>
            <input onChange={() => uncomplete(index)} type="checkbox" /> {task}
          </Task>
        ))
      ) : (
        <Empty>Nothing here.</Empty>
      )}
    </List>
  </div>
);

export default Done;
