import React from 'react';
import { shallow } from 'enzyme';
import FollowersContainer from './FollowersContainer';

describe('<FollowersContainer />', () => {
  it('renders div followers', () => {
    const wrapper = shallow(<FollowersContainer />);
    expect(wrapper.find('#followers')).toHaveLength(1);
  });

  it('button does not render if moreExist is false', () => {
    const wrapper = shallow(<FollowersContainer />);
    wrapper.setState({moreExist: false});
    expect(wrapper.find('section button')).toHaveLength(0);
  });

  it('button render if moreExist is true', () => {
    const wrapper = shallow(<FollowersContainer />);
    wrapper.setState({moreExist: true});
    expect(wrapper.find('section button')).toHaveLength(1);
  });
})
