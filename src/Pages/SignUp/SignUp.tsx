import React, { useContext, useState } from "react";
import { User } from "../../components/User/User";
import { SignUpStyle } from "./styles";
import { v4 as uuidv4, v4, V4Options } from "uuid";
import { useNavigate } from "react-router-dom";
import HomeBar from "../../components/HomeBar/HomeBar";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function SignUp() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [nrCpjCnpj, setNrCpjCnpj] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [idProfile, setIdProfile] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [applications, setApplications] = useState<String[]>([]);
  const navigate = useNavigate();
  const api = useApi();

  const auth = useContext(AuthContext);

  let id = uuidv4();

  function userFactory(
    id: String,
    name: String,
    password: String,
    dateOfBirth: String,
    email: String,
    nrCpfCnpj: String,
    gender: String,
    address: String,
    idProfile: String,
    isActive: Boolean,
    applications: String[]
  ) {
    let user = new User(
      id,
      name,
      password,
      dateOfBirth,
      email,
      nrCpfCnpj,
      gender,
      address,
      idProfile,
      isActive,
      applications
    );
    setUserData(user);
    navigate("/signin");
    console.log(user);
  }

  function setUserData(objeto: User) {
    fetch(`${import.meta.env.VITE_PROD_HOST}users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `${import.meta.env.SECRET_TOKEN}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(objeto),
    }).then(() => {
      console.log("Um novo usuário foi criado!");
    });
  }

  return (
    <SignUpStyle>
      <div className="login-box">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          placeholder="Um nome que você acha legal."
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="date"
          id="date"
          placeholder="Data de nascimento"
          onChange={(e) => {
            setDateOfBirth(e.target.value);
          }}
        />
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="nrCpfCnpj"
          id="nrCpfCnpj"
          placeholder="CPF ou CNPJ"
          onChange={(e) => {
            setNrCpjCnpj(e.target.value);
          }}
        />
        <input
          type="gender"
          id="gender"
          placeholder="Genêro"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <input
          type="address"
          id="address"
          placeholder="Seu endereço residencial ou comercial."
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <input
          contentEditable={false}
          type="profile"
          id="profile"
          placeholder="Escolha o seu perfil"
          onChange={(e) => {
            setIdProfile(e.target.value);
          }}
        />

        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          placeholder="Crie um senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="repeat-password"
          placeholder="Repetir Senha"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() =>
            userFactory(
              id,
              username,
              password,
              dateOfBirth,
              email,
              nrCpjCnpj,
              gender,
              address,
              idProfile,
              isActive,
              applications
            )
          }
        >
          Cadastrar
        </button>
        <h3>{username}</h3>
      </div>
      <HomeBar click={() => auth.signout()} />
    </SignUpStyle>
  );
}
