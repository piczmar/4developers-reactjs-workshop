import React from 'react';

class TweetsList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hello: 'Enter tweet in the input field',
      tweetsList: [],
      tweetName: ''
    }
  }

  addTweet =() => {
    this.setState({
      tweetsList: [...this.state.tweetsList, this.state.tweetName],
      tweetName: ''
    })
  }

  updateTweetName = e => {
    this.setState({
      tweetName : e.target.value,
    });

  }

  render(){
    return(
      <div>
      <h1>{this.props.title}</h1>
        <h2> {this.state.hello} </h2>
        <input value={this.state.tweetName} onChange={this.updateTweetName} />
        <ul>
          {this.state.tweetsList.map(t => <li key={t}> {t} </li>)}
        </ul>
        <button onClick={this.addTweet}>Click me</button>
      </div>
    );
  }

}

export default TweetsList;
