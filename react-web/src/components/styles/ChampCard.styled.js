import styled from "styled-components";

export const StyledChampCard = styled.div`
  display: flex;
  align-item: center;
  background-color: #e2e2e2;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.3);
  padding: 7px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin: 9px 2px;
  h3 {
    margin: 10px;
    flex-direction: row;
  }
`;

export const SmallContainer = styled.div`
  text-align: center;
  width: 15vw;
  padding-right: 2vw;
  font-size: 23px;
`;

export const RankContainer = styled.div`
  text-align: center;
  width: 14vw;
  padding-left: 0.5vw;
  font-size: 23px;
`;

export const NameContainer = styled.div`
  text-align: center;
  width: 22vw;
  font-size: 23px;
  padding-right: 2vw;
  disabled;
 
`;
