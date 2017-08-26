import React, {Component} from 'react';
import Followers from '../../components/Followers/Followers';

class FollowersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      page: 0,
      moreExist: true,
      error: '',
    };
    this.handleMore = this.handleMore.bind(this);
  }

  componentWillMount() {
    // Initial Load
    this.loadFollowers(this.props.githubHandle);
  }

  componentWillReceiveProps(nextProps) {
    // Trigger reload when new prop is received
    if (nextProps.githubHandle !== this.props.githubHandle) {
      this.loadFollowers(nextProps.githubHandle, true);
    }
  }

  handleMore(e) {
    // Trigger reload when load more button is click
    e.preventDefault();
    this.loadFollowers(this.props.githubHandle);
  }

  loadFollowers(githubHandle, newSearch=false) {
    // if new search, page & followers reset to default value of their this.state counterpart
    const page = newSearch ? 1 : (this.state.page + 1);
    const followers = newSearch ? [] : this.state.followers;

    fetch(`https://api.github.com/users/${githubHandle}/followers?page=${page}`, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/vnd.github.v3+json'
      })
    })
    .then(res => {
      // this determines if load more button should exist
      if (!res.headers.get("Link") || res.headers.get("Link").indexOf('rel="next"') === -1 ) {
        this.setState({moreExist: false});
      } else {
        this.setState({moreExist: true});
      }
      return res.json()})
    .then(json => {
      this.setState({
        followers: followers.concat(json),
        page: page,
      })
    })
    .catch(err => this.setState({error: err}))
  }

  render() {
    return (
      <section id="followers">
        { this.state.error ?
          (<div className="error">The search is not loading properly. Please try again.</div>) :
          null
        }
        <Followers followers={this.state.followers} />
        { this.state.moreExist ? (<button type='button' onClick={this.handleMore}>Load More</button>) : null }
      </section>
    )
  }
}

export default FollowersContainer;