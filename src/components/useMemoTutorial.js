import React from "react";
import axios from "axios";
// useMemo is an advanced hook used for optimizing react applications.

// Main reason to use this hook is to increase performance and decrease latency on huge or expensive
// computations that we make in our application.

// with useMemo we store a value that is memoized from a function that returns some sort of value.
// we can store a value in the variable.

import { useEffect, useState, useMemo } from "react";

const UseMemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // This function by default will get recreated at re-render, if we had a different state in out app and it
  // gets changed, it will trigger a re-render of whole application. This function will get created again
  // and by default if a function is created again it will also recompute all of this information.

  // So this function will recompute every single time a state change in our application.
  //  Which is not efficient in big data.

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("-------- longest name computed --------");

    return longestName;
  };

  // useMemo() : first argument is the function and it should return some value

  const getLongestName = useMemo(() => findLongestName(data), [data]);
  // findLongestName function will be recomputed only when the data in the dependency array changes.
  // if the data remains same the computation is not performed and the memoized value will be retained.

  // and no re-render will be performed.

  return (
    <div className="App">
      <div> {getLongestName} </div>

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle Text
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};

export default UseMemoTutorial;
