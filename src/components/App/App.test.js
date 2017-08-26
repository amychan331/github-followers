import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders header with both h1 and App-intro class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header')).toHaveLength(1);
    expect(wrapper.find('header h1')).toHaveLength(1);
    expect(wrapper.find('header .App-intro')).toHaveLength(1);
  });

  it('renders 1 <FormContainer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('FormContainer')).toHaveLength(1);
  });
})
