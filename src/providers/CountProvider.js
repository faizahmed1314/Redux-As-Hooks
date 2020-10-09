import React, { createContext, useReducer } from "react";
import reducer, { createActions } from "../reducers/count-reducer";
const countContext = createContext();

const CountProvider = (props) => {
  const [count, dispatch] = useReducer(reducer, 0);
  const actions = createActions(dispatch);

  return (
    <countContext.Provider value={{ count, ...actions }}>
      {props.children}
    </countContext.Provider>
  );
};
export { CountProvider, countContext };
