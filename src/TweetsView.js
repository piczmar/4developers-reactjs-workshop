import React from 'react';
import TweetsList from './TweetsList';
import TweetsForm from './TweetsForm';

class TweetsView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tweetsList: [],
    }
  }
addTweet = newTweet => {
  this.setState({
    tweetsList: [...this.state.tweetsList, newTweet]
  });
}

  render(){
    return(
      <div>
        <TweetsForm addTweet={this.addTweet} />
        <TweetsList title='My List' tweets={this.state.tweetsList}/>
      </div>
  );
  }
}
export default TweetsView;
