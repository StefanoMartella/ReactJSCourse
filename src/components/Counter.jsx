import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(0);
  // const [counter2, setCounter2] = useState(0);

  return (
    <div>
      <h1>Counter 1: {counter}</h1>
      <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
        Incrementa
      </button>
      <button onClick={() => setCounter((oldCounter) => oldCounter - 1)}>
        Decrementa
      </button>

      {/* <h1>Counter 2: {counter2}</h1>
      <button onClick={() => setCounter2((oldCounter) => oldCounter + 1)}>
        Incrementa
      </button>
      <button onClick={() => setCounter2((oldCounter) => oldCounter - 1)}>
        Decrementa
      </button> */}
    </div>
  );
}

export default Counter;
