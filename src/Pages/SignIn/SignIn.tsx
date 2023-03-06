import React, { useState } from "react";
import { SignInStyle } from "./styles";
import { Link } from "react-router-dom";

export function SignIn() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function getUserName() {
    return setUserName(username);
  }

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
        <input type="text" id="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
        <Link to="/signup">
          <p>Novo(a) aqui? Cadastre-se!</p>
        </Link>
        <h3>{username}</h3>
      </div>
    </SignInStyle>
  );
}
