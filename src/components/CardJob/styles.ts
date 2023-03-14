import styled from "styled-components";

export const CardJobStyle = styled.div`
  width: 1100px;
  height: 110px;
  border-radius: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  margin: 25px;

  h3,
  p {
    width: 260px;
    font-size: 13px;
    margin: 5px;
    margin-left: 40px;
  }

  .insideCard {
    width: 100%;
    height: 140px;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;
    background-color: #ffff;
    font-weight: 400;
  }

  .textPane {
  }

  .buttonPane {
    width: 50%;
    height: 120px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    button {
      width: 90px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background-color: #a548ff;
      color: white;
      margin-top: 12px;
      margin: 10px;
    }
  }
`;
