import { useContext } from "react";
//import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please logIn</div>;

  return <div>Welcome: {user.username}</div>;
}

export default Profile;
