import React, { useLayoutEffect, useEffect, useRef } from "react";

// Both useLayoutEffect and useEffect are very similar. Almost identical, but there is a fundamental
// difference:

// 1. useLayoutEffect is fundamentaly called before useEffect.
// 2. useLayoutEffect is called in the early stage of page rendering than the useEffect.

// when react recognises that it needs to render the component it goes throught many different stages.
// useEffect is called after everything is rendered into the page and shown to the user in contrast the
// useLayoutEffect is called before the stuff is actually printed to the user.

// useLayoutEffect is used in cases where we want to change the layout of the application before it actually
// prints out to the user.

// It is mostly used for UI related tasks.

const UseLayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    // console.log("Use Layout Effect");
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    // console.log("Use Effect");
    inputRef.current.value = " Hello";
  }, []);

  return (
    <div>
      use Layout Effect
      <input placeholder="Enter here" ref={inputRef} value="Vaibhav" />
    </div>
  );
};

export default UseLayoutEffectTutorial;
