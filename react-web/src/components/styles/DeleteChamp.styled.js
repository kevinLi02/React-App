import styled from "styled-components";

export const StyledDeleteChamp = styled.div`
  margin: 0px 4px;
  button {
    background-color: #777;
    font-family: Arial, sans-serif;
    font-weight: 1500;
    color: white;
    font-size: 1.1vw;
    padding: 0px 0.25vw;
    width: 1.4vw;
    height: 2.8vh;
    margin: auto;
    text-align: center;

    &:hover {
      background-color: red;
    }

    &:active {
      transform: scale(0.91);
    }
  }
`;
