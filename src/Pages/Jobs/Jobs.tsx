import React, { useState, useEffect, useContext } from "react";
import { JobsStyle } from "./styles";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { CdJob } from "../../types/CdJob";
import { v4 as uuidv4, v4, V4Options } from "uuid";
import CardJob from "../../components/CardJob/CardJob";
import { CdJobApplication } from "../../components/CdJobAppli/CdJobApplication";
import { User } from "../../types/User";
import HomeBar from "../../components/HomeBar/HomeBar";
import { useApi } from "../../hooks/useApi";

export function Jobs() {
  const [id, setId] = useState("");

  //Dados do contexto
  const auth = useContext(AuthContext);
  const user = auth.user;
  const api = useApi();

  const [items, setItems] = useState([]);
  const [job, setJob] = useState<CdJob>();
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    async function getJobsData() {
      const response = await fetch(`${import.meta.env.VITE_PROD_HOST}jobs/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const responseJSON = await response.json();

      setItems(responseJSON);
    }
    getJobsData();
    console.log("Roda a cada renderização.");
    console.log(items);
    console.log(process.env.NODE_ENV);
  }, []);

  function jobApplicationFactory(
    objeto1: User,
    objeto2: CdJob,
    estimatedTime: string
  ) {
    let cdJob = new CdJobApplication(
      id,
      objeto1,
      objeto2,
      objeto2.issueDate,
      estimatedTime
    );

    setApplicationData(cdJob);
    console.log(cdJob);
  }

  async function getCdJobData(id: String) {
    items.forEach((mapped: any) => {
      if (id === mapped.id) {
        setJob(mapped);
        setIsHidden(false);
      } else {
        console.log("Processando dados do job...");
      }
    });
    console.log(job);
  }

  async function setApplicationData(objeto: CdJobApplication) {
    await fetch(`${import.meta.env.VITE_PROD_HOST}applications/create`, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `${import.meta.env.SECRET_TOKEN}`,
      },
      body: JSON.stringify(objeto),
    }).then(() => {
      console.log("Um nova application foi criada!");
    });
  }

  return (
    <JobsStyle>
      <div className="login-box">
        <h1>Free's pertinho de você</h1>
        <div className="userBox">
          <div className="show-jobs-div">
            {items.map((mapped: any) => (
              <CardJob
                key={mapped.id}
                title={mapped.title}
                description={mapped.description}
                requiredExperience={mapped.requiredExperience}
                companyName={mapped.companyName}
                city={mapped.city}
                paymentValue={mapped.paymentValue}
                click={() => getCdJobData(mapped.id)}
              />
            ))}
          </div>
          <div>
            <div className="showJobInfo">
              <h3 hidden={isHidden}>{job?.title}</h3>
              <p hidden={isHidden}>Descrição: {job?.description}</p>
              <p hidden={isHidden}>
                Nível de experiência: {job?.requiredExperience}
              </p>
              <p hidden={isHidden}>Empresa: {job?.companyName}</p>
              <p hidden={isHidden}>Cidade: {job?.city}</p>
              <p hidden={isHidden}>Valor: R${job?.paymentValue.valueOf()}</p>
              <div className="buttonPane">
                <button
                  hidden={isHidden}
                  onClick={() => jobApplicationFactory(user!, job!, "")}
                >
                  Inscrever-se
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeBar click={() => auth.signout()} />
    </JobsStyle>
  );
}
