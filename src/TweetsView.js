import React from 'react';
import TweetsList from './TweetsList';
import TweetsForm from './TweetsForm';

class TweetsView extends React.Component{

  render(){
    return(
      <div>
      
        <TweetsList title='My List'/>
      </div>
  );
  }
}
export default TweetsView;
