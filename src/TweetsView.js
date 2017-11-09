import React from 'react';
import TweetsList from './TweetsList';
import TweetsForm from './TweetsForm';

class TweetsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetsList: [],
    }
  }

  fetchTweets = () => {
    fetch('http://localhost:3001/tweets?user=piczmar').then(response => {
      response.json().then(r => {
        console.log(r);
        this.setState({ tweetsList: r.tweets });
      })
    });
  };

  // component hook
  componentDidMount() {
    //  this.addTweet('first tweet');
    this.fetchTweets();
  }

  addTweet = newTweet => {

    fetch('http://localhost:3001/createTweet?user=piczmar', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tweet: { title: newTweet } }),
    }).then(response => {
      this.fetchTweets();
    });

    this.setState({
      tweetsList: [...this.state.tweetsList, newTweet]
    });
  }

  render() {
    return (
      <div>
        <TweetsForm addTweet={this.addTweet} />
        <TweetsList title='My List' tweets={this.state.tweetsList} />
      </div>
    );
  }
}
export default TweetsView;
