import React from "react";
import axios from "axios";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: true,
      error: null,
    };
    this.controller = new AbortController();
  }

  componentDidMount() {
    axios
      .get("https://random-data-api.com/api/users/random_user", {
        signal: this.controller.signal,
      })
      .then((result) => {
        this.setState({ user: result.data, isLoading: false, error: null });
      })
      .catch((error) => {
        this.setState({ user: null, isLoading: false, error });
      });
  }

  componentWillUnmount() {
    this.controller.abort();
  }

  render() {
    const { user, isLoading, error } = this.state;

    if (isLoading) {
      return <h1>Caricamento in corso...</h1>;
    } else if (error) {
      return <h1>Errore</h1>;
    } else {
      return (
        <div>
          <img src={user.avatar} height={150} width={150} alt="avatar" />
          <h1>
            {user.first_name} {user.last_name}
          </h1>
          <h1>Indirizzo: {user.address.city}</h1>
        </div>
      );
    }
  }
}

export default User;
