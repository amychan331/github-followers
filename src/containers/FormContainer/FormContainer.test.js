import React from 'react';
import { shallow } from 'enzyme';
import FormContainer from './FormContainer';

describe('<FormContainer />', () => {
  it('renders main tag', () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper.find('main')).toHaveLength(1);
  });

  it('does not renders <FollowersContainer /> if there is only 0 follower', () => {
    const wrapper = shallow(<FormContainer />);
    wrapper.setState({
      githubHandl: "amychan331",
      followersCount: 0
    });
    expect(wrapper.find('main FollowersContainer')).toHaveLength(0);
  });

  it('does renders <FollowersContainer /> if over 1 follower', () => {
    const wrapper = shallow(<FormContainer />);
    wrapper.setState({
      githubHandl: "amychan331",
      followersCount: 100
    });
    expect(wrapper.find('main FollowersContainer')).toHaveLength(1);
  });
})
