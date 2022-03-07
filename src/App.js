import React from "react";
import "./App.css";
import ShowMoreHook from "./components/ex-use-state/UseStateHook";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timerRef = React.createRef();
  }

  render() {
    return (
      <div>
        <ShowMoreHook maxLength={100}>
          Ut sit enim non officia quis culpa anim duis est minim officia
          reprehenderit fugiat laborum. Ullamco ea consectetur magna nostrud
          cupidatat cupidatat. Voluptate aliqua eu ullamco elit in dolor. Ipsum
          deserunt quis irure proident ad. Proident in aliquip deserunt id
          pariatur dolore ipsum nostrud est aute nulla est. Ut tempor esse ad
          ipsum deserunt incididunt est esse veniam ex. Velit velit ea ut duis
          sint consequat sint est elit sunt minim.
        </ShowMoreHook>
      </div>
    );
  }
}

export default App;
