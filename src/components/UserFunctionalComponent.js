import React from "react";

import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        className="functional-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click to increase count
      </button>
      <h3>Name: Akshay</h3>
      <h3>Location: Dehradun</h3>
      <h3>Contact: harsh@bob.com</h3>
      <h4>Card by Functional Component</h4>
    </div>
  );
};

export default User;
