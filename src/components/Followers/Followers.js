import React from 'react';
import './Followers.css';

const Followers = (props) => (
  <ul>
    {props.followers.map((follower) =>
      <li key={follower.login} className="follower">
        <img src={`${follower.avatar_url}&s=50`} alt={follower.githubHandle} />
        <span><a href={follower.html_url}>{follower.login}</a></span>
      </li>
    )}
  </ul>
);

export default Followers;