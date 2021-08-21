import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [newUser, setNewUser] = useState(users[0])
  const [likes, setLikes] = useState(0)
//how do we set initial value to current favorites for each tweet
  function showUserTweets(user) {
    setNewUser(user)
  }
  function handleTweetLike(user) {
    const newTweet = tweets.map((tweet) => {
      if (tweet.id === id) {
        return{
          ...tweet, 
        }
      }
    })
    setLikes(likes + 1)
    console.log(likes)
  }
  //  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} showUserTweets={showUserTweets} setNewUser={setNewUser} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList handleTweetLike={handleTweetLike} user={newUser}  />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
