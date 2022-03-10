import React from "react";
import { CounterContext } from "./CounterContext";

class InnerChild1 extends React.Component {
  render() {
    return (
      <>
        <CounterContext.Consumer>
          {(value) => (
            <>
              <h1>Contatore: {value.counter}</h1>
              <button
                onClick={() => value.setCounter((oldCounter) => oldCounter + 1)}
              >
                Incrementa
              </button>
            </>
          )}
        </CounterContext.Consumer>
      </>
    );
  }
}

// InnerChild1.contextType = CounterContext;

export default InnerChild1;
