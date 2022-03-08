import { useState } from "react";

function PrintInput() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input onChange={handleChange} style={{ padding: 20 }} />
      <h1>Valore input: {value}</h1>
    </>
  );
}

export default PrintInput;
