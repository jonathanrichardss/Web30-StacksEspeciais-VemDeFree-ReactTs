import React, { useState, useEffect, useContext } from "react";
import { SignInStyle } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import HomeBar from "../../components/HomeBar/HomeBar";
import { useApi } from "../../hooks/useApi";

export function SignIn() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const api = useApi();

  const [email, setEmail] = useState("Sua jornada começa aqui.");
  const [password, setPassword] = useState("");
  const [loginInvalido, setLoginInvalido] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate("/dashboard");
      } else {
        setLoginInvalido("Usuário e/ou senha incorretos, tente novamente.");
      }
    }
  };
  return (
    <SignInStyle>
      <h1>{email}</h1>
      <div className="login-box">
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={() => handleLogin()}>
          Entrar
        </button>
        <p>{loginInvalido}</p>
        <Link to="/signup">
          <p>Novo(a) aqui? Cadastre-se!</p>
        </Link>
      </div>
      <HomeBar click={() => auth.signout()} />
    </SignInStyle>
  );
}
