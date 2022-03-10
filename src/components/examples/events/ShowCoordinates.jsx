import { useState } from "react";

function ShowCoordinates() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ height: "100vh", display: "flex", justifyContent: "center" }}
    >
      <div style={{ alignSelf: "center" }}>
        <h1>X: {coords.x}</h1>
        <h1>Y: {coords.y}</h1>
      </div>
    </div>
  );
}

export default ShowCoordinates;
