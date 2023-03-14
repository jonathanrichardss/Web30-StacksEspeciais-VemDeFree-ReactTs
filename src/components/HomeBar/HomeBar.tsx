import { Link } from "react-router-dom";
import { HomeBarStyle } from "./styles";

interface HomeBarProps {
  click: () => any;
}

export default function HomeBar(props: HomeBarProps) {
  return (
    <HomeBarStyle>
      <Link to={"/dashboard"}>
        <button>Meu Perfil</button>
      </Link>
      <Link to={"/"}>
        <button>Página Principal</button>
      </Link>
      <Link to={"/jobs"}>
        <button>Jobs</button>
      </Link>
      <button className="logout" onClick={() => props.click()}>
        Logout
      </button>
    </HomeBarStyle>
  );
}
