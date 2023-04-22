import React, { useState } from "react";

// useState hook is used to handle data and re-rendering in functional based components.
// before hooks we were not bale to handle data in functional components, but with the introduction of
// hooks, we can use state in functional components.

const UseStateTutorial = () => {
  // the counter is changing using this function but we are not telling the react to to re-render the
  // web page and show the new value every time the variable counter changes its value.

  // to overcome this we have to use state using useState hook for functional components
  //   let counter = 1;

  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  const handleIncrement = () => {
    // counter = counter + 1;
    // to change the value of state we can't do like this, instead we have to use the function that is provided
    // by the useState hook.

    setCount(count + 1);
    // now whenever the value of state changes react knows that the webpage should be re-rendered,
    // every single element that uses that state.
  };
  return (
    <div>
      {count} <button onClick={handleIncrement}> Increment</button>
      <input placeholder="Enter here" onChange={handleChange} />
      {inputValue}
    </div>
  );
};

export default UseStateTutorial;
