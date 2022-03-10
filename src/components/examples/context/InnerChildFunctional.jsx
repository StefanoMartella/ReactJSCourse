import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function InnerChildFunctional() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <>
      <h1>Contatore: {counter}</h1>
      <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
        Incrementa
      </button>
    </>
  );
}

export default InnerChildFunctional;
