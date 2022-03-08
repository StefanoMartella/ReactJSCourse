import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    this.isRunning = false;
  }

  startTimer() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.setState((oldState) => {
          return { timer: oldState.timer + 1 };
        });
      }, 1000);
    }
  }

  stopTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.isRunning = false;
    clearInterval(this.interval);
    this.setState({ timer: 0 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <h1>{this.state.timer}</h1>
        <button onClick={() => this.startTimer()}>Avvia</button>
        <button onClick={() => this.stopTimer()}>Stop</button>
        <button onClick={() => this.resetTimer()}>Reset</button>
      </>
    );
  }
}

export default Timer;
