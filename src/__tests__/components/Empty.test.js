import React from 'react';
import { shallow } from 'enzyme';
import Empty from '../../components/Empty';

describe('<Done />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Empty />);
    expect(Component.exists()).toEqual(true);
  });
});
