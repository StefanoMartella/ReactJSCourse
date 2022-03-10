import { createContext } from "react";
import { useState } from "react";

export const CounterContext = createContext({
  counter: 0,
  setCounter: () => {},
});

function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
