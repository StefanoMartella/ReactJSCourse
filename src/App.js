import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import configureStore from "./components/ex-todo-redux/configureStore";
import Todo from "./components/ex-todo-redux/Todo";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    );
  }
}

export default App;
