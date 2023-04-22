import React, { useContext } from "react";
import { UserContext } from "../components/useContextTutorial";

// const User = ({ username }) => {
const User = () => {
  const { username } = useContext(UserContext);
  return (
    <div>
      <h1> {username}</h1>
    </div>
  );
};

export default User;
