import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('<App />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<App />);
    expect(Component.exists()).toEqual(true);
  });
});
