import React from "react";
import "./App.css";
import CounterProvider from "./components/examples/context/CounterContext";
import InnerChild1 from "./components/examples/context/InnerChild1";
import InnerChildFunctional from "./components/examples/context/InnerChildFunctional";

class App extends React.Component {
  render() {
    return (
      <CounterProvider>
        <InnerChild1 />
        <InnerChildFunctional />
      </CounterProvider>
    );
  }
}

export default App;
