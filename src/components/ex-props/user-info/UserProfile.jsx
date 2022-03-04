import Address from "./Address";
import UserInfo from "./UserInfo";
import Company from "./Company";

function UserProfile({ user }) {
  return (
    <>
      <UserInfo name={user.name} surname={user.surname} age={user.age} />
      <hr />
      <Address
        name={user.address.name}
        city={user.address.city}
        country={user.address.country}
      />
      <hr />
      <Company name={user.company.name} address={user.company.address} />
    </>
  );
}

export default UserProfile;
