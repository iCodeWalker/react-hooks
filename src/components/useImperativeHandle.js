import React, { useRef } from "react";
import Button from "../utils/Button";

// useImperativeHook allows us to define 'functions based on a ref' that can be called using that ref.

// useImperativeHook uses useRef hook to work.

// useImperativeHook can be used to alter the state of a child even when the state exists inside the child
// so we are basically altering the state of a child.

// It basically allows us to create functions that if we pass a reference, it will be able to be called
// from a parent component.

const UseImperativeHandleTutorial = () => {
  const buttonRef = useRef(null); // we can't pass ref directly to a component.
  // Ref can be passed to HTML elements directly, for components to be able to receive refs we have to add
  // forwardRef to the components

  return (
    <div>
      <button onClick={buttonRef.current?.alterToggle}>
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default UseImperativeHandleTutorial;
