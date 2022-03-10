import { useState } from "react";

function InputPrinter() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input style={{ padding: 20 }} value={value} onChange={handleChange} />
      <h1>Valore invertito: {value.toUpperCase()}</h1>
    </>
  );
}

export default InputPrinter;
