import React, { useState } from "react";
import BeerItem from "./BeerItem";
import Input from "./Input";

function BeerList({ beers }) {
  const [search, setSearch] = useState("");

  const onChange = (event) => setSearch(event.target.value.toLowerCase());

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: 950,
      }}
    >
      <Input placeholder="Scrivi per filtrare" onChange={onChange} />
      <div>
        {beers
          .filter((aBeer) => aBeer.name.toLowerCase().includes(search))
          .map((aMatchingBeer, index) => (
            <BeerItem
              key={aMatchingBeer.id}
              beer={aMatchingBeer}
              isEven={index % 2 === 0}
            />
          ))}
      </div>
    </div>
  );
}

export default BeerList;
