import { useCallback, useState } from "react";
import Child from "../utils/Child";

// using useCallback we can store a memoized function itself, so the function does not gets
// created on every render or re-render of the component.

// using callback we want to access the function

const UseCallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <Child returnComment={returnComment} />

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default UseCallbackTutorial;
