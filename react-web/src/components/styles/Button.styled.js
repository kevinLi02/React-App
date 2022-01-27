import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 900;
  font-size: 25px;
  width: 8.5vw;
  height: 4.5vh;
  opacity: 1;
  font-family: monospace;
  background-color: ${({ bg }) => bg || "#333"};
  color: ${({ color }) => color || "white"};
  &:disabled {
    color: #009dff;
    pointer-events: none;
    border-bottom: 5px solid #009dff;
    margin-top: 2.5px;
  }
  &:hover {
    color: #009dff;
  }
`;
