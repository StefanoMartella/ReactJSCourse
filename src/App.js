import React from "react";
import "./App.css";
import styled from "styled-components";
import ComponentA from "./components/examples/styles/modules/componentA/ComponentA";
import ComponentB from "./components/examples/styles/modules/componentB/ComponentB";

const Container = styled.div`
  padding: 20px;
  border: 5px solid ${(props) => (props.isActive ? "blue" : "green")};
`;

const Container2 = styled(Container)`
  padding: 50px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  render() {
    return (
      <>
        <Container isActive={false}>
          <ComponentA />
          <ComponentB />
        </Container>
        <Container2 isActive={false}>
          <ComponentA />
          <ComponentB />
        </Container2>
      </>
    );
  }
}

export default App;
