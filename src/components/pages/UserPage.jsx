import { useParams } from "react-router-dom";

function UserPage() {
  const params = useParams();

  return (
    <main className="vh-100">
      <h1>User page</h1>
      <h2>{params.username}</h2>
    </main>
  );
}

export default UserPage;
