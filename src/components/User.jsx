import React, { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        func increase count
      </button>
    </div>
  );
};

export default User;
