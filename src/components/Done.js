import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #111;
  font-size: 20px;
  font-weight: 600;
  margin: 50px 0 15px 0;
`;

const List = styled.div`
  background-color: #fff;
  border: #cecece 1px solid;
  border-radius: 10px;
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
  color: #cecece;
  font-size: 12px;
  padding: 30px 0;
  text-transform: uppercase;
  text-align: center;
`;

const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  float: right;
  font-weight: 300;
  font-size: 11px;
  padding: 5px 0;
  color: #cecece;
  text-transform: uppercase;

  &:hover {
    color: #f00;
  }
`;

const Done = ({ remove, tasks, uncomplete }) => (
  <div>
    <Title>Done</Title>
    <List>
      {tasks.length ? (
        tasks.map((task, index) => (
          <Task key={index}>
            <input onChange={() => uncomplete(index)} type="checkbox" /> {task}
            <RemoveBtn onClick={() => remove(index, 'done')}>delete</RemoveBtn>
          </Task>
        ))
      ) : (
        <Empty>Nothing here.</Empty>
      )}
    </List>
  </div>
);

export default Done;
