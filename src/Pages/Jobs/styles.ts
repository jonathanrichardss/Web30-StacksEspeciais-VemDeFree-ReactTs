import styled from "styled-components";

export const JobsStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: purple;

  .userBox {
    width: 1000px;
    height: 350px;
    margin: 30px;
    padding-top: 20px;
    border-radius: 8px;
    box-shadow: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .login-box {
    width: 1100px;
    height: 490px;
    padding-top: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-box2 {
    width: 400px;
    height: 350px;
    padding-top: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .showJobInfo {
    width: 500px;
    height: 330px;
    padding-top: 20px;
    margin-bottom: 30px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-indent: 32px;
    font-size: 14px;
  }

  .userData {
    width: 400px;
    height: 300px;
    padding-top: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 3;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin-left: 10px;

    p {
      padding: 0;
      margin-left: 50px;
      font-weight: 600;
    }
  }

  input {
    margin: 5px;
    width: 300px;
    height: 30px;
  }

  button {
    margin-top: 15px;
    width: 150px;
    height: 30px;
  }

  .show-jobs-div {
    width: 500px;
    height: 400px;
    background-color: #b1c0dd;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;
    margin-bottom: 20px;
    overflow: scroll;
  }

  .insideCard {
    background-color: #b1c0dd;
  }

  button {
    width: 150px;
    height: 40px;
    margin: 20px;
    border-radius: 25px;
    border: none;
    background-color: #a548ff;
    color: #ffff;
    font-size: 13px;
    font-weight: 600;
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
    background-color: white;
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
    align-self: flex-end;
  }
`;
