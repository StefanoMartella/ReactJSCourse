import React from "react";
import "./App.css";
import Timer from "./components/ex-ref/Timer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef();
  }

  render() {
    return (
      <div>
        <Timer ref={this.timerRef} />
        <button onClick={() => this.timerRef.current.startTimer()}>
          Avvia
        </button>
        <button onClick={() => this.timerRef.current.stopTimer()}>Stop</button>
        <button onClick={() => this.timerRef.current.reset()}>Reset</button>
      </div>
    );
  }
}

export default App;
