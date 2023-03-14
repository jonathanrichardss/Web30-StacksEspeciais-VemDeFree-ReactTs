import styled from "styled-components";

export const SignUpStyle = styled.div`
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
    margin: 20px;
    padding-top: 20px;
    border-radius: 8px;
    box-shadow: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .login-box {
    width: 1000px;
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
    width: 120px;
    height: 35px;
    border-radius: 8px;
    border: none;
    background-color: #a548ff;
    color: white;
    margin-top: 12px;
    margin: 10px;
  }
`;

export const SignInForm = styled.form``;
