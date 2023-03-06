import styled from "styled-components";

export const SignUpStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: purple;

  .login-box {
    width: 300px;
    height: 450px;
    padding-top: 20px;
    border-radius: 8px;
    background-color: white;
    box-shadow: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    margin: 5px;
    width: 200px;
    height: 30px;
  }

  button {
    margin-top: 15px;
    width: 150px;
    height: 30px;
  }
`;

export const SignInForm = styled.form``;
