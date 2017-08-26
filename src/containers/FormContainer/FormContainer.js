import React, {Component} from 'react';
import Form from '../../components/Form/Form';
import Account from '../../components/Account/Account';
import FollowersContainer from '../../containers/FollowersContainer/FollowersContainer';

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      handleAvator: '',
      githubHandle: '',
      link: '',
      followersCount: 0,
      noUser: false,
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.value}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    .then(res => res.json())
    .then(json => this.setState({
        githubHandle:this.state.value,
        link: json.html_url,
        avatar: json.avatar_url,
        followersCount: json.followers,
        noUser: json.message,
      }))
    .catch(err => this.setState({error: err}));
  }

  render() {
    const followersExist = this.state.followersCount ? true : false;
    return (
      <main>
        <Form
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}/>
        { this.state.error ?
          (<div className="error">The search is not loading properly. Please try again.</div>) :
          null
        }
        <Account
          githubHandle={this.state.githubHandle}
          link={this.state.link}
          avatar={this.state.avatar}
          followersCount={this.state.followersCount}
          noUser={this.state.noUser}/>
        { followersExist ?
          (<FollowersContainer githubHandle={this.state.githubHandle} />) :
          null }
      </main>
    )
  }
}

export default FormContainer;