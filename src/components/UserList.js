import React from "react";
import User from "./User";

const UserList = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          {props.users.map((user, i) => {
            return (
              <User
                key={user.id}
                image={user.avatar_url}
                url={user.html_url}
                userid={user.login}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
