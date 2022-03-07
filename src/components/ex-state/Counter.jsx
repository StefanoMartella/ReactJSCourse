import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // Binding dei metodi
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  // Sinstassi sperimentale (non è necessario il binding)
  // increase = () => {
  //   this.setState((oldState) => ({ counter: oldState.counter + 1 }));
  // };

  // decrease = () => {
  //   this.setState((oldState) => ({ counter: oldState.counter - 1 }));
  // };

  // È necessario effettuare il binding se vengono referenziati senza ()
  // altrimenti è possibile utilizzare le arrow function
  increase() {
    this.setState((oldState) => ({ counter: oldState.counter + 1 }));
  }

  decrease() {
    this.setState((oldState) => ({ counter: oldState.counter - 1 }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>{counter}</h1>
        {/* <button onClick={this.increase}>Incrementa</button>
        <button disabled={this.state.counter === 0} onClick={this.decrease}>
          Decrementa
        </button> */}
      </div>
    );
  }
}

export default Counter;
