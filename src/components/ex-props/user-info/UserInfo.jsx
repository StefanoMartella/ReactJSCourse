function UserInfo({ name, surname, age }) {
  return (
    <div>
      <p>Informazioni personali:</p>
      <div>
        <p>Nome: {name}</p>
      </div>
      <div>
        <p>Cognome: {surname}</p>
      </div>
      <div>
        <p>Età: {age}</p>
      </div>
    </div>
  );
}

export default UserInfo;
