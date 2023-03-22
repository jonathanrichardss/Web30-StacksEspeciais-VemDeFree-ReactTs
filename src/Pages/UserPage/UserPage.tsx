import React, { useState, useEffect, useContext } from "react";
import { SignUpStyle } from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CdJob } from "../../components/CdJob/CdJob";
import { v4 as uuidv4, v4, V4Options } from "uuid";
import HomeBar from "../../components/HomeBar/HomeBar";
import { useApi } from "../../hooks/useApi";

export function UserPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [requiredExperience, setRequiredExperience] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [timeJob, setTimeJob] = useState("");
  const [paymentValue, setPaymentValue] = useState(0);

  //Dados do contexto
  const auth = useContext(AuthContext);
  const user = auth.user;
  const api = useApi();

  let id = uuidv4().toString();

  function cdJobFactory(
    id: String,
    title: String,
    description: String,
    requiredExperience: String,
    companyName: String,
    city: String,
    issueDate: String,
    timeJob: String,
    paymentValue: Number
  ) {
    let cdJob = new CdJob(
      id,
      title,
      description,
      requiredExperience,
      companyName,
      city,
      issueDate,
      timeJob,
      paymentValue
    );

    setCdJobData(cdJob);
    console.log(cdJob);
  }

  async function setCdJobData(objeto: CdJob) {
    await fetch(`${import.meta.env.VITE_PROD_HOST}jobs/create`, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `${import.meta.env.SECRET_TOKEN}`
      },
      body: JSON.stringify(objeto),
    }).then(() => {
      console.log("Um novo free foi criado!");
    });
  }

  return (
    <SignUpStyle>
      <div className="login-box">
        <h1>Seja bem-vindo {user?.name}!</h1>
        <div className="userBox">
          <div className="userData">
            <p>Endereço: {user?.address}</p>
            <p>Email: {user?.email}</p>
            <p>Perfil: {user?.idProfile}</p>
            <p>Id: {user?.nrCpfCnpj}</p>
          </div>

          <div className="login-box2">
            <label htmlFor="title"></label>
            <input
              type="text"
              id="title"
              placeholder="Um titulo bacana para seu free."
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              id="description"
              placeholder="Descreva o job em poucas palavras"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              type="text"
              id="requiredExperience"
              placeholder="Nível de experiência"
              onChange={(e) => {
                setRequiredExperience(e.target.value);
              }}
            />
            <input
              type="text"
              id="company"
              placeholder="Nome da empresa"
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
            <input
              type="text"
              id="city"
              placeholder="De qual cidade?"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              type="date"
              id="timeJob"
              placeholder="Quanto tempo?"
              onChange={(e) => {
                setTimeJob(e.target.value);
              }}
            />

            <input
              type="number"
              id="paymentValue"
              placeholder="Quanto paga?"
              onChange={(e) => {
                setPaymentValue(e.target.valueAsNumber);
              }}
            />
            <button
              type="submit"
              onClick={() =>
                cdJobFactory(
                  id,
                  title,
                  description,
                  requiredExperience,
                  companyName,
                  city,
                  issueDate,
                  timeJob,
                  paymentValue
                )
              }
            >
              Criar Job
            </button>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <HomeBar click={() => auth.signout()} />
    </SignUpStyle>
  );
}
