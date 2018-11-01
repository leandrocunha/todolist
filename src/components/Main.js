import React, { Component } from 'react';
import styled from 'styled-components';
import Done from './Done';
import Form from './Form';
import ToDo from './ToDo';
import clearCheckeds from '../utils';

const Notepad = styled.div`
  width: 450px;
`;

const Title = styled.h1`
  color: #111;
  font-size: 32px;
  font-weight: 600;
  margin: 50px 0 15px 0;
`;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], done: [] };
    this.addTask = this.addTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.uncompleteTask = this.uncompleteTask.bind(this);
    this.remove = this.remove.bind(this);
  }

  addTask(e) {
    e.preventDefault();

    const task = document.querySelector('[name=task]');
    const newTasks = this.state.todo;

    newTasks.push(task.value);
    task.value = '';
    this.setState({ todo: newTasks });
  }

  completeTask(index) {
    const { done, todo } = this.state;
    const completed = todo[index];
    const newTasks = done;

    newTasks.push(completed);
    todo.splice(index, 1);

    this.setState({ todo, done: newTasks });
    clearCheckeds();
  }

  uncompleteTask(index) {
    const { done, todo } = this.state;
    const uncompleted = done[index];
    const newTasks = todo;

    newTasks.push(uncompleted);
    done.splice(index, 1);

    this.setState({ todo: newTasks, done });
    clearCheckeds();
  }

  remove(index, list) {
    const tasks = this.state[list];

    tasks.splice(index, 1);
    this.setState({ [list]: tasks });
  }

  render() {
    const { done, todo } = this.state;

    return (
      <Notepad>
        <Title>Re:Minder</Title>
        <Form submit={this.addTask} />
        <ToDo tasks={todo} complete={this.completeTask} remove={this.remove} />
        <Done
          tasks={done}
          uncomplete={this.uncompleteTask}
          remove={this.remove}
        />
      </Notepad>
    );
  }
}

export default Main;
