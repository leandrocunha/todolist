import React from 'react';
import { shallow } from 'enzyme';
import Main from '../../components/Main';

describe('<Main />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Main />);
    expect(Component.exists()).toEqual(true);
  });

  it('should complete task', () => {
    const Component = shallow(<Main />);
    const completeTask = jest.spyOn(Component.instance(), 'completeTask');

    Component.setState({ todo: ['task 1', 'task 2'], done: [] });
    completeTask(1);
    expect(Component.state()).toEqual({
      ...Component.state(),
      todo: ['task 1'],
      done: ['task 2']
    });
  });

  it('should uncomplete task', () => {
    const Component = shallow(<Main />);
    const uncompleteTask = jest.spyOn(Component.instance(), 'uncompleteTask');

    Component.setState({ todo: [], done: ['task 1', 'task 2'] });
    uncompleteTask(1);
    expect(Component.state()).toEqual({
      ...Component.state(),
      todo: ['task 2'],
      done: ['task 1']
    });
  });

  it('should remove task from todo', () => {
    const Component = shallow(<Main />);
    const remove = jest.spyOn(Component.instance(), 'remove');

    Component.setState({ todo: ['task 1', 'task 2'] });
    remove(1, 'todo');
    expect(Component.state()).toEqual({
      ...Component.state(),
      todo: ['task 1']
    });
  });

  it('should remove task from done', () => {
    const Component = shallow(<Main />);
    const remove = jest.spyOn(Component.instance(), 'remove');

    Component.setState({ done: ['task 1', 'task 2'] });
    remove(1, 'done');
    expect(Component.state()).toEqual({
      ...Component.state(),
      done: ['task 1']
    });
  });
});
