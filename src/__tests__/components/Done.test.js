import React from 'react';
import { shallow } from 'enzyme';
import Done from '../../components/Done';
import Empty from '../../components/Empty';

const initialState = { todo: [], done: [] };

describe('<Done />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Done tasks={initialState.done} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should uncomplete task', () => {
    const mockFnUncomplete = jest.fn();
    const Component = shallow(
      <Done tasks={initialState.done} uncomplete={mockFnUncomplete} />
    );

    Component.setProps({ tasks: ['task 1', 'task 2', 'task 3'] });
    Component.find('input').forEach((component, index) => {
      component.simulate('change');
      expect(mockFnUncomplete).toBeCalledWith(index);
    });
  });

  it('should delete task', () => {
    const mockFnDelete = jest.fn();
    const Component = shallow(
      <Done tasks={initialState.done} remove={mockFnDelete} />
    );

    Component.setProps({ tasks: ['task 1', 'task 2', 'task 3'] });
    Component.find('button').forEach((component, index) => {
      component.simulate('click');
      expect(mockFnDelete).toBeCalledWith(index, 'done');
    });
  });

  it('should not render Empty component', () => {
    const Component = shallow(<Done tasks={initialState.done} />);

    Component.setProps({ tasks: ['task 1', 'task 2', 'task 3'] });
    expect(Component.find(Empty).length).toEqual(0);
  });

  it('should render Empty component', () => {
    const Component = shallow(<Done tasks={initialState.done} />);

    Component.setProps({ tasks: [] });
    expect(Component.find(Empty).length).toEqual(1);
  });
});
