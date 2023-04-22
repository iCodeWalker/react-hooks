import React, { useRef } from "react";

// useRef hook is the easiest way to access and manipulate dom elements. To add some functionality
// to some dom elements.

// Never access dom elements like document.getElementById("") in react.
// As we don't access dom elements directly in react because we use virtual dom in react,
// the whole point is that we should not manipulate individual elements, the state of our application
// should be updating every thing for you.

// For some scenerios where we need to manipulate or add some funcitonality to the certain dom elements
// we use useRef hook.

const UseRefTutorial = () => {
  const inputRef = useRef(null);

  const onClickHandler = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus();

    // to clear the input field on click of button
    // inputRef.current.value = "";
  };

  // here we will be manipulating the dom, or accessing a dom element in this case the input element
  // and tell our browser to focus on input element element whenever we click on the button

  return (
    <div>
      <h1>Hello World</h1>
      <input type="text" placeholder="Enter here" ref={inputRef} />
      <button onClick={onClickHandler}>Change Name</button>
    </div>
  );
};

export default UseRefTutorial;
