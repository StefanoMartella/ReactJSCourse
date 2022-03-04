import React from "react";

class Animal extends React.Component {
  render() {
    return (
      <>
        <img
          width={150}
          height={150}
          src={this.props.imagePath}
          alt={this.props.imagePath}
        />
        <div>
          <span>Nome animale: </span>
          <span>{this.props.name}</span>
        </div>
        <div>
          <span>Può volare: </span>
          <span>{this.props.canFly ? "Sì" : "No"}</span>
        </div>
      </>
    );
  }
}

export default Animal;
