import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Child1 from "./components/Child1";
import configureStore from "./components/redux/configureStore";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Child1 />
      </Provider>
    );
  }
}

export default App;
