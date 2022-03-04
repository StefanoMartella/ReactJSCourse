import React from "react";
import Address from "./Address";

class Company extends React.Component {
  render() {
    const { name, address } = this.props;

    return (
      <div>
        <p>Azienda:</p>
        <div>Nome: {name}</div>
        <Address showTitle={false} {...address} />
      </div>
    );
  }
}

export default Company;
