import { HomeStyle } from "./styles";
import Header from "../../components/Header/Header";
import { Welcome } from "../../components/Welcome/Welcome";
import CardJob from "../../components/CardJob/CardJob";
import { SearchByCitySection } from "../../components/SearchByCitySection/SearchByCitySection";
import { useEffect, useState } from "react";
import React from "react";

const jobsData = [
  {
    id: 1,
    title: "Job1",
    description: "Job Desc1",
    required_experience: "Required Experience1",
  },
  {
    id: 2,
    title: "Job1",
    description: "Job Desc1",
    required_experience: "Required Experience1",
  },
  {
    id: 3,
    title: "Job1",
    description: "Job Desc1",
    required_experience: "Required Experience1",
  },
  {
    id: 4,
    title: "Job1",
    description: "Job Desc1",
    required_experience: "Required Experience1",
  },
  {
    id: 5,
    title: "Job1",
    description: "Job Desc1",
    required_experience: "Required Experience1",
  },
  {
    id: 6,
    title: "Job1",
    description: "Job Desc1",
    required_experience: "Required Experience1",
  },
];

export default function Home() {
  const [items, setItems] = useState([]);
  const [jobsDataTest, setJobsData] = useState([]);

  useEffect(() => {
    async function getJobsData() {
      const response = await fetch("http://localhost:8080/jobs/listar-todos");

      const responseJSON = await response.json();

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
          {items.map((mapped) => (
            <CardJob
              key={mapped.id}
              title={mapped.title}
              description={mapped.description}
              required_experience={mapped.required_experience}
            />
          ))}
        </div>
      </div>
    </HomeStyle>
  );
}
