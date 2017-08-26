import React from 'react';
import { shallow } from 'enzyme';
import Followers from './Followers';

describe('<Followers />', () => {
  it('renders followers list with test data', () => {
    const props = {
      followers : [{
        login: "amychan331",
        avatar_url: "https://avatars0.githubusercontent.com/u/6743248?v=4",
        githubHandle: "amychan331",
        html_url: "https://github.com/amychan331"
      }],
    };
    const wrapper = shallow(<Followers {...props}/>);
    expect(wrapper.find('ul li')).toHaveLength(1);
  });
})