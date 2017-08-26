import React from 'react';
import { shallow} from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  it('renders form', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('form')).toHaveLength(1);
  });
})
