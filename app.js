import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="head">Namaste I am React Element 🚀</h1>;

const Title = () => (
  <h1 className="title">Learning React from Akshay Saini💥</h1>
);

const HeadComponent = function () {
  return (
    <div id="container">
      <Title />
      {heading}
      <h1 className="headComponent">I am functional component 🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HeadComponent />
  </>
);
