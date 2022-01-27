import styled from "styled-components";

export const StyledButton2 = styled.button`
  border: none;
  cursor: pointer;
  font-family: "Oxygen", sans-serif;
  background-color: ${({ bg }) => bg || "#333"};
  color: ${({ color }) => color || "white"};
  display: block;
  width: 15vw;
  height: 5.5vh;
  border-radius: 1px;
  font-weight: 800;
  margin-right: 0.5vw;
  &:hover {
    background-color: ${({ color }) => color || "lawngreen"};
    color: #075200;
  }
`;
