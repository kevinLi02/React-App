import React from "react";
import { Flex } from "./styles/Flex.styled";
import { StyledSearch } from "./styles/Search.styled";
import Dropdown from "./DropDown";
const Search = (props) => {
  return (
    <StyledSearch>
      <Flex>
        <Dropdown
          onClickAggregate={props.onClickAggregate}
          onClickLog={props.onClickLog}
          onClickOpgg={props.onClickOpgg}
          onClickUgg={props.onClickUgg}
        />
        <input
          type="text"
          placeholder="Search By Champion Name"
          onChange={(searchWord) => {
            props.setSearch(searchWord.target.value);
          }}
        />
      </Flex>
    </StyledSearch>
  );
};

export default Search;
