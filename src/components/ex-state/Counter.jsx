import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>{counter}</h1>
        <button
          onClick={() =>
            this.setState((oldState) => ({ counter: oldState.counter + 1 }))
          }
        >
          Incrementa
        </button>
        <button
          disabled={this.state.counter === 0}
          onClick={() =>
            this.setState((oldState) => ({ counter: oldState.counter - 1 }))
          }
        >
          Decrementa
        </button>
      </div>
    );
  }
}

export default Counter;
