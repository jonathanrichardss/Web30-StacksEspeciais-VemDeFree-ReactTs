import styled from "styled-components";

export const HomeBarStyle = styled.div`
  width: 100vw;
  height: 115px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  font-size: 25px;
  margin-top: 35px;
  background-color: #ffff;

  button {
    width: 170px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background-color: #a548ff;
    color: white;
    margin-top: 12px;
    margin: 10px;
  }

  .logout {
    width: 80px;
    background-color: red;
    font-weight: 600;
  }
`;
