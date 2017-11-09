import React from 'react';
import PropTypes from 'prop-types';

class TweetsList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hello: 'Enter tweet in the input field',
      tweetsList: [],
      tweetName: ''
    }
  }

  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
        <ul>
          {this.props.tweets.map(t => <li key={t}> {t} </li>)}
        </ul>
      </div>
    );
  }

}


TweetsList.propTypes = {
  tweets: PropTypes.array
};

TweetsList.defaultProps = {
  tweets: []
}

export default TweetsList;
