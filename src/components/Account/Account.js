import React from 'react';
import './Account.css';

const Account = (props) => {
  if (props.noUser) {
    return (
      <section className="error">User does not exist</ section>
    );
  } else if (props.githubHandle) {
    return (
      <section id="account">
        <img src={`${props.avatar}&s=100`} alt={props.githubHandle} />
        <div id="accountData">
          <p><a href={props.link}>@{props.githubHandle}</a></p>
          <p>{props.followersCount} followers</p>
        </div>
      </section>
    );
  } else {
    return null;
  }
}


export default Account;