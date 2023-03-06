import styled from "styled-components";

export const WelcomeSection = styled.section`

    width: 100vw;
    height: 400px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 50px;
        font-size: 40px;
        font-weight: 500;
    }

    button { 
        width: 270px;
        height: 60px;
        margin: 20px;
        border-radius: 25px;
        border: none;
        background-color: #a548ff;
        color: #FFFF;
        font-size: 25px;
        font-weight: 600;
    }

    .btn-section {
        margin-bottom: 80px;
    }

`;