import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
  & > div,
  & > ul {
    flex: 1;
  }
  input {
    height: 5vh;
    width: 100vw;
    max-width: 100%;
    font-size: 20px;
    padding: 0px 10px;
  }
  ::before {
    content: "";
  }

  ::after {
    content: "";
  }
  button {
    font-size: 20px;
  }
`;
