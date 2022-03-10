import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-100 bg-primary p-4">
      <Link className="mx-4 text-white h5" to="/">
        Home
      </Link>
      <Link className="mx-4 text-white h5" to="/about">
        About
      </Link>
      <Link className="mx-4 text-white h5" to="/contact">
        Contatti
      </Link>
      <Link className="mx-4 text-white h5" to="/profile">
        Profilo
      </Link>
    </nav>
  );
}

export default Navbar;
