import React, { useState, createContext } from "react";
import Login from "../utils/login";
import User from "../utils/user";

// useContext hook is used for passing data from parent to a deeply nested child without passing
// the props with data on every step of the component tree.

// It is used to manage App wide state in react app

export const UserContext = createContext(null);
// we create a context and this context is just like a collection of states or collection of information
// that we want to access throughout the whole tree of components.

const UseContextTutorial = () => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {/* <Login setUsername={setUsername} />
      <User username={username} /> */}

      {/* using context api we don't need to pass props to each single component */}

      <Login />
      <User />
    </UserContext.Provider>
  );
};

export default UseContextTutorial;
