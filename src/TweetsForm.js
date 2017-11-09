import React from 'react';

class TweetsForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tweetName: ''
    }
  }

  addTweet =() => {
      this.props.addTweet(this.state.tweetName);
  }

  updateTweetName = e => {
    this.setState({
      tweetName : e.target.value,
    });

  }

  render(){
    return(
      <div>
        <h2> {this.state.hello} </h2>
        <input value={this.state.tweetName} onChange={this.updateTweetName} />
        <button onClick={this.addTweet}>Click me</button>
      </div>
    );
  }

}

export default TweetsForm;
