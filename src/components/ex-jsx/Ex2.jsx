import React from "react";
import ReactDOM from "react-dom";

const div = React.createElement(
  "div",
  { className: "container" },
  "Hello World"
);

ReactDOM.render(div, document.getElementById("root"));
