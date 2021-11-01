import React from "react";

const UserProfile = (props) => {
  return <div>{props.match.params.username}</div>;
};

export default UserProfile;
