import React from "react";
import "./App.css";
import Counter from "./components/ex-state/Counter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCounterVisible: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.isCounterVisible === true ? <Counter /> : null}
        <button
          onClick={() =>
            this.setState((oldState) => ({
              isCounterVisible: !oldState.isCounterVisible,
            }))
          }
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
