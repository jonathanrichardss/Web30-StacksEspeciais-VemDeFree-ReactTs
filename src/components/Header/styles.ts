import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 88vw;
  height: 28.4rem;
  display: flex;
  flex-direction: row;
  margin: 20px;
  margin-left: 0;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 52px;
    font-weight: 500;
    margin: 30px;
    color: black;
  }

  .hdr-image {
    height: 350px;
    position: relative;
  }

  .lft-hdr {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 50px;
    margin-left: 0;
    text-align: center;
  }

  .rgt-hdr {
    max-width: 50%;
    height: 450px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;
