import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World"
);
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

// Nested parent-child

// Reference
{
  /* <div id="parent">
<div id="child">
    <h1>This is a h1 tag</h1>
</div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    // Siblings/Array of children
    [
      React.createElement("h1", {}, "This is a h1 tag")      ,
      React.createElement("h2", {}, "This is a h2 tag"),
    ]
  )
);     

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 

