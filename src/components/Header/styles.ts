import styled from "styled-components";


export const HeaderStyle = styled.div`
    width: 100%;
    height: 28rem;
    display: flex;
    flex-direction: row;
    margin: 20px;
    margin-left: 0;
    

    h1 {
        font-size: 52px;
        font-weight: 500;
        margin: 30px;   
        color: black;
    }

    
   .hdr-image {
        max-width: 800px;
        max-height: 800px;
        position: relative;
        margin: -50px 0px;
    }


    .lft-hdr {
        width: 30%;
    }

    .rgt-hdr {
        width: 60%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }

`;
