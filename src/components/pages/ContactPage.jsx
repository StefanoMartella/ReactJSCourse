import React from "react";
import { Navigate } from "react-router-dom";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigateTo: null,
    };
  }

  render() {
    const { navigateTo } = this.state;

    if (navigateTo) {
      return <Navigate to={navigateTo} />;
    }

    return (
      <main className="vh-100">
        <h1>Contact page</h1>
        <button onClick={() => this.setState({ navigateTo: "/" })}>
          Vai alla home
        </button>
      </main>
    );
  }
}

export default ContactPage;
