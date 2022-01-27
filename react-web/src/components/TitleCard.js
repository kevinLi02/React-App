import React from "react";
import ButtonComp from "./ButtonComp";
import { useState } from "react";
import {
  StyledTitleCard,
  SampleContainer,
  RankContainer,
  NameContainer,
  RoleContainer,
  WinrateContainer,
} from "./styles/TitleCard.styled";
const TitleCard = (props) => {
  const onClickName = () => {
    setSampleDisabled(false);
    setNameDisabled(true);
    setWinrateDisabled(false);
    setRankingDisabled(false);
    props.ocName();
  };
  const onClickWinrate = () => {
    setSampleDisabled(false);
    setNameDisabled(false);
    setWinrateDisabled(true);
    setRankingDisabled(false);
    props.ocWinrate();
  };
  const onClickSample = () => {
    setSampleDisabled(true);
    setNameDisabled(false);
    setWinrateDisabled(false);
    setRankingDisabled(false);
    props.ocSample();
  };
  const onClickRanking = () => {
    setSampleDisabled(false);
    setNameDisabled(false);
    setWinrateDisabled(false);
    setRankingDisabled(true);
    props.ocRanking();
  };
  const [nameDisabled, setNameDisabled] = useState(false);
  const [winrateDisabled, setWinrateDisabled] = useState(false);
  const [sampleDisabled, setSampleDisabled] = useState(false);
  const [rankingDisabled, setRankingDisabled] = useState(true);
  return (
    <StyledTitleCard>
      <RankContainer>
        <ButtonComp
          onClick={onClickRanking}
          disabled={rankingDisabled}
          text="Rank"
        />
      </RankContainer>
      <NameContainer>
        <ButtonComp
          onClick={onClickName}
          disabled={nameDisabled}
          text="Champion"
        />
      </NameContainer>

      <RoleContainer>Role</RoleContainer>
      <WinrateContainer>
        <ButtonComp
          onClick={onClickWinrate}
          disabled={winrateDisabled}
          text="Winrate"
        />
      </WinrateContainer>
      <SampleContainer>
        <ButtonComp
          onClick={onClickSample}
          disabled={sampleDisabled}
          text="Sample"
        />
      </SampleContainer>
    </StyledTitleCard>
  );
};

export default TitleCard;
