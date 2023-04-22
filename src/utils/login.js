import React, { useContext } from "react";
import { UserContext } from "../components/useContextTutorial";

// const Login = ({ setUsername }) => {
const Login = () => {
  const { setUsername } = useContext(UserContext);

  return (
    <div>
      <input
        placeholder="Enter Name"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
};

export default Login;
