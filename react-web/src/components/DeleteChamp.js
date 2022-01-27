import React from "react";
import { StyledDeleteChamp } from "./styles/DeleteChamp.styled";
const DeleteChamp = (props) => {
  const deleteChamp = () => {
    const newDeleted = new Set([...props.deleted, props.champ]);
    props.setDeleted(newDeleted);
  };
  return (
    <StyledDeleteChamp>
      <button onClick={deleteChamp}>&times;</button>
    </StyledDeleteChamp>
  );
};

export default DeleteChamp;
