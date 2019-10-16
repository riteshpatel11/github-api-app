import React from "react";

const User = props => {
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-image">
          <img src={`${props.image}`} alt="profilepic" />
        </div>
        <div className="card-content">
          <p>
            <strong>{`${props.userid}`}</strong>
          </p>
        </div>
        <div className="card-action">
          <a href={`${props.url}`}>Visit Profile</a>
        </div>
      </div>
    </div>
  );
};

export default User;
