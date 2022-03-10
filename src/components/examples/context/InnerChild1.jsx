import React from "react";
import { CounterContext } from "./CounterContext";

class InnerChild1 extends React.Component {
  render() {
    const { counter, setCounter } = this.context;

    return (
      <>
        {/* <CounterContext.Consumer>
          {({ counter, setCounter }) => ( */}
        <>
          <h1>Contatore: {counter}</h1>
          <button onClick={() => setCounter((oldCounter) => oldCounter + 1)}>
            Incrementa
          </button>
        </>
        {/* )}
        </CounterContext.Consumer> */}
      </>
    );
  }
}

InnerChild1.contextType = CounterContext;

export default InnerChild1;
