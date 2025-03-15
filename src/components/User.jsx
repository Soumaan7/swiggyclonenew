import React, { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>{count}</h2>
    </div>
  );
};

export default User;
