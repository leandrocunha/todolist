import React from 'react';
import styled from 'styled-components';
import Empty from './Empty';

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

  &:last-of-type {
    border: none;
    margin: 0;
  }
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

const ToDo = ({ complete, remove, tasks }) => (
  <div>
    <Title>To-Do</Title>
    <List>
      {tasks.length ? (
        tasks.map((task, index) => (
          <Task key={index}>
            <input onChange={() => complete(index)} type="checkbox" /> {task}
            <RemoveBtn onClick={() => remove(index, 'todo')}>delete</RemoveBtn>
          </Task>
        ))
      ) : (
        <Empty message="Great! You don't have tasks to-do." />
      )}
    </List>
  </div>
);

export default ToDo;
