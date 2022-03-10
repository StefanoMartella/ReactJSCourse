import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

  return (
    <main className="vh-100">
      <h1>About page</h1>
      <button onClick={() => navigate("/")}>Vai alla home</button>
    </main>
  );
}

export default AboutPage;
