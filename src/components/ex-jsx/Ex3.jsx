import React from "react";
import ReactDOM from "react-dom";

// give a brief introduction to key prop
const hello = React.createElement("span", { key: "hello" }, "Hello");
const world = React.createElement("span", { key: "world" }, "World");
const div = React.createElement("div", { className: "container" }, [
  hello,
  " ",
  world,
]);

ReactDOM.render(div, document.getElementById("root"));
