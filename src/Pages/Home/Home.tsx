import { HomeStyle } from "./styles";
import Header from "../../components/Header/Header";
import { Welcome } from "../../components/Welcome/Welcome";
import CardJob from "../../components/CardJob/CardJob";
import { SearchByCitySection } from "../../components/SearchByCitySection/SearchByCitySection";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create();

export default function Home() {
  const [items, setItems] = useState([]);
  const [jobsDataTest, setJobsData] = useState([]);
  const navigate = useNavigate();

  function handleClick(e: any) {
    console.log("funcionando");
    navigate("/jobs");
    return e;
  }

  useEffect(() => {
    async function getJobsData() {
      const response = await api.get("http://localhost:8080/jobs/list", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });

      const responseJSON = await response.data;

      setItems(responseJSON);
    }
    getJobsData();
    console.log("Roda a cada renderização.");
    console.log(jobsDataTest);
  }, [jobsDataTest]);

  return (
    <HomeStyle>
      <Header />
      <Welcome />
      <SearchByCitySection />
      <div className="show-content-section">
        <h1>Free's na sua região:</h1>
        <h3>{jobsDataTest.toString()}</h3>
        <div className="show-jobs-div">
          {items.map((mapped: any) => (
            <CardJob
              key={mapped}
              title={mapped.title}
              description={mapped.description}
              requiredExperience={mapped.requiredExperience}
              company={mapped.company}
              city={mapped.city}
              paymentValue={mapped.paymentValue}
              click={() => handleClick(mapped.id)}
            />
          ))}
        </div>
      </div>
    </HomeStyle>
  );
}
