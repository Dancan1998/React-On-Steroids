import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");
  const handleclick = () => {
    if (text === "random world") {
      setText("hello world");
    } else {
      setText("random world");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button className="btn" onClick={handleclick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
