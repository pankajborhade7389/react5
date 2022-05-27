import React from "react";
import './style.css';

function App() {
  return (
    <div className="components">

      <h1>Higher Order Component :-</h1>
          <ul type="disc">
              <li>
              A higher-order component (HOC) is an advanced technique in React for reusing component logic.
              </li>
              <br></br>
              <li>
              HOC is a function that takes a component and returns a new component.
              </li>
          </ul>

          <h1>Pure Component :-</h1>
          <ul type="disc">
              <li>
              A React component is considered pure if it renders the same output for the same state and props
              </li>
              <br></br>
              <li>
              Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or Not.
              </li>
              <br></br>
              <li>
              If the previous value of state or props and the new value of state or props is same then component will not re-render.
              </li>
          </ul>   
             
      </div>
  );
}

export default App;