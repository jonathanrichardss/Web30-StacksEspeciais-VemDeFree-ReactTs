import styled from "styled-components";

export const SearchByCity = styled.section`

    width: 100vw;
    height: 500px;
    background-color: #FF738e;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;  
    color: #ffff;

    button { 
        width: 200px;
        height: 50px;
        margin: 20px;
        border-radius: 5px;
        color: #FFFF;
    }

    .mainDiv {
        width: 100vw;
        margin: 20px;
        display: flex;
        justify-content: center;
    }


    .divTitle {
    }

    .mainTitle {
        font-size: 40px;
        width: 410px;
    }

    .search-by-city {
        width: 28rem;
        height: 4rem;
        border-radius: 25px;
        border: none;
        text-align: center;
        color: #a6a6a6;
        font-size: 35px;
        margin-top: 40px;
        margin-left: 120px;
    }

    .search-by-city::placeholder {
        color: #a6a6a6;
    }

    img {
        margin-left: 220px;
        width: 400px;
        height: 250px;
    }


`;