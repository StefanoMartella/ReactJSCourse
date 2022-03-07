import React from "react";

class AutoCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Inside interval");

      this.setState((oldState) => ({
        counter: oldState.counter + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    console.log("Unmounting");
    // È necessario rimuovere l'intervallo altrimenti
    // avremmo memory leak perché la callback passata
    // al metodo setInterval continuerebbe ad essere
    // invocata
    clearInterval(this.interval);
  }

  render() {
    return <h1>{this.state.counter}</h1>;
  }
}

export default AutoCounter;
