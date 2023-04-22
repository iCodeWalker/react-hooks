import React, { useState, useReducer } from "react";

// useReducer hook is basically an alternative or replacement to the use state hook.
// that is it allows developers to create varaibles, that when their values are changed
// the page will re-render to show those new values.

// Can be used in a situatiom where we have a bunch of state declarations,and many different states
// that are being altered in the same action. Try thinking about implementing it using useReducer.

// reducer is a fuction that manages what happens when you change your states.
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "TOGGLESHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducerTutorial = () => {
  //   const [count, setCount] = useState(0);
  //   const [showText, setShowText] = useState(false);

  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  // "state" a object that holds all our state and dispatch function that will be used to changed tha value
  // of our states. Dispatch will be callled whenever we want to alter anything inside state.

  const handleClick = () => {
    // setCount(count + 1);
    // setShowText(!showText);

    // we are creating two actions inside of a same click function. Altering value of a count state and
    // altering the value of showText state.

    // In this type of situation where a single click triggers a couple of actions, like we are trying
    // to change more than one action, we might want to consider using useReducer hook, so we don't
    // have to manage many different states and change them individually like above. But rather we can
    // have a single state that keeps track of all states that is going to be changed on click

    dispatch({ type: "INCREMENT" });
    dispatch({ type: "TOGGLESHOWTEXT" });
  };
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Click here</button>
      {/* {showText && <p>This is a text</p>} */}
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default UseReducerTutorial;
