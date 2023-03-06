import React, { useState, useEffect } from "react";
import { SignInStyle } from "./styles";
import { Link } from "react-router-dom";
import { User } from "../../components/User/User";

export function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [autentication, setAutentication] = useState({});

  function getAutentication(username: String, password: String) {
    fetch("http://localhost:8080/users").then((res) => res.json());
  }

  useEffect(() => {
    async function getAutentication(username: String, password: String) {
      const req = await fetch("http://localhost:8080/users/users/list-all");

      const responseJSON = await req.json();

      setAutentication(responseJSON);
    }

    if (autentication.username) {
      return;
    }
    getAutentication(username, password);
    console.log("Roda a cada renderização.");
    console.log(getAutentication);
  }, [autentication]);

  return (
    <SignInStyle>
      <div className="login-box">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Usuário"
          onChange={(e) => setUserName(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="text"
          id="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          onSubmit={() => getAutentication(username, password)}
        >
          Entrar
        </button>
        <Link to="/signup">
          <p>Novo(a) aqui? Cadastre-se!</p>
        </Link>
        <h3>{username}</h3>
      </div>
    </SignInStyle>
  );
}
