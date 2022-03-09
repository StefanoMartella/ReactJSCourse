import React from "react";
import { useEffect } from "react";
import { Card, Placeholder, Spinner } from "react-bootstrap";
import axios from "axios";

function PokemonItem({ item }) {
  const [fetchState, setFetch] = React.useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get(item.url, {
        signal: controller.signal,
      })
      .then(({ data }) =>
        // Timeout to show the loading effect
        setTimeout(() => {
          setFetch({ loading: false, error: null, data });
        }, 1000)
      )
      .catch((error) => setFetch({ loading: false, error, data: [] }));

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-2" style={{ flexBasis: "20%" }}>
      <Card>
        {fetchState.loading ? (
          <>
            <Spinner
              className="absolute bottom-0 top-0 end-0 start-0 p-3 m-5 align-self-center"
              animation="grow"
              variant="light"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Card.Body>
              <Placeholder as={Card.Title} animation="wave">
                <Placeholder xs={10} bg="light" />
              </Placeholder>
              <Placeholder as={Card.Text} animation="wave">
                <Placeholder xs={8} bg="light" />
                <Placeholder xs={8} bg="light" />
              </Placeholder>
            </Card.Body>
          </>
        ) : (
          <>
            <Card.Img
              variant="top"
              src={fetchState.data.sprites.front_default}
            />
            <Card.Body>
              <Card.Title className="text-capitalize text-center">
                {`#${fetchState.data.id} ${fetchState.data.name}`}
              </Card.Title>
              <ul>
                <li>Altezza: {fetchState.data.height}</li>
                <li>Peso: {fetchState.data.weight}</li>
              </ul>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
}

export default PokemonItem;
