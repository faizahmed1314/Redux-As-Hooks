import React from "react";
import Counter from "./Counter";
import "./App.css";
import { CountProvider } from "../providers/CountProvider";
const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <CountProvider>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 offset-sm-2">
              <h1>Context + Hooks = Forget Redux</h1>
              <Counter
              // count={count}
              // increament={() => setCount(count + 1)}
              // decreament={() => setCount(count - 1)}
              // reset={() => setCount(0)}
              />
            </div>
          </div>
        </div>
      </div>
    </CountProvider>
  );
};

export default App;
