import React from "react";
import Controller from "./Controller";

const Counter = ({ count, increament, decreament, reset }) => {
  return (
    <div>
      <div className="card card-body text-center my-3">
        <h3>Count = {count}</h3>
      </div>
      <div className="card card-body text-center">
        <Controller
          increment={increament}
          decrement={decreament}
          reset={reset}
        />
      </div>
    </div>
  );
};

export default Counter;
