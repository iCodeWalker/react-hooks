import React, { useEffect, useState } from "react";
import axios from "axios";

// useEffect is just a function that will be called whenever the page re-renders, It is used to
// detect when the page gets re-renders, It is also used to handel side effects.

// useEffect is primarly used for making API calls at the time of page loads.

// 1. useEffect without dependency array will be called everytime a re-render or state change happens
// 2. useEffect with empty dependency array will be called only once at the first render of component.
// 3. useEffect with states or props in dependency array will be called only when that state or prop
// gets updated.

// recommended specifying what kind of states you want to depend your useEffect on.

const UseEffectTutorial = () => {
  const [data, setData] = useState([]);

  const [count, setCount] = useState(0); // count have no effect on useEffect hook.

  // whatever is inside the function will be called whenever the page gets render.
  // This useEffect will be called only once at the time of first load.
  useEffect(() => {
    console.log("Hello World");

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      Hello World <h1>{data[0]?.email}</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Here</button>
    </div>
  );
};

export default UseEffectTutorial;
