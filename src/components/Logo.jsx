import logo from "../assets/The-logo.png"; // Ajustez le chemin si nécessaire
import { Link } from "react-router-dom"; // Importation de Link depuis react-router-dom
export default function Logo() {
  return (
    <div className="mx-1 hover:scale-110 transition-all">
      <Link to="">
        <img src={logo} alt="Logo" className="shadow-lg rounded-lg h-12 w-12" />
      </Link>
    </div>
  );
}
