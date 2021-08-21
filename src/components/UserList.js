import React from "react";
import UserCard from "./UserCard";

function UserList({users, showUserTweets, setNewUser, newUser}) {
  
  return (
    <div className="ui cards">
      {users.map((user) => (
        <UserCard
          key={user.id}
          handleUserClick={() => showUserTweets()}
          {...user}
          setNewUser={setNewUser}
          newUser={user}
          showUserTweets={showUserTweets}
        />
      ))}
    </div>
  );
}

export default UserList;
