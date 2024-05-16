import React from "react";
import ReactDOM from "react-dom/client";

// React element => Object => When we render the element on DOM, it becomes HTMLElement

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Learning React library."
);

// JSX- HTML like or XML like syntax 

const jsxHeading = <h1 id="heading">Hello from JSX!</h1>;
console.log(jsxHeading);


const Title = () => (
    <h1>Hello from Functional COmponent</h1>
);

const Title2 = () => (
    <div className="heading">
        <Title />
        {jsxHeading}
        <h1>Yoo, ssup!</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Title2 />);
