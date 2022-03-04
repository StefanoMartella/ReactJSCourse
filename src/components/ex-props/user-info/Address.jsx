function Address({ name, city, country, showTitle = true }) {
  return (
    <div>
      {showTitle === true && <p>Indirizzo:</p>}
      <div>Via: {name}</div>
      <div>Città: {city}</div>
      <div>Nazione: {country}</div>
    </div>
  );
}

export default Address;
