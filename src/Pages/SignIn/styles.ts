import styled from "styled-components";

export const SignInStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: purple;

  .login-box {
    width: 300px;
    height: 300px;
    background-color: white;
    box-shadow: 3;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: white;
    margin-bottom: 70px;
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

  p {
    padding-top: 10px;
    font-weight: 800;
    font-size: 13px;
    color: black;
  }
`;

export const SignInForm = styled.form``;
