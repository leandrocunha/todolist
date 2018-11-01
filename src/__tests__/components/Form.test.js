import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../components/Form';

describe('<Form />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Form />);
    expect(Component.exists()).toEqual(true);
  });

  it('should submit form', () => {
    const mockFnSubmit = jest.fn();
    const Component = shallow(<Form submit={mockFnSubmit} />);

    Component.simulate('submit');
    expect(mockFnSubmit).toBeCalled();
  });
});
