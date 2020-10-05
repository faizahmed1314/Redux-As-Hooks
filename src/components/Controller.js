import React from "react";

const Controller = ({ increment, decrement, reset }) => {
  return (
    <div>
      <button onClick={increment} className="btn btn-primary btn-lg mx-2">
        Increment
      </button>
      <button onClick={decrement} className="btn btn-secondary btn-lg mx-2">
        Decrement
      </button>
      <button onClick={reset} className="btn btn-danger btn-lg mx-2">
        Reset
      </button>
    </div>
  );
};
export default Controller;
