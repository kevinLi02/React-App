import {
  StyledChampCard,
  SmallContainer,
  RankContainer,
  NameContainer,
} from "./styles/ChampCard.styled";

import DeleteChamp from "./DeleteChamp";
const ChampCard = (props) => {
  return (
    <StyledChampCard>
      <DeleteChamp
        setDeleted={props.setDeleted}
        deleted={props.deleted}
        champ={props.name}
      />
      <RankContainer>{props.rank + 1} </RankContainer>
      <NameContainer disabled={true}>{props.name} </NameContainer>
      <SmallContainer>Jungle </SmallContainer>
      <SmallContainer>{props.winrate} </SmallContainer>
      <SmallContainer>{props.sample} </SmallContainer>
    </StyledChampCard>
  );
};

export default ChampCard;
