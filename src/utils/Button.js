import React, { forwardRef, useImperativeHandle, useState } from "react";

// Ref can be passed to HTML elements directly, for components to be able to receive refs we have to add
// forwardRef to the components

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    // this function returns an object and inside here we are going to pass functions that we might want to
    // create, and access through our parent
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button;
