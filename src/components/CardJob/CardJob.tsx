import { Component, ReactEventHandler } from "react";
import { CardJobStyle } from "./styles";

interface JobProps {
  title: string;
  description: string;
  requiredExperience: string;
  companyName: string;
  city: string;
  paymentValue: number;
  click: () => any;
}

export default function CardJob(props: JobProps) {
  return (
    <CardJobStyle>
      <div className="insideCard">
        <div className="textPane">
          <h3>{props.title}</h3>
          <p>Descrição: {props.description}</p>
          <p>Nível De Experiência: {props.requiredExperience}</p>
          <p>Empresa: {props.companyName}</p>
          <p>Cidade: {props.city}</p>
          <p>Valor: R${props.paymentValue}</p>
        </div>
        <div className="buttonPane">
          <button onClick={() => props.click()}>Quero free</button>
        </div>
      </div>
    </CardJobStyle>
  );
}
