import React from 'react';
import { shallow } from 'enzyme';
import ToDo from '../../components/ToDo';
import Empty from '../../components/Empty';

const initialState = { todo: [], done: [] };

describe('<ToDo />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<ToDo tasks={initialState.todo} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should complete task', () => {
    const mockFnComplete = jest.fn();
    const Component = shallow(
      <ToDo tasks={initialState.todo} complete={mockFnComplete} />
    );

    Component.setProps({ tasks: ['task 1', 'task 2', 'task 3'] });
    Component.find('input').forEach((component, index) => {
      component.simulate('change');
      expect(mockFnComplete).toBeCalledWith(index);
    });
  });

  it('should delete task', () => {
    const mockFnDelete = jest.fn();
    const Component = shallow(
      <ToDo tasks={initialState.todo} remove={mockFnDelete} />
    );

    Component.setProps({ tasks: ['task 1', 'task 2', 'task 3'] });
    Component.find('button').forEach((component, index) => {
      component.simulate('click');
      expect(mockFnDelete).toBeCalledWith(index, 'todo');
    });
  });

  it('should not render Empty component', () => {
    const Component = shallow(<ToDo tasks={initialState.todo} />);

    Component.setProps({ tasks: ['task 1', 'task 2', 'task 3'] });
    expect(Component.find(Empty).length).toEqual(0);
  });

  it('should render Empty component', () => {
    const Component = shallow(<ToDo tasks={initialState.todo} />);

    Component.setProps({ tasks: [] });
    expect(Component.find(Empty).length).toEqual(1);
  });
});
