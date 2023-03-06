import react from "react";
import { WelcomeSection } from "./styles";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <WelcomeSection>
      <h1>VemDeFree!</h1>
      <div className="btn-section">
        <Link to="/signin">
          <button>Quero anunciar!</button>
        </Link>
        <button>Quero Free!</button>
      </div>
    </WelcomeSection>
  );
}
