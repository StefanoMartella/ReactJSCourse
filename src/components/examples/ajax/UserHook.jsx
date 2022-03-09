import { useEffect, useRef, useState } from "react";
import axios from "axios";

function UserHook() {
  const [fetchState, setFetchState] = useState({
    user: null,
    isLoading: true,
    error: null,
  });
  const controller = useRef();

  useEffect(() => {
    controller.current = new AbortController();

    axios
      .get("https://random-data-api.com/api/users/random_user", {
        signal: controller.current.signal,
      })
      .then((result) => {
        setFetchState({ user: result.data, isLoading: false, error: null });
      })
      .catch((error) => {
        setFetchState({ user: null, isLoading: false, error });
      });

    return () => {
      controller.current.abort();
    };
  }, []);

  if (fetchState.isLoading) {
    return <h1>Caricamento in corso...</h1>;
  } else if (fetchState.error) {
    return <h1>Errore</h1>;
  } else {
    return (
      <div>
        <img
          src={fetchState.user.avatar}
          height={150}
          width={150}
          alt="avatar"
        />
        <h1>
          {fetchState.user.first_name} {fetchState.user.last_name}
        </h1>
        <h1>Indirizzo: {fetchState.user.address.city}</h1>
      </div>
    );
  }
}

export default UserHook;
