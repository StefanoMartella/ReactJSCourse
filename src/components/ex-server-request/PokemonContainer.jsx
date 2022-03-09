import React, { useEffect, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import PokemonItem from "./PokemonItem";

function PokemonContainer() {
  const controller = useRef();
  const [fetchState, setFetchState] = React.useState({
    data: [],
    next: null,
    loading: true,
    error: null,
  });

  const fetch = (url = "https://pokeapi.co/api/v2/pokemon?limit=10") => {
    axios
      .get(url, {
        signal: controller.current.signal,
      })
      .then(({ data: { results, next } }) =>
        setFetchState((oldFetchState) => ({
          data: [...oldFetchState.data, ...results],
          next,
          loading: false,
          error: null,
        }))
      )
      .catch((error) =>
        setFetchState((oldFetchState) => ({
          ...oldFetchState,
          loading: false,
          error,
        }))
      );
  };

  useEffect(() => {
    controller.current = new AbortController();

    fetch();

    return () => controller.current.abort();
  }, []);

  return (
    <div>
      {!fetchState.loading && (
        <Container className="card my-5 p-5 flex-row flex-wrap bg-light">
          {fetchState.data.map((pokemon) => (
            <PokemonItem key={pokemon.name} item={pokemon} />
          ))}
          {fetchState.next && (
            <div className="mt-5 w-100 text-center">
              <Button onClick={() => fetch(fetchState.next)} variant="primary">
                Carica altro
              </Button>
            </div>
          )}
        </Container>
      )}
    </div>
  );
}

export default PokemonContainer;
