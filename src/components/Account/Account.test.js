import React from 'react';
import { shallow } from 'enzyme';
import Account from './Account';

describe('<Account />', () => {
  it('renders section with error class when ono user found', () => {
    const props = { noUser: true };
    const wrapper = shallow(<Account {...props}/>);
    expect(wrapper.find('section').hasClass('error')).toEqual(true);
  });

  it('renders search result in div account when test data entered', () => {
    const props = {
      avatar: "https://avatars0.githubusercontent.com/u/6743248?v=4",
      githubHandle: "amychan331",
      link: "https://github.com/amychan331",
      followersCount: 6,
    };
    const wrapper = shallow(<Account {...props}/>);
    expect(wrapper.find('section#account')).toHaveLength(1);
  });
})