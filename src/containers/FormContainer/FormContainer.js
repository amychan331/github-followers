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
      error: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value === "") {
      this.setState({ error: "Hmm... something is missing." });
    } else {
      this.setState({ error: "" });
    }
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
    .then(json => {
      if (json.message) {
        this.setState({ error: "User does not exist" });
      } else {
        this.setState({
          githubHandle:this.state.value,
          link: json.html_url,
          avatar: json.avatar_url,
          followersCount: json.followers,
        })
      }
    })
    .catch(err => this.setState({ error: "The search is not loading properly. Please try again." }));
  }

  render() {
    const followersExist = this.state.followersCount ? true : false;
    return (
      <main>
        <Form
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
        { this.state.error ?
          (<div className="error">{this.state.error}</div>) :
          <Account
            githubHandle={this.state.githubHandle}
            link={this.state.link}
            avatar={this.state.avatar}
            followersCount={this.state.followersCount} />
        }
        { followersExist ?
          (<FollowersContainer githubHandle={this.state.githubHandle} />) :
          null }
      </main>
    )
  }
}

export default FormContainer;