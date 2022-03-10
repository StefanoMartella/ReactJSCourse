import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      selected: "option1",

      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.name.length === 0) {
      this.setState({ error: "Il nome è richiesto" });
    } else {
      console.log(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name:
            <br />
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
            />
          </label>
        </div>
        <div>
          <label>
            Descrizione:
            <br />
            <textarea
              value={this.state.description}
              onChange={this.handleChange}
              type="text"
              name="description"
            />
          </label>
        </div>
        <div>
          <label>
            Categoria:
            <br />
            <select
              name="selected"
              onChange={this.handleChange}
              value={this.state.selected}
            >
              <option value="option1">Opzione 1</option>
              <option value="option2">Opzione 2</option>
              <option value="option3">Opzione 3</option>
              <option value="option4">Opzione 4</option>
            </select>
          </label>
        </div>

        <div>
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
        </div>

        <button style={{ marginTop: 20 }} type="submit">
          Invia
        </button>
      </form>
    );
  }
}

export default Form;
