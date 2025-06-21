import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="head">Namaste I am JSX 🚀</h1>;

const HeadComponent = function () {
  return <h1 className="headComponent">I am functional component 🚀</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {heading}
    <HeadComponent />
  </>
);
